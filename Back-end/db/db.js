const mongoose = require("mongoose")
// const mongoURL = "mongodb+srv://nandinikashyap2021:J0CGAwzolCN9lmDd@cluster0.wwdflqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const User = require('../Models/user.models')
  mongoose.connect('mongodb://localhost:27017/CollegeLoginDashbaord',{
}).then(()=>{
  console.log('connection sucessful')
}).catch((e)=>{
  console.log("not completed")
})

const defaultUsers = [
  { username: "student1", password: "password123", role: "student" },
  { username: "staff1", password: "password456", role: "staff" }
];

async function insertDefaultUsers() {
  try {
    for (const user of defaultUsers) {
      const existingUser = await User.findOne({ username: user.username });
      if (!existingUser) {
        await User.create(user);
      } 
    }
  } catch (error) {
    console.error('Error inserting default users:', error);
  } 
}

insertDefaultUsers();