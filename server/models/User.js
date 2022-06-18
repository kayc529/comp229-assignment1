const mongoose = require('mongoose');
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

module.exports = mongoose.Model('User', UserSchema);
