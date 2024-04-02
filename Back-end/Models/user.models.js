// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
  }
  // You can add more fields as needed for user data (e.g., name, email, contact number)
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
