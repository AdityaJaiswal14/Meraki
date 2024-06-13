import React from 'react'
import { useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
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
    if(!formData.firstname.trim()) {
        validationErrors.firstname = "Firstname is required"
    }
    if(!formData.lastname.trim()) {
      validationErrors.lastname = "Lastname is required"
  }

    if(!formData.email.trim()) {
        validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "Email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "Password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "Password should be at least 6 char"
    }

    if(formData.confirmpassword !== formData.password) {
        validationErrors.confirmpassword = "Password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Sign Up Successfull")
        
        console.log(formData)
    
        
    }
  }
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://i.pinimg.com/originals/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg)"}}>
      <div className="container mx-auto h-screen flex items-center">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden ">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            //style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg)" }}
            // style={{ backgroundImage: "url(https://us.123rf.com/450wm/osherro/osherro2204/osherro220400014/186327102-quiz-text-and-question-mark-icon-black-sign-vector-illustration-isolated-on-transparent-background.jpg?ver=6)" }}
          >
            <img src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg"
              className='size-full' 
              alt="QUIZ" />
            {/* <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac{' '}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-5xl mb-4 font-bold  ">Register</h2>
            {/* <p className="mb-4 font-semibold">Create Your Account</p> */}
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                {/* <label className='px-2'>First Name</label> */}
                <input 
                  type="text"
                  placeholder="Enter Your First Name" 
                  name="firstname"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-4 w-full rounded-full"
                 />
                {errors.firstname && <span>{errors.firstname}</span>}
                <input 
                  type="text" 
                  placeholder="Enter Your Last Name" 
                  name="lastname"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-4 w-full rounded-full" 
                />
                {errors.lastname && <span>{errors.lastname}</span>}
              </div> 
              <div className="mt-5">
                {/* <label className='px-2'>Email</label> */}
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
                {/* <label className='px-2'>Password</label> */}
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
                {/* <label className='px-2'>Confirm Password</label> */}
                <input 
                  type="password" 
                  placeholder="Confirm Your Password" 
                  name="confirmpassword"
                  onChange={handleForm}
                  className=" border border-gray-400 py-1 px-4 w-full rounded-full" 
                />
                {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span className='px-2'>
                    I accept the{' '}
                  <a href="#" className="text-black font-semibold">
                    Terms of Use
                  </a>{' '}
                  &{' '}
                  <a href="#" className="text-black font-semibold ">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button 
                  type="submit"
                  onClick={handleSubmit} 
                  className=" w-full bg-amber-400 py-3 text-center text-white  rounded-full font-semibold hover:bg-black hover:text-white duration-500">
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

export default Signup