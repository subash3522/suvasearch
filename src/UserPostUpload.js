import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDesticationPost } from "./Pages/ReactTooklitFolder/ApiSlice";
import { fetchUserPostFunction } from "./Pages/ReactTooklitFolder/UserPostFetchSlice";

function UserPostUpload() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserPostFunction());
    dispatch(fetchDesticationPost()); // Fetch location suggestions
  }, [dispatch]);

  const userPostData = useSelector((state) => state.fetchUserPost.data);
  const locationSuggestions = useSelector((state) => state.explore.data);

  const [formData, setFormData] = useState({
    userId: 1,
    location: "",
    caption: "",
    images: [],
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("userId", formData.userId);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("caption", formData.caption);

    if (formData.images.length === 0) {
      alert("Please select at least one photo");
      return;
    }

    formData.images.forEach((file) => {
      formDataToSend.append("images", file);
    });

    if (formData.location.trim() === "" || formData.caption.trim() === "") {
      alert("Location and caption cannot be empty");
      return;
    }

    try {
      // Dispatch post upload action
      // Handle navigation after successful upload
      console.log("Upload successful");
      navigate("/userposts");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="App">
      <h2>Upload Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Location:
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="">Select a location</option>
            {locationSuggestions.map((value) => (
              <option key={value.ID} value={value.mountainName}>
                {value.mountainName}
              </option>
            ))}
          </select>
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserPostUpload;
