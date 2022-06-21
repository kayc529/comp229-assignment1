/* File name: business_contacts.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

//BusinessContact model
const BusinessContact = require('../models/BusinessContact');

/*GET business contact list READ*/
module.exports.displayBusinessContactPage = (req, res, next) => {
  //get contact list from db
  BusinessContact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('pages/protected/business_contacts_page', {
        contacts: contactList,
      });
    }
  }).sort({ contactName: 'asc' });
};

/*GET add contact page in order to add a new contact*/
module.exports.displayAddContactPage = (req, res, next) => {
  res.render('pages/protected/add_contact_page', {
    messages: req.flash('addContactMessage'),
  });
};

/*GET edit contact page in order to edit a contact*/
module.exports.displayEditContactPage = (req, res, next) => {
  //update existing contact
  let id = req.params.id;

  BusinessContact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err.msg);
      res.end(err);
    } else {
      //show the edit view
      res.render('pages/protected/edit_contact_page', {
        contact: contactToEdit,
        messages: req.flash('addContactMessage'),
      });
    }
  });
};

/*POST process the add contact page and create a new contact CREATE*/
module.exports.addNewContact = (req, res, next) => {
  let newContact = BusinessContact({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
  });

  //add new contact to the database
  BusinessContact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err.msg);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect('/business');
    }
  });
};

/*POST process the edit contact page and update an existing contact UPDATE*/
module.exports.editContact = (req, res, next) => {
  //update existing contact
  let id = req.params.id;

  let updatedContact = BusinessContact({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
  });

  //update the existing contact in the database
  BusinessContact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect('/business');
    }
  });
};

/*GET  process the delete by business contact id DELETE*/
module.exports.deleteContact = (req, res, next) => {
  //delete existing contact
  let id = req.params.id;

  //delete the existing contact in the database
  BusinessContact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect('/business');
    }
  });
};
