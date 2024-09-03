import mongoose from "mongoose";
const { Schema } = mongoose;


const UserSchema = new Schema({
    username:{
        type:String,
        size:String
    },
    email:{
      type:String,
      size:String  
    },password:{
        type:String,
        size:String,
        required:true
    },profilePic:{
        type:String,
        size:String,
        default: "",
    },
},
{ timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);