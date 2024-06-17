import React, { useEffect } from 'react'
import Questions from './Questions'
import {useSelector, useDispatch} from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'

export default function Quiz() {

    // const trace = useSelector(state => state.questions.trace)
    const {queue, trace} = useSelector(state => state.questions)
    const dispatch = useDispatch()
    useEffect(() => {
      console.log(queue)
    }, [queue])

    //Next button event handler
    function onNext(){
        console.log('On next click')
        if(trace < queue.length) {
          dispatch(MoveNextQuestion()); 
        }
    }

    //Previous button event handler
    function onPrevious(){
        console.log('On previous click')
        if(trace > 0){
          dispatch(MovePrevQuestion());
        }
    }

  return (
    <div className='container'>
        <h1 className='text-light'></h1>

        <Questions />
      
     <div className='grid'>
        <button className='btn prev' onClick={onPrevious}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
        </div> 
    </div>
  )
}