import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import Timer from './Timer';
import { useDispatch } from 'react-redux';
import { MoveNextQuestion } from '../hooks/FetchQuestion';

export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  function onSelect() {
    // console.log('radio button change')
  }

  function onUpdateTime(currentTime) {
    console.log('Current Time: ', currentTime);
  }

  function onTimeUp() {
    console.log('Time is up! Moving to next question.');
    dispatch(MoveNextQuestion());
  }

  if (isLoading) return <h3 className='text-light'>Loading...</h3>;
  if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>;

  return (
    <div className='questions'>
      <div className='flex justify-between items-center'>
        <h2 className='text-light'>{questions?.question}</h2>
        <Timer onUpdateTime={onUpdateTime} onTimeUp={onTimeUp} resetKey={questions?.id} />
      </div>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}