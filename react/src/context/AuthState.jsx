import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { AuthContext } from './AuthContext.jsx';

export const AuthState = (props) => {
  const [images, setImages] = useState([]);
  const [flag, setFlag] = useState(0);
  const [error, setError] = useState(null); // Declare error state

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/image');
      if (response.status === 200) {
        setImages(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching the images:', err);
      setError('Error fetching the images'); // Set error message
    }
  };

  useEffect(() => {
    fetchImages();
  }, [flag]);

  return (
    <AuthContext.Provider value={{ flag, setFlag, fetchImages, images, setImages, error }}>
      {props.children}
    </AuthContext.Provider>
  );
};
