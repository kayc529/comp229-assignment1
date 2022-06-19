var express = require('express');
var router = express.Router();
const {
  displayBusinessContactPage,
  displayAddContactPage,
  displayEditContactPage,
  addNewContact,
  editContact,
  deleteContact,
} = require('../controllers/business_contacts');

//middleware
const requireAuth = require('../middleware/requireAuth');

router.get('/', displayBusinessContactPage);

router.route('/add-contact').get(displayAddContactPage).post(addNewContact);

router
  .route('/edit-contact/:id')
  .get(displayEditContactPage)
  .patch(editContact);

router.get('delete-contact/:id', deleteContact);

module.exports = router;
