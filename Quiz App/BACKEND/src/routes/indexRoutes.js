import { Router } from "express";
import userRoutes from "./userRoutes.js";
import questionsRoutes from "./questionRoutes.js";
import resultRoutes from "./resultRoutes.js"

const appRouter=Router()

appRouter.use("/user", userRoutes) 
appRouter.use("/questions", questionsRoutes)
appRouter.use("/results", resultRoutes)

export default appRouter