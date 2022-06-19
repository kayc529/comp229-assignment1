const User = require('../models/User');
let passport = require('passport');
let jwt = require('jsonwebtoken');

module.exports.displayHomePage = (req, res) => {
  res.render('index', { page: 'home' });
};

module.exports.displayAboutPage = (req, res) => {
  res.render('pages/about_page', { page: 'about' });
};

module.exports.displayProjectsPage = (req, res) => {
  res.render('pages/projects_page', { page: 'projects' });
};

module.exports.displayServicesPage = (req, res) => {
  res.render('pages/services_page', { page: 'services' });
};

module.exports.displayContactPage = (req, res) => {
  res.render('pages/contact_page', { page: 'contact' });
};

module.exports.displayLoginPage = (req, res) => {
  //check if user already logged in
  if (!req.user) {
    res.render('pages/login_page', { page: 'login', title: 'login' });
  } else {
    return res.redirect('/business');
  }
};

module.exports.displayRegisterPage = (req, res) => {
  //check if user already logged in
  if (!req.user) {
    res.render('pages/register_page', { page: 'register', title: 'Register' });
  } else {
    return res.redirect('/business');
  }
};

module.exports.loginUser = (req, res, next) => {
  //check if user exists in db
  passport.authenticate('local', (err, user, info) => {
    // server err?
    if (err) {
      console.log('failed to authenticate');
      console.log(err);
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        console.log('failed to login');
        console.log(err);
        return next(err);
      }

      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      const authToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 604800, // 1 week
      });

      /* TODO - Getting Ready to convert to API
            res.json({success: true, msg: 'User Logged in Successfully!', user: {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }, token: authToken});
            */

      //add username cookie
      res.cookie('username', user?.username, { maxAge: 604800 });
      return res.redirect('/business');
    });
  })(req, res, next);
};

module.exports.registerUser = (req, res, next) => {
  //create new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log(err);
      console.log('Error: Inserting New User');

      if (err.name == 'UserExistsError') {
        req.flash(
          'registerMessage',
          'Registration Error: User Already Exists!'
        );
        console.log('Error: User Already Exists!');
      }

      return res.render('pages/register_page', {
        title: 'Register',
        messages: req.flash('registerMessage'),
      });
    } else {
      /* TODO - Getting Ready to convert to API
        res.json({success: true, msg: 'User Registered Successfully!'});
        */
      console.log('register success!');
      return passport.authenticate('local')(req, res, () => {
        //add username cookie
        res.cookie('username', req.user?.username, { maxAge: 604800 });
        res.redirect('/business');
      });
    }
  });
};

module.exports.logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    //remove username cookie
    res.cookie('username', '', { maxAge: 0 });
    res.redirect('/');
  });
};
