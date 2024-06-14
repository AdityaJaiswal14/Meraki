import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question_reducer";

const rootReducer = combineReducers({
    questions: questionReducer
})

export default configureStore({reducer: rootReducer})