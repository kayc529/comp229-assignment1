/* File name: index.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { addCookie, removeCookie } = require('../utils/cookie');
const db = require('../config/db');

//GET to display the home page
module.exports.displayHomePage = (req, res) => {
  res.render('index', { page: 'home' });
};

//GET to display the about page
module.exports.displayAboutPage = (req, res) => {
  res.render('pages/about_page', { page: 'about' });
};

//GET to display the projects page
module.exports.displayProjectsPage = (req, res) => {
  res.render('pages/projects_page', { page: 'projects' });
};

//GET to display the services page
module.exports.displayServicesPage = (req, res) => {
  res.render('pages/services_page', { page: 'services' });
};

//GET to display the contact page
module.exports.displayContactPage = (req, res) => {
  res.render('pages/contact_page', { page: 'contact' });
};

//GET to display the login page
module.exports.displayLoginPage = (req, res) => {
  //check if user already logged in
  if (!req.user) {
    res.render('pages/login_page', {
      page: 'login',
      title: 'login',
      messages: req.flash('loginMessage'),
    });
  } else {
    return res.redirect('/business');
  }
};

//GET to display the register page
module.exports.displayRegisterPage = (req, res) => {
  //check if user already logged in
  if (!req.user) {
    res.render('pages/register_page', {
      page: 'register',
      title: 'Register',
      messages: req.flash('registerMessage'),
    });
  } else {
    return res.redirect('/business');
  }
};

//POST to process the login credentials and authenticate user
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

      const oneWeek = 1000 * 60 * 60 * 24 * 7;

      const authToken = jwt.sign(payload, db.Secret, {
        expiresIn: oneWeek, // 1 week
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
      addCookie(res, 'username', user?.username, oneWeek);
      return res.redirect('/business');
    });
  })(req, res, next);
};

//POST to process the register credentials and register and authenticate the user
module.exports.registerUser = (req, res, next) => {
  //create new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });

  //register user
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      if (err.name == 'UserExistsError') {
        req.flash(
          'registerMessage',
          'Registration Error: User Already Exists!'
        );
      }

      return res.render('pages/register_page', {
        title: 'Register',
        page: 'register',
        messages: req.flash('registerMessage'),
      });
    } else {
      /* TODO - Getting Ready to convert to API
        res.json({success: true, msg: 'User Registered Successfully!'});
        */
      console.log('register success!');
      return passport.authenticate('local')(req, res, () => {
        //add username cookie
        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        addCookie(res, 'username', req.user?.username, oneWeek);
        res.redirect('/business');
      });
    }
  });
};

//GET logout the user
module.exports.logoutUser = (req, res, next) => {
  //remove username cookie
  removeCookie(res, 'username');
  req.logout();
  res.redirect('/');
};
