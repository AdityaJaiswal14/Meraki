import express from "express"
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors"
import { connectToDatabase } from "./src/db/connection.js"
import appRouter from "./src/routes/indexRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app=express()
const PORT=process.env.PORT || 5000

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json("Get Request")
  } catch (error) {
      res.json(error)
  }
});

app.use("/api", appRouter)

connectToDatabase()
.then(()=>{
  app.listen(PORT,() =>{
  console.log("Server Started")
  console.log("MongoDB Connected")
})})
.catch((err)=>{
  console.log(err)
})