import mongoose from "mongoose";

const questionModel = new mongooseSchema({
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
});

export default mongoose.model("Questions", questionModel);