
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
    type: String,
    required: true,
  },
  
}, { timestamps: true });

const Student = mongoose.model('Student', userSchema);

module.exports = Student;
