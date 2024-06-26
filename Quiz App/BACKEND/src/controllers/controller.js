import Questions from "../models/questionModel.js";
import Results from "../models/resultModel.js";
import quizzes from '../db/data.js'

/** get all questions */
// export async function getQuestions(req, res){
//     try {
//         const q = await Questions.find();
//         res.json(q)
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//         res.json({ error })
//     }
// }


/** insert all questinos */
// export async function insertQuestions(req, res) {
//     try {
//             await Questions.insertMany({questions, answers}); 
//             res.json({ msg: "Data Saved Successfully...!" });
//     } catch (error) {
//             console.error("Error inserting questions:", error); // Log the error
//             res.json({ error: error.message }); // Include detailed error message
//     }
//   }


/** Delete all Questions */
// export async function dropQuestions(req, res){
//    try {
//         await Questions.deleteMany();
//         res.json({ msg: "Questions Deleted Successfully...!"});
//    } catch (error) {
//         console.error("Error deleting questions:", error);
//         res.json({ error })
//    }
// }

export async function getQuizzes(req, res) {
  try {
      res.json(quizzes);
  } catch (error) {
      console.error("Error fetching quizzes:", error);
      res.status(500).json({ error: "Error fetching quizzes" });
  }
}

/** get all questions for a specific quiz */
// export async function getQuestions(req, res){
//   try {
//       const { quizId } = req.params;
//       const questions = await Questions.find({ quizId });
//       res.json(questions);
//   } catch (error) {
//       console.error("Error fetching questions:", error);
//       res.status(500).json({ error: "Error fetching questions" });
//   }
// }

/** insert questions for a specific quiz */
// export async function insertQuestions(req, res){
//   try {
//       const { quizId, questions, answers } = req.body;
//       const newQuestions = new Questions({ quizId, questions, answers });
//       await newQuestions.save();
//       res.json({ msg: "Data Saved Successfully...!" });
//   } catch (error) {
//       res.json({ error });
//   }
// }

// export async function insertQuestions(req, res) {
//   try {
//     const { quizId, questions, answers } = req.body;

//     if (!quizId) {
//       return res.status(400).json({ error: 'Quiz ID is required' });
//     }

//     const newQuestions = new Questions({ quizId, questions, answers });
//     await newQuestions.save();

//     res.status(200).json({ msg: 'Data Saved Successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }


/** get questions for a specific quiz */
export async function getQuestions(req, res) {
  try {
    const questions = await Questions.find(); // Adjust this to fit your schema and query logic
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** insert questions for a specific quiz */
export async function insertQuestions(req, res) {
  try {
      const quizId = req.params.quizId;
      if (!quizId) {
          return res.status(400).json({ error: 'Quiz ID is required' });
      }

      // Log the request body for debugging
      console.log('Request Body:', req.body);

      const { questions, answers } = req.body;

      if (!questions || !Array.isArray(questions) || questions.length === 0) {
          return res.status(400).json({ error: 'Questions are required and should be an array' });
      }

      const questionsWithQuizId = questions.map(question => ({
          ...question,
          quizId
      }));

      await Questions.insertMany(questionsWithQuizId);

      res.status(201).json({ msg: 'Data Saved Successfully...!' });
  } catch (error) {
      console.error('Error inserting questions:', error);
      res.status(500).json({ error: error.message || 'An error occurred while inserting questions' });
  }
}

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
        Results.create({ email, result, attempts, points, achieved }, function(err, data) {
          res.json({ msg: "Result Saved Successfully"})
        })
    
      } catch (error) {
        console.error("Error storing result:", error);
        res.json({error})
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