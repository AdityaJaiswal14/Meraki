import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async(dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResult = (resultData) => {
    const {result} = resultData;
    (async () => {
        try {
            if(result.length === 0) throw new Error("Could not get result");
            await postServerData(`${import.meta.env.VITE_REACT_APP_HOSTNAME}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}