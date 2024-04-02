const express = require('express')
const Rootrouter = express.Router()
const users = require('./users.route')
Rootrouter.use('/',users)

module.exports=Rootrouter