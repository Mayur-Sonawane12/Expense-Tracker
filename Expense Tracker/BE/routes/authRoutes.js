import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserSchema from '../models/User.js';

const router = express.Router();

// User Registration 
router.post('/register',async ( req,res)=>{
    const {name,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new UserSchema({
        name,
        email,
        password:hashedPassword
        
    });
    try {
        await user.save();
        res.status(201).json({
            message:"User Registerd successfully..!"
        })
    } catch (error) {
         res.status(400).json({
            message:"Registration Failed...!"
         })
    }
})

// User Login 
router.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    const user = await UserSchema.findOne({email});

    if(!user || !(await bcrypt.compare(password,user.password)))
         return res.status(400).json({message:
        "Invalid Email and Password..!"
    })

    const token = jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        password:user.password
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
     res.send(token);
})
export default router;
