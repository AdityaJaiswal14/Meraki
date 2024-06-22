import { Router } from "express";
import userRoutes from "./userRoutes.js";
import router from "./route.js";

const appRouter=Router()

appRouter.use("/user", userRoutes) 
appRouter.use("/", router)

export default appRouter