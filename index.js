const express = require('express');
const paypal = require('paypal-rest-sdk');
const {mongoose}=require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const expressSession=require('express-session');
mongoose.connect("mongodb+srv://admin:admin@cluster0.vaoawh4.mongodb.net/?retryWrites=true&w=majority")
app.listen(3000,(req,res)=>{
console.log("Started at 3000");
})
const signupController=require("./controllers/SignupController");

const loginController=require("./controllers/login");
app.post("/signup",signupController);
app.post("/login",loginController);