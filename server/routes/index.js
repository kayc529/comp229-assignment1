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
} = require('../controllers/index');

/* GET home page. */
router.get('/', displayHomePage);

/* GET home page. */
router.get('/home', displayHomePage);

/* GET About page. */
router.get('/about', displayAboutPage);

/* GET Projects page. */
router.get('/projects', displayProjectsPage);

/* GET Services page. */
router.get('/services', displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', displayContactPage);

/* GET Login page. */
router.get('/login', displayLoginPage);

/* GET Login page. */
router.get('/register', displayRegisterPage);

module.exports = router;
