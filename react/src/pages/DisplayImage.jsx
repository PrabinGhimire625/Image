import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DisplayImage = () => {
  const [error, setError] = useState(null);
  const {flag,setFlag,images,setImages,fetchImages}=useContext(AuthContext) 
  
  const deleteImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/image/${id}`);
      if (response.status === 200) {
        alert("Successfully deleted the image");
        setFlag(flag+1)
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error deleting the image:", error);
    }
  };
  

  useEffect(() => {
    fetchImages();
  }, [flag]);


  return (
    <div className="flex flex-wrap justify-center mt-5">
      {images.length > 0 ? (images.map((image) =>(
          <div className="w-48 h-64 border border-gray-300 flex flex-col justify-between items-center m-2 p-2 key={image.id} ">
            <img src={image.imageUrl} className="w-full h-40 object-contain mb-2" alt="image"/>
            <div className="flex justify-between w-full mt-2">
              <Link to={`/updateImage/${image._id}`}><button  className="bg-blue-800 text-white py-1 px-3 rounded hover:bg-blue-900 transition-colors" > Edit</button> </Link>
              <button onClick={() => deleteImage(image._id)} className="bg-red-800 text-white py-1 px-3 rounded hover:bg-red-900 transition-colors">Delete </button>
            </div>
          </div>
        ))
      ) : (
        <p>{error || 'Loading images...'}</p>
      )}
    </div>
  );
};

export default DisplayImage;
