
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
require("./db/db")
// Middleware
app.use(bodyParser.json());
const user_routes = require('./Routes/user.route')
app.use(cors())
app.use('/api',user_routes)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
