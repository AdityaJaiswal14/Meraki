import { useEffect } from 'react';
import { postServerData } from '../helper/helper';
import * as Action from '../redux/result_reducer';

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async(dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

// export const usePublishResult = (resultData) => {
//   const { result } = resultData;
//   useEffect(() => {
//     const publishResult = async () => {
//       try {
//         if (result.length === 0) throw new Error("Could not get result");
//         const response = await postServerData(`${import.meta.env.VITE_REACT_APP_HOSTNAME}/api/result`, resultData);
//         console.log('Publish Result Response:', response);
//       } catch (error) {
//         console.log('Error publishing result:', error);
//       }
//     };
//     publishResult();
//   }, [result, resultData]);
// };

export const usePublishResult = async (resultData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/api/result', resultData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error publishing result:', error);
    }
};
