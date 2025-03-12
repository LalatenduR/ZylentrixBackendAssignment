import express from "express";
import cors from "cors";
import Userrouter from "./routes/user.routes.js";
import errorhandler from "./middleware/errorhandler.js";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN || "*",
}));
app.use(express.json());

app.use("/api/v1/user",Userrouter);
app.use(errorhandler);

export {app}