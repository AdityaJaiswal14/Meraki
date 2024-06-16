import { Router } from "express";
import { userSignup,userLogin } from "../controllers/userController.js";


const userRoutes=Router()

userRoutes.post("/signup", userSignup)
userRoutes.post("/login", userLogin)

export default userRoutes