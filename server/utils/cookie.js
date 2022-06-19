const addCookie = (res, name, value, maxAge) => {
  res.cookie(name, value, { maxAge });
};

const removeCookie = (res, name) => {
  res.cookie(name, '', { maxAge: 0 });
};

module.exports = { addCookie, removeCookie };
