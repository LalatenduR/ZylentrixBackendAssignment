import mongoose,{model,Schema} from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    }},
    {   
        timestamps:true 
});


export const User=mongoose.model("User",UserSchema);