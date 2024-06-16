import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate=useNavigate()
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
      const options = {
        method:"POST",
        url:"http://localhost:5000/api/user/login",
        withCredentials: true,
        credentials: 'include',
        data:{
          email: formData.email,
          password: formData.password
        },
      }
      const res = await axios.request(options)
      const check = res.data.message
      if (check == "OK")
        {
          alert("Succesfully Logged In")
          navigate('/')
        }  
      else
      {
        alert("Login Failed")
      }      
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center" 
     style={{ backgroundImage: "url(https://i.pinimg.com/originals/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg)" }} >
      <div className="container mx-auto h-screen flex items-center">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden p-10">
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
                  className=" border border-gray-400 py-1 px-4 w-full rounded-full" 
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="mt-5">
                <input 
                  type="password" 
                  placeholder="Enter Your Password" 
                  name="password"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-4 w-full rounded-full" 
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="mt-5">
                <button 
                  type="submit"
                  onClick={handleSubmit} 
                  className=" w-full bg-amber-400 py-3 text-center text-white rounded-full font-semibold hover:bg-black hover:text-white duration-500">
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