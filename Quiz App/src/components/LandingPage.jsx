import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  let navigate=useNavigate()
  function Register() {
    navigate('/register')
  }
  function Login() {
    navigate('/login')
  }
  

  return (
    <>
    <div className='h-screen flex flex-col justify-center items-center md:flex-row'>
      <div>
        <img src='https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg' alt='Photo'></img>
      </div>
      <div className='flex flex-col '>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className="text-7xl mb-4 font-bold ">QUIZMASTER</h1>
          </div>
          <div className='w-2/3 text-center'>
            <p className="text-2xl mb-4 font-semibold text-wrap whitespace-pre-wrap ">CHALLENGE YOURSELF WITH QUIZES ON ANY SUBJECT!</p>
      </div>
          <div className="w-[20rem]">
          <button 
              type="submit" 
              className=" w-full bg-black py-3 text-center text-white rounded-full font-bold mt-5 border-2 border-gray-500 hover:border-amber-200 hover:bg-amber-400 hover:text-black"
              onClick={Register}>
              REGISTER NOW
            </button>
            <button 
              type="submit" 
              className=" btn w-full bg-black py-3 text-center text-white rounded-full font-bold mt-5 border-2 border-gray-500 hover:border-amber-200 hover:bg-amber-400 hover:text-black"
              onClick={Login}>
              LOGIN
            </button>
          </div>

        </div>
        <div>
        </div>
      </div>

    </div>
    </>
  )
}

export default LandingPage