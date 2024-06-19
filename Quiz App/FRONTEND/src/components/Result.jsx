import React, { useEffect } from 'react'
import '../styles/result.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { attemptsNumber, earnPointNumber, flagResult } from '../helper/helper'

export default function Result() {

  const dispatch = useDispatch()
  const {questions: {queue, answers}, result: {result, userId}} = useSelector(state => state)
  useEffect(() => {
    console.log(earnPoints)
  })

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints)

  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
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
            <span>Quiz Result</span>
            <span style={{color: `${flag ? "#2aff95" : "#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>
      <div className='start'>
        <Link className='btn' to={'/quiz'} onClick={onRestart}>Restart</Link>        
      </div>
    </div>
  )
}
