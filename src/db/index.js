import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDb=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to database ${connectionInstance.connection.name}`);
    }
    catch(err){
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;
