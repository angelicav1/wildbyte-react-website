const router = require("express").Router();
const user = require("../models/User");

//REGISTER
router.post("/register", async (req,res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        //SAVE USER INFO
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

//LOGIN