const mongoose = require("mongoose")
//for format
const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type: String,
        unique : [ true, "with this email user account already exists" ]
    },
    password : String,
})
//for operation 
const userModel = mongoose.model("user",userSchema)

module.exports = userModel