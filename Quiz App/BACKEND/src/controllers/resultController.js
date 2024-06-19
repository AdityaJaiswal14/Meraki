import Results from "../models/resultModel.js";

export async function getResult(req, res){
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

export async function storeResult(req, res){
    try {
        const {result, attempts, points, achieved} = req.body;
        Results.create({result, attempts, points, achieved}, function(err, data){
            res.json({msg: "Result saved successfully"})
        })
    } catch (error) {
        res.json({error})
    }
}

export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({msg: "Result deleted successfully"})
    } catch (error) {
        res.json({error})
    }
}