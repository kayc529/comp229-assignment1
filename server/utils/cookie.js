/* File name: cookie.css */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

//add a cookie to the response
const addCookie = (res, name, value, maxAge) => {
  res.cookie(name, value, { maxAge });
};

//remove a cookie from the client
const removeCookie = (res, name) => {
  res.cookie(name, '', { maxAge: 0 });
};

module.exports = { addCookie, removeCookie };
