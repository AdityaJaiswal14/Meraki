import Questions from "../models/questionModel";
import questions, {answers} from '../db/data'

export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

export async function insertQuestions(req, res){
    try {
        Questions.insertMany({questions, answers}, function(err, data){
            res.json({msg: "Data saved successfully"})
        })
    } catch (error) {
        res.json({error})
    }
}

export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();
        res.json({msg: "Questions deleted successfully"});
    } catch (error) {
        res.json({error})
    }
}