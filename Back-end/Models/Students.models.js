// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  resume: {
    type: String, // Assuming you store file paths or URLs
    required: true,
    // validate: {
    //   validator: function(value) {
    //     // Check if the file ends with '.pdf'
    //     return value.endsWith('.pdf');
    //   },
    //   message: 'Only PDF files are allowed for resume uploads'
    // }
  },
  // You can add more fields as needed for user data
}, { timestamps: true });

const Student = mongoose.model('Student', userSchema);

module.exports = Student;
