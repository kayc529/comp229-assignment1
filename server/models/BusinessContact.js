/* File name: BusinessConact.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

//MODEL FOR BUSINESS CONTACT

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
  { collection: 'businessContacts', timestamps: true }
);

module.exports = mongoose.model('BusinessContact', BusinessContactSchema);
