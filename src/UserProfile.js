import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./UserProfile.css";
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

  const { saveId } = useParams();
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const fetchLikedPost = async (a) => {
      try {
        const response = await axios.get(`http://localhost:5001/profile/${a}`);
        setSavedPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchLikedPost(saveId);
  }, []);

  return (
    <>
      {/* <div className="product-container">
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
      </div> */}

<div className="profile-container">
      <h2 className="profile-heading">Your Saved Posts</h2>
      <div className="posts-grid">
        {savedPosts.map((value) => (
          <Link to={`/Description/${value.ID}`} key={value.ID} className="post-item">
            <img
              src={`http://localhost:5001/${value.photoPath}`}
              alt={value.mountainName}
            />
            <div className="post-details">
              <h3 className="post-title">{value.mountainName}</h3>
              <p className="post-category">{value.category}</p>
             
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default UserProfile;
