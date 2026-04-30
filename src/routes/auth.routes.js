const express = require('express')
const userModel = require("../models/user.model")

const authRouter = express.Router() //defined a router

//Store in Database
authRouter.post("/register",async(req,res)=>{
    const {email,name,password} = req.body //Extract the Data

    const user = await userModel.create({
        email,password,name
    })
    //Send Response
    res.status(201).json({
        message : "user registered",
        user
    })
})

module.exports = authRouter //Export Router