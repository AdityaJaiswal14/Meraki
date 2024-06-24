import mongoose from "mongoose";

const resultModel = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    result: {
        type: Array,
        default: []
    },
    attempts: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    achieved: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Results", resultModel);