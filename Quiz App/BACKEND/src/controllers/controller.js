import Questions from "../models/questionModel.js";
import Results from "../models/resultModel.js";
import quizzes from '../db/data.js'

export async function getQuizzes(req, res) {
  try {
      res.json(quizzes);
  } catch (error) {
      console.error("Error fetching quizzes:", error);
      res.status(500).json({ error: "Error fetching quizzes" });
  }
}

/** get questions for a specific quiz */
export async function getQuestions (req, res) {
  const quizId = Number(req.params.id);
  if (isNaN(quizId)) {
    return res.status(400).json({ error: 'Invalid quizId' });
  }
  try {
    const quizData = await Questions.findOne({ quizId: quizId });
    if (quizData) {
      res.status(200).json(quizData);
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/** insert questions for a specific quiz */
export async function insertQuestions (req, res) {
  try {
    const { quizId, title, questions, answers } = req.body;

    if (!Array.isArray(questions) || !Array.isArray(answers)) {
      return res.status(400).json({ error: "Questions and answers are required and should be arrays" });
    }

    if (typeof quizId !== 'number' || typeof title !== 'string') {
      return res.status(400).json({ error: "Quiz ID should be a number and title should be a string" });
    }

    const newQuiz = new Questions({
      quizId,
      title,
      questions,
      answers
    });

    await newQuiz.save();

    res.status(201).json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};


/** delete all questions for a specific quiz */
export async function dropQuestions(req, res){
  try {
       const { quizId } = req.params;
       await Questions.deleteMany({ quizId });
       res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
       res.json({ error });
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

//get result for user history
export async function myresult (req, res){
  try {
    const {email} = req.user;
    //let email="aditya.jaiswal10@gmail.com"
    const check = await Results.find({ email: email });
    if(check){
      res.status(200).json({check});  
    }
        
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}

/** post all result */
export async function storeResult(req, res){
 try {

      const {email} = req.user
      console.log(email)
      const { result, attempts, points, achieved } = req.body;
      console.log("Request body:", req.body);
      if(!result) {
          throw new Error('Data Not Provided...!');
      }
      const newResult = await Results.create({ email, result, attempts, points, achieved });
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