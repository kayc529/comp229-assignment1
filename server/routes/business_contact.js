/* File name: business_contact.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

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

//middleware for authentication
const requireAuth = require('../middleware/requireAuth');

/*GET business page */
router.get('/', requireAuth, displayBusinessContactPage);

/*GET add contact page */
/*POST add contact page */
router
  .route('/add-contact')
  .get(requireAuth, displayAddContactPage)
  .post(requireAuth, addNewContact);

/*GET edit contact page */
/*POST edit contact page with id*/
router
  .route('/edit-contact/:id')
  .get(requireAuth, displayEditContactPage)
  .post(requireAuth, editContact);

/*GET delete contact page with id */
router.get('/delete-contact/:id', requireAuth, deleteContact);

module.exports = router;
