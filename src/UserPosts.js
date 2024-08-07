import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPostFunction } from "./Pages/ReactTooklitFolder/UserPostFetchSlice";
import { Link } from "react-router-dom";
import axios from "axios";

function UserPosts() {
  const dispatch = useDispatch();

  const userPost = useSelector((state) => state.fetchUserPost.data);

  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
 

  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      // Parse the JSON string to an object
      const parsedData = JSON.parse(storedData);
      // Set the user ID if it exists in the parsed object
      if (parsedData && parsedData.userId) {
        setUserId(parsedData.userId);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(fetchUserPostFunction());
  }, []);


  return (
    <>
      {userPost.map((value, index) => (
        //     <div className="post-card">
        //     <img src={`http://localhost:5001/${value.image_paths}`} alt="User Photo" className="user-photo" />
        //     <div className="caption">{value.caption}</div>
        //     <div className="interaction">
        //       <button className="like-btn">
        //         Like
        //       </button>
        //       <span className="likes-count">{}</span>
        //     </div>
        //   </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card post-card">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ...
                  </button>
                  Uploaded by:{value.user_email}
                  
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={`/userpostsedit/${value.post_id}`}>Edit</Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  src={`${apiUrl}/${value.image_paths}`}
                  alt="User Photo"
                  className="card-img-top user-photo"
                />
                <div className="card-body">
                  <p className="card-text caption">{value.caption}</p>
                  <div className="interaction">
                    <button className="btn btn-success like-btn">Like</button>
                    <span className="likes-count">{}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserPosts;
