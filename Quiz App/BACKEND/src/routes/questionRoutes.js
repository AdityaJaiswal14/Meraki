import { Router } from "express";
import {getQuestions, insertQuestions, dropQuestions} from "..//controllers/questionController.js";

const questionsRoutes=Router()

questionsRoutes.get("/questions", getQuestions)
questionsRoutes.post("/questions", insertQuestions)
questionsRoutes.delete("/questions", dropQuestions)

export default questionsRoutes;