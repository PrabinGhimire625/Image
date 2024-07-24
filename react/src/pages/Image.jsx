import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Image = () => {   
    //to saved the imaged when click to "saved image" button
    const [image,setImage]=useState(null)
    const navigate=useNavigate();
    const{flag,setFlag}=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        try{
            e.preventDefault()
            const response=await axios.post("http://localhost:3000/image",{image},{headers: {'Content-Type': 'multipart/form-data' }})
        if(response.status === 200){
            alert("Image is successfully saved")
            setFlag(flag+1)

            navigate("/")
          }else{
            alert("Something went wrong")
          }
        }catch(err){
            console.log("Image is not created successfully!");
        }
    }
  
    const errorMessageStyle={
        color: "red",
        marginLeft: "50px",
        marginTop: "10px"
    };

    console.log(image)

  return (
    <>
      <div className="flex justify-center items-center mt-7 ">
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <div className="relative z-0 w-full mb-5 group">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} name="imageUrl" id="imageUrl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
            <label htmlFor="imageUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
          </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Save Image </button>
       </form>
      </div>
  </> 
  )
}

export default Image