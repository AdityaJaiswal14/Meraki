import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleForm =(e)=> {
    const {name , value }=e.target;
    setFormData({
      ...formData , [name]:value
    })
  }

  const[errors, setErrors] = useState({}) 

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const validationErrors = {}

    if(!formData.email.trim()) {
        validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "Email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "Password is required"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Sign Up Successfull")
        
        console.log(formData)
    
        
    }
  }

  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg)" }}
          >
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-5xl mb-4 font-bold  ">Login</h2>
            <form action="#" className='mt-9'>
              <div className="mt-5">
                <input 
                  type="text" 
                  placeholder="Enter Your Email" 
                  name="email"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-3 w-full rounded-full" 
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="mt-5">
                <input 
                  type="password" 
                  placeholder="Enter Your Password" 
                  name="password"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-3 w-full rounded-full" 
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="mt-5">
                <button 
                  type="submit"
                  onClick={handleSubmit} 
                  className=" w-full bg-purple-500 py-3 text-center text-white rounded-full font-bold hover:bg-black hover:text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login