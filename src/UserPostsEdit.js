import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostApiFunction } from "./Pages/ReactTooklitFolder/PostUploadSlice";
import { useParams } from "react-router-dom";

import { fetchUserPostByIdFunction } from "./Pages/ReactTooklitFolder/UserPostFetchEdit";

function UserPostsEdit() {
  const params = useParams();
  const { post_id } = params;
  const dispatch = useDispatch();

  console.log(post_id);

  useEffect(() => {
    dispatch(fetchUserPostByIdFunction(post_id));
  }, [post_id]);

  const userPostData = useSelector((state) => state.editUserPost.data);

  const [formData, setFormData] = useState({
    userId: post_id,
    location: " ",
    caption: " ",
    images: [],
  });
  console.log(userPostData);

  useEffect(() => {
    if (userPostData.length > 0) {
      setFormData({
        // userId: userPostData.userId,
        userId: post_id,
        location: userPostData[0].destination,
        caption: userPostData[0].caption,
        images: [], // Assuming image paths are not needed for editing
      });
    }
  }, [userPostData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (event, postIdToEdit) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("userId", formData.userId);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("caption", formData.caption);
    formData.images.forEach((file) => {
      formDataToSend.append("images", file);
    });

    // Check if location and caption are not empty
    if (formData.location.trim() === "" || formData.caption.trim() === "") {
      alert("Location and caption cannot be empty");
      return;
    }

    try {
      // If editing, dispatch an edit action
      await dispatch(editPostApiFunction(formDataToSend));
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const editCancleFunction = () => {};

  return (
    <>
      <div className="App">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="caption">Caption:</label>
            <input
              type="text"
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="images">Image(s):</label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleFileChange}
              multiple
            />
          </div>

          <button className="btn btn-success" type="submit">
            submit
          </button>
        </form>

        <button className="btn btn-danger" onClick={() => editCancleFunction()}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default UserPostsEdit;
