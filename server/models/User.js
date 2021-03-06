/* File name: User.js */
/* Student's name: Kay Yan Cheung */
/* StudentID: 301183574 */
/* Date: Jun 21 2022 */

//MODEL FOR USER

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: '',
      trim: true,
      required: 'username is required',
    },
    email: {
      type: String,
      default: '',
      trim: true,
      required: 'email address is required',
    },
  },
  { collection: 'users', timestamps: true }
);

// configure options for User Model
let options = { missingPasswordError: 'Wrong / Missing Password' };
UserSchema.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', UserSchema);
