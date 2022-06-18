const mongoose = require('mongoose');
const BusinessContactSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
  },
  { collection: 'businessContacts' }
);

module.exports = mongoose.Model('BusinessContact', BusinessContactSchema);
