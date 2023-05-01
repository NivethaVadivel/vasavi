import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import bookRoute from "./routes/bookRoute.js"
import queryRoute from "./routes/queryRoute.js"
import hotelRoute from "./routes/hotelRoute.js"

dotenv.config();
const app=express()
mongoose.set('strictQuery',false);
const connect=async()=>{
        try{
            await mongoose.connect(process.env.MONGO_URL);
            console.log("mongodb connected")
        }
        catch(error){
            throw error;
        }
}
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected");
})
app.use(express.json());
app.use(cors());
app.options("*",cors());
app.use("/api/auth",authRoute);
app.use("/api/book",bookRoute);
app.use("/api/contact",queryRoute);
app.use("/api/add",hotelRoute);
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Something went wrong";
    return res.status(errorStatus).json({
        sucess:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})
app.listen(8000,()=>{
    connect()
    console.log("Backend connected")
})