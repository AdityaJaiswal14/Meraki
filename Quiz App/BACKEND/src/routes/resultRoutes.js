import { Router } from "express";
import {getResult, storeResult, dropResult} from "..//controllers/resultController.js";

const resultRoutes=Router()

resultRoutes.get("/result", getResult)
resultRoutes.post("/result", storeResult)
resultRoutes.delete("/result", dropResult)

export default resultRoutes;