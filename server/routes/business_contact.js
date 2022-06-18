var express = require('express');
var router = express.Router();
const {
  displayBusinessContactPage,
  displayAddContactPage,
  displayEditContactPage,
} = require('../controllers/business_contacts');

//middleware
const requireAuth = require('../middleware/requireAuth');

router.get('/', displayBusinessContactPage);

router.get('/add-contact', displayAddContactPage);

router.get('/edit-contact', displayEditContactPage);

module.exports = router;
