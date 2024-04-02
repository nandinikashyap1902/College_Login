const userModel = require('../Models/user.models')
const Student = require('../Models/Students.models')
const UploadHistoryModel = require('../Models/uploadHishtory.models')
const path = require("path")
const loginforCollege = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userModel.findOne({ username, password });
        if (existingUser) {
            
            return res.status(200).json({ msg: "Login successful", role: existingUser.role });
        } else {
            return res.status(401).json({ msg: "Unauthorized" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: "Internal server error" });
    }
}


const LoginforStudent=async(req,res)=>{
    try {
        const { name, email, contactNumber,resume} = req.body;
        
        const resumePath = req.files[0].path;
   
        const student = new Student({ name, email, contactNumber,resume:resumePath });
        await student.save();
        const currentDate = new Date();
        const uploadHistoryData = {
            student: name,
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
            resumeUrl: resumePath
          };
console.log(uploadHistoryData)
          const uploadHistoryEntry = new UploadHistoryModel(uploadHistoryData);
          await uploadHistoryEntry.save();
        res.status(201).json({ message: 'Student data saved successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}
const UploadHistory=async(req,res)=>{
    try {
        const uploadHistory = await UploadHistoryModel.find();
        res.json(uploadHistory);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}
const watchresume=async(req,res)=>{

}
const downloadResume = async (req, res) => {
    try {
      const { resumeUrl } = req.params;
      console.log(resumeUrl)
      const resumePath = path.join(__dirname, '../uploads', resumeUrl);
  console.log(resumePath)
      
      if (!isValidPath(resumePath)) {
        return res.status(400).json({ message: 'Invalid resume URL' });
      }
  
      
      if (fs.existsSync(resumePath)) {
        
        res.download(resumePath, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
          }
        });
      } else {
        res.status(404).json({ message: 'Resume not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
module.exports={LoginforStudent,UploadHistory,loginforCollege,watchresume,downloadResume}