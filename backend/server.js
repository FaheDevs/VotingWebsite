const express =require('express')
const app =express()
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');




dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connection successs "))


// activation of body parser
app.use(express.json()) 
// cors needs to be between body parser and urls 
app.use(cors())
// FIXME: www.ivoting.com/app/signup signup comes from the routes.js
app.use('/app',routesUrls)
app.listen(4000,() => console.log("server for ivoting is up and running "))