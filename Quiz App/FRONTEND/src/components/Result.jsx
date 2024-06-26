import '../styles/result.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attemptsNumber, earnPointNumber, flagResult } from '../helper/helper';
import { useEffect } from 'react';
import axios from 'axios';

export default function Result() {
  const dispatch = useDispatch();
  const { queue = [], answers = [] } = useSelector(state => state.questions);
  const { result = [] } = useSelector(state => state.result);

  useEffect(() => {
    const publishResult = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const totalPoints = queue.length * 10;
        const attempts = attemptsNumber(result);
        const earnPoints = earnPointNumber(result, answers, 10);
        const flag = flagResult(totalPoints, earnPoints);

        const resultData = {
          result,
          attempts,
          points: earnPoints,
          achieved: flag ? "Passed" : "Failed",
        };

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

    if (queue.length && answers.length && result.length) {
      publishResult();
    }
  }, [queue, answers, result]);

  if (!queue.length || !answers.length || !result.length) {
    return <div>Loading...</div>;
  }

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='container'>
      <div className='result flex-center'>
        <div className='flex'>
          <span>Total Quiz Points: </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Questions: </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span>Questions Attempted: </span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Points Earned: </span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Quiz Result: </span>
          <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>
      <div className='start'>
        <Link className='btn' to={'/quiz'} onClick={onRestart}>Restart</Link>
      </div>
    </div>
  );
}