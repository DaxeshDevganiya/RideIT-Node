const mongoose =require("mongoose") ;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    requied:true,
  }
});

module.exports = mongoose.model("Ride-User", userSchema)
