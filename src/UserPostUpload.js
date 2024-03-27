import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUploadApiFunction } from "./Pages/ReactTooklitFolder/PostUploadSlice";

function UserPostUpload() {
  const [formData, setFormData] = useState({
    location: "",
    caption: "",
    images: [],
  });

  const dispatch = useDispatch();
  

  const [previewImages, setPreviewImages] = useState([]);

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

    // Create image URLs for preview
    const imageFiles = Array.from(event.target.files);
    const imagePreviews = imageFiles.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewImages(imagePreviews);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(postUploadApiFunction(formData));
    // Here, you would send formData to your backend
    // Cleanup preview URLs to avoid memory leaks
    previewImages.forEach(URL.revokeObjectURL);
  };

  return (
    <div className="App">
      <h2>Upload Form</h2>
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
          <div className="image-previews">
            {previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Preview"
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserPostUpload;
