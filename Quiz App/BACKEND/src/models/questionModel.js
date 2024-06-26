import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quizId: {
      type: Number,
      ref: 'Quiz',
      required: true
    },
    questions: [
      {
        question: { type: String, required: true },
        options: [String]
      }
    ],
    answers: [Number]
  });

export default mongoose.model('Question', questionSchema);