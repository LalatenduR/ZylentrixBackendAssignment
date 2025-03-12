import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectDb from "./db/index.js";

connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed",err);
})