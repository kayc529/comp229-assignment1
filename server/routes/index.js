var express = require('express');
var router = express.Router();

const {
  displayHomePage,
  displayAboutPage,
  displayProjectsPage,
  displayServicesPage,
  displayContactPage,
  displayLoginPage,
  displayRegisterPage,
  loginUser,
  registerUser,
  logoutUser,
} = require('../controllers/index');

/* GET home page. */
router.get('/', displayHomePage);

/* GET home page. */
router.get('/home', displayHomePage);

/* GET About page. */
// router.get('/about', displayAboutPage);

// /* GET Projects page. */
// router.get('/projects', displayProjectsPage);

// /* GET Services page. */
// router.get('/services', displayServicesPage);

// /* GET Contact Us page. */
// router.get('/contact', displayContactPage);

// /* GET & POST Login page. */
// router.route('/login').get(displayLoginPage).post(loginUser);

// /* GET & POST Register page. */
// router.route('/register').get(displayRegisterPage).post(registerUser);

// /* GET Logout user */
// router.route('/logout').get(logoutUser);

module.exports = router;
