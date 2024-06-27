// import { useEffect, useState } from "react"
// import data, {answers} from "../database/data"
// import { useDispatch } from "react-redux"
// import * as Action from '../redux/question_reducer'
// import { getServerData } from "../helper/helper"

// export const useFetchQuestion = () => {
//     const dispatch = useDispatch();
//     const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

//     useEffect(() => {
//         setGetData(prev => ({...prev, isLoading: true}));
        
//         (async () => {
//             try {
//                 const [{questions, answers}] = await getServerData(`${import.meta.env.VITE_REACT_APP_HOSTNAME}/api/questions`, (data) => data)
//                 console.log({questions, answers});
//                 if(questions.length > 0) {
//                     setGetData(prev => ({...prev, isLoading: false}));
//                     setGetData(prev => ({...prev, apiData: questions}));
//                     dispatch(Action.startExamAction({question: questions, answers}))
//                 } else {
//                     throw new Error("No Question Available");
//                 }
//             } catch (error) {
//                 setGetData(prev => ({...prev, isLoading: false}));
//                 setGetData(prev => ({...prev, serverError: error}));
//             }
//         })();
//     }, [dispatch]);
//     return [getData, setGetData];
// }

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = (quizId) => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                const data = await getServerData(`${import.meta.env.VITE_REACT_APP_HOSTNAME}/api/questions/${quizId}`, (data) => data);
                if (data.questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false, apiData: data.questions }));
                    dispatch(Action.startExamAction({ question: data.questions, answers: data.answers }));
                } else {
                    throw new Error("No Questions Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false, serverError: error.message }));
            }
        })();
    }, [dispatch, quizId]);

    return [getData, setGetData];
}

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}