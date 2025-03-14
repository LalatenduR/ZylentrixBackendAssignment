import {User} from "../models/user.model.js";
import {apiError} from "../utils/apiError.js";
import mongoose from "mongoose";
import {apiResponse} from "../utils/apiResponse.js";

// 1.Creating a new User
const createUser=async(req,res,next)=>{
    const {name,email,age}=req.body;

    try {
        const existingUser=await User.findOne(
            {email:email}
        )
        if(existingUser){
            throw new apiError(400,"User already exists");
        }
        const user = await User.create(req.body);
        return res.status(201).json(new apiResponse(201,"User Created!!",user));
    } catch (err) {
        next(err);
    }
};

// 2.Retrieving all Users
const getAllUsers=async(req,res,next)=>{
    try{
        const users=await User.find();
        return res.status(200).json(new apiResponse(200,"All Users",users));
    }
    catch(err){
        return next(new apiError(500,err.message));
    }
};

// 3.Retrieving a single User
const getOneUser=async(req,res,next)=>{
    const {id}=req.params;
    try{
        // Check if the id is a valid ObjectId
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new apiError(400,"Invalid User ID"); 
        }
        const user=await User.findById(id);
        if(!user){
            throw new apiError(404,"User not found");
        }
        return res.status(200).json(new apiResponse(200,"User",user));
    }
    catch(err){
        next(err);
    }
};

// 4.Updating a User
const updateUser=async(req,res,next)=>{
    const {id}=req.params;
    const updates=req.body;

    try{
        // Check if the id is a valid ObjectId
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new apiError(400,"Invalid User ID"); 
        }

        if(updates.email){
            const existingUser=await User.findOne(
                {email:updates.email}
            )
            if(existingUser){
                throw new apiError(400,"Update email already exists");
            }
        }
        if(Object.keys(req.body).length===0){
            throw new apiError(400,"Atleast one field is required to update");
        }

        const user=await User.findByIdAndUpdate
        (
            id,
            {
                $set:updates
            },
            {
                new:true,
                runValidators:true
            }
        );
        if(!user){
            throw new apiError(404,"User not found");
        }
        return res.status(200).json(new apiResponse(200,"User Updated",user));
    }
    catch(err){
        next(err);
    }
}

// 5.Deleting a User
const deleteUser=async(req,res,next)=>{
    const {id}=req.params;
    try{
        // Check if the id is a valid ObjectId
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new apiError(400,"Invalid User ID"); 
        }
        const user=await User.findByIdAndDelete(id);
        if(!user){
            throw new apiError(404,"User not found");
        }
        return res.status(200).json(new apiResponse(200,"User Deleted",user));
    }
    catch(err){
        next(err);
    }
}

export{createUser,getAllUsers,getOneUser,updateUser,deleteUser};