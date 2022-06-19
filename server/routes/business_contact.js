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

router.get('/', requireAuth, displayBusinessContactPage);

router
  .route('/add-contact')
  .get(requireAuth, displayAddContactPage)
  .post(requireAuth, addNewContact);

router
  .route('/edit-contact/:id')
  .get(requireAuth, displayEditContactPage)
  .post(requireAuth, editContact);

router.get('/delete-contact/:id', requireAuth, deleteContact);

module.exports = router;
