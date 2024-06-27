import { Router } from "express";
import jwtAuth from "../middleware/jwtAuth.js";
import * as controller from '../controllers/controller.js';

const router = Router();

router.route('/quizzes')
    .get(controller.getQuizzes);

router.route('/questions')
    .post(controller.insertQuestions); /** POST Request */

router.route('/questions/:id')
    .get(controller.getQuestions) /** GET Request */
    .delete(controller.dropQuestions) /** DELETE Request */


router.route('/result')
        // .get(controller.getResult)
        .get(jwtAuth, controller.myresult)
        .post(jwtAuth, controller.storeResult)
        .delete(controller.dropResult)

export default router;