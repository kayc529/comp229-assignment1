module.exports.displayBusinessContactPage = (req, res, next) => {
  res.render('pages/protected/business_contacts_page');
};

module.exports.displayAddContactPage = (req, res, next) => {
  res.render('pages/protected/add_contact');
};

module.exports.displayEditContactPage = (req, res, next) => {
  res.render('pages/protected/edit_contact');
};
