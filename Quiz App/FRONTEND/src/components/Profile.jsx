import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const [data,setData]=useState([]);
  const [trigger,setTrigger]=useState(0)
 const[toggle,setToggle]=useState(false)
  // const initialVisibility = data.map(() => true);
  // const [visibility, setVisibility] = useState(initialVisibility);
  const toggleButton = () => {
    setToggle(prevState => !prevState);
  };
 
  // const toggleVisibility = (index) => {
  //   setVisibility(prevVisibility => 
  //     prevVisibility.map((v, i) => i === index ? !v : v)
  //   );
  // };

  async function fetchAllPosts() {
      const options = {
          method: "GET",
          url: "http://localhost:5000/api/result",
          withCredentials: true, 
          credentials :"include",
      };
  try {
    const res = await axios(options);
    setData(res.data.check)
    console.log(data)
    
  } catch (e) {
    console.log(e.message)
  }
}
useEffect(() => {
  fetchAllPosts()
},[])

  return (
    <>
    <div className='h-screen flex flex-row justify-center items-center md:flex-col'>
    <div className='text-center text-7xl font-bold mb-10 '>Your Profile</div>
    <div className="flex flex-col w-full ">
    <div className="mx-5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 border-2 ">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Result</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Score</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            {data.map((items,key)=>(
            <tbody className="divide-y divide-gray-200 " key={key} >
              <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{items.achieved}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{items.points}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{items.createdAt.split("T")[0]}</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={toggleButton}
                    >VIEW</button>
                </td>
              </tr>

              {toggle && (
              <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center ">{items.result}</td>
              </tr>
              )}
              {/* <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Green</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">London No. 1 Lake Park</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">VIEW</button>
                </td>
              </tr> */}
  
              {/* <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Joe Black</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1 Lake Park</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">VIEW</button>
                </td>
              </tr> */}
  
              {/* <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Edward King</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">16</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">LA No. 1 Lake Park</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">VIEW</button>
                </td>
              </tr> */}
  
              {/* <tr class="hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Red</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Melbourne No. 1 Lake Park</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">VIEW</button>
                </td>
              </tr> */}
            </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Profile