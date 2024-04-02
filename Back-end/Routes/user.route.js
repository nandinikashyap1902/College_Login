const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
  });
  
  const upload = multer({ storage: storage });
const user_controller = require('./users.controllers')
router.post('/login',user_controller.loginforCollege)
router.post('/Studentlogin',upload.array('resume',10),user_controller.LoginforStudent)
router.get('/uploadhistory',user_controller.UploadHistory)
router.get('/view-resume/:resumeUrl',user_controller.watchresume)
router.get('/download-resume/:resumeUrl',user_controller.downloadResume)
module.exports=router