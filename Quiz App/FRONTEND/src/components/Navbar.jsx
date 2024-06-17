import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  let Links =[
    {name:"HOME",link:"/"},
    {name:"CONTACT",link:"/"},
    {name:"QUIZ",link:"/quiz"},
    {name:"LOGIN",link:"/login"},
  ];
  let [open, setOpen] =useState(false);

return (
    <div className='shadow-md w-full fixed top-0 left-0'>
       <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <BookOpenIcon className='w-7 h-7 text-amber-400'/>
            <span className='text-white'>QuizMaster</span>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {
                Links.map((link) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link.link} className='text-white  hover:bg-white hover:rounded-full px-3 py-1 hover:text-black duration-700'>{link.name}</a>
                </li>))
            }
            <Link to='/register' className='btn bg-amber-400 text-black md:ml-8 font-semibold px-3 py-1 rounded-full duration-500 md:static hover:bg-black hover:text-white'>GET STARTED</Link>
        </ul>
        {/* button */}
       </div>
    </div>
);
}
  
export default Navbar