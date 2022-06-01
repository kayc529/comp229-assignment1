var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'home' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { page: 'home' });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('index', { page: 'about' });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('index', { page: 'projects' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('index', { page: 'services' });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('index', { page: 'contact' });
});

module.exports = router;
