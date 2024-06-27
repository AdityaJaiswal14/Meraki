import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import Timer from './Timer';
import { useDispatch } from 'react-redux';
import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';

export default function Questions({quizId, onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const {trace} = useSelector(state => state.questions)
  const result = useSelector(state => state.result.result)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion(quizId);
  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({trace, checked}))
  }, [checked]);

  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({trace, checked}))
  }

  function onTimeUp() {
    dispatch(MoveNextQuestion());
  }

  if (isLoading) return <h3 className='text-light'>Loading...</h3>;
  if (serverError) return <h3 className='text-light'>{serverError.message}</h3>;

  return (
    <div className='questions'>
      <div className='flex justify-between items-center'>
        <h2 className='text-light'>{questions?.question}</h2>
        <Timer onTimeUp={onTimeUp} resetKey={questions?.id} />
      </div>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
            <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}