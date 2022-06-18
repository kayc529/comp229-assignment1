module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { page: 'home' });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render('pages/about_page', { page: 'about' });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('pages/projects_page', { page: 'projects' });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render('pages/services_page', { page: 'services' });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render('pages/contact_page', { page: 'contact' });
};

module.exports.displayLoginPage = (req, res, next) => {
  res.render('pages/login_page', { page: 'login', title: 'login' });
};

module.exports.displayRegisterPage = (req, res, next) => {
  res.render('pages/register_page', { page: 'register', title: 'Register' });
};
