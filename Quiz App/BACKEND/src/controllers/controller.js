import Questions from "../models/questionModel.js";
import Results from "../models/resultModel.js";
import questions, { answers } from '../db/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.json({ error })
    }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
    try {
            await Questions.insertMany({questions, answers}); 
            res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
            console.error("Error inserting questions:", error); // Log the error
            res.json({ error: error.message }); // Include detailed error message
    }
  }

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        console.error("Error deleting questions:", error);
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        console.error("Error fetching results:", error);
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res){
   try {
        const { result, attempts, points, achieved } = req.body;
        console.log("Request body:", req.body);
        if(!result) {
            throw new Error('Data Not Provided...!');
        }

        const newResult = await Results.create({ result, attempts, points, achieved });
        res.json({ msg: "Result Saved Successfully...!", data: newResult });
    
      } catch (error) {
        console.error("Error storing result:", error);
        res.status(500).json({ error: error.message });
      }
    }

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        console.error("Error deleting results:", error);
        res.json({ error })
    }
}