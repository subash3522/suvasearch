import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {

  const [userId, setUserId] = useState('');

    useEffect(() => {
      // Retrieve the data from local storage
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        // Parse the JSON string to an object
        const parsedData = JSON.parse(storedData);
        // Set the user ID if it exists in the parsed object
        if (parsedData && parsedData.userId) {
          setUserId(parsedData.userId);
        }
      }
    }, []);

    const { likeId } = useParams();
    const [likeedPost, setLiketPost] = useState([])

    
  
  

    useEffect(() => {
        const fetchLikedPost = async(a) => {
          try {
            const response = await axios.get(
              `http://localhost:5001/like/${a}`
            );
            setLiketPost(response.data);
            console.log(response.data);
           
          } catch (error) {
            console.error("Error fetching mountains:", error);
          }
        };
    
        fetchLikedPost(likeId);
      }, []);

     
  return (
    <div>{}1</div>
  )
}

export default UserProfile