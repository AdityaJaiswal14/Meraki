import mongoose from "mongoose";

const questionModel = new mongoose.Schema({
    questions: {
        type: Array,
        default: []
    },
    answers:{
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Questions", questionModel);