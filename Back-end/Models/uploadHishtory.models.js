
const mongoose = require('mongoose');

const uploadHistorySchema = new mongoose.Schema({
  student: {
    type:String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
  ,
  resumeUrl: {
    type: String,
    required: true
  }

}, { timestamps: true });

const UploadHistory = mongoose.model('UploadHistory', uploadHistorySchema);

module.exports = UploadHistory;
