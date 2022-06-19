const dummyContacts = require('../dummyData/dummyContacts');
const BusinessContact = require('../models/BusinessContact');

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
  });
};

module.exports.displayAddContactPage = (req, res, next) => {
  res.render('pages/protected/add_contact_page');
};

module.exports.displayEditContactPage = (req, res, next) => {
  //update existing contact
  let id = req.params.id;

  BusinessContact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render('pages/protected/edit_contact_page', {
        contact: contactToEdit,
      });
    }
  });
};

module.exports.addNewContact = (req, res, next) => {
  let newContact = BusinessContact({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
  });

  BusinessContact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect('/business');
    }
  });
};

module.exports.editContact = (req, res, next) => {
  //update existing contact
};

module.exports.deleteContact = (req, res, next) => {
  //delete existing contact
  res.send('deleteContact');
};
