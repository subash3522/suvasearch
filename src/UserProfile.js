import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Global.css";
import { Link } from "react-router-dom";


function UserProfile() {
  // const { likeId } = useParams();
  // const [likedPost, setLikedPost] = useState([]);

  // useEffect(() => {
  //   const fetchLikedPost = async (a) => {
  //     try {
  //       const response = await axios.get(`http://localhost:5001/like/${a}`);
  //       setLikedPost(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching mountains:", error);
  //     }
  //   };

  //function to fetch saved items

  //   fetchLikedPost(likeId);
  // }, []);

  const { SaveId } = useParams();
  const [savedPost, setSavedPost] = useState([]);

  useEffect(() => {
    const fetchLikedPost = async (a) => {
      try {
        const response = await axios.get(`http://localhost:5001/save/${a}`);
        setSavedPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchLikedPost(SaveId);
  }, []);


  return (
    <>
      <div className="product-container">
        {savedPost.map((value) => (
          <Link
          className="product-container"
          to={ `/Description/${value.ID}` }
        >
          <div className="fruit fade-in" key={value.ID}>
            <h3 className="letter-animation">{value.mountainName}</h3>
            <img
              style={{ height: "200px" }}
              src={`http://localhost:5001/${value.photoPath}`}
              alt={value.mountainName}
              className="letter-animati on"
            />
            <p className="letter-animation">{value.category}</p>
           
            <button className="shop-now-button">Shop Now</button>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default UserProfile;
