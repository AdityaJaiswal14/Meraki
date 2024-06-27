import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quizId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  questions: [
    {
      id: Number,
      question: String,
      options: [String]
    }
  ],
  answers: [Number]
});

export default mongoose.model('Question', questionSchema);