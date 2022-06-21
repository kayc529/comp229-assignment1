/* File name: requireAuth.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

//check if the user is authenicated
const requireAuth = (req, res, next) => {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
};

module.exports = requireAuth;
