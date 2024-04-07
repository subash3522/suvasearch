// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { postUploadApiFunction } from "./Pages/ReactTooklitFolder/PostUploadSlice";

// function UserPostUpload() {
//   const [formData, setFormData] = useState({
//     location: "",
//     caption: "",
//     images: [],
//   });

//   const dispatch = useDispatch();

//   const [previewImages, setPreviewImages] = useState([]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setFormData({
//       ...formData,
//       images: files,
//     });

//     // Create image URLs for preview
//     const imageFiles = Array.from(event.target.files);
//     const imagePreviews = imageFiles.map((file) => {
//       return URL.createObjectURL(file);
//     });
//     setPreviewImages(imagePreviews);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     dispatch(postUploadApiFunction(formData));
//     // Here, you would send formData to your backend
//     // Cleanup preview URLs to avoid memory leaks
//     previewImages.forEach(URL.revokeObjectURL);
//   };

//   return (
//     <div className="App">
//       <h2>Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="caption">Caption:</label>
//           <input
//             type="text"
//             id="caption"
//             name="caption"
//             value={formData.caption}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="images">Image(s):</label>
//           <input
//             type="file"
//             id="images"
//             name="images"
//             onChange={handleFileChange}
//             multiple
//           />
//           <div className="image-previews">
//             {previewImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt="Preview"
//                 style={{ width: "100px", height: "100px" }}
//               />
//             ))}
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserPostUpload;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { postUploadApiFunction } from "./Pages/ReactTooklitFolder/PostUploadSlice";

// function UserPostUpload() {
//   const [formData, setFormData] = useState({
//     userId: 1,
//     location: "",
//     caption: "",
//     images: [],
//   });

//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setFormData({
//       ...formData,
//       images: files,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append("userId", formData.userId);
//     formDataToSend.append("location", formData.location);
//     formDataToSend.append("caption", formData.caption);
//     formData.images.forEach((file) => {
//       formDataToSend.append("images", file);
//     });

//     try {
//       await dispatch(postUploadApiFunction(formDataToSend));
//       console.log("Upload successful");
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h2>Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="caption">Caption:</label>
//           <input
//             type="text"
//             id="caption"
//             name="caption"
//             value={formData.caption}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="images">Image(s):</label>
//           <input
//             type="file"
//             id="images"
//             name="images"
//             onChange={handleFileChange}
//             multiple
//           />
//         </div>
//         <button className="btn btn-success">Edit</button>
//         <button className="btn btn-danger">Delete</button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserPostUpload;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postUploadApiFunction,
  editPostApiFunction,
  deletePostApiFunction,
} from "./Pages/ReactTooklitFolder/PostUploadSlice";

import { fetchUserPostFunction } from "./Pages/ReactTooklitFolder/UserPostFetchSlice";
// import { isEditable } from "@testing-library/user-event/dist/utils";

function UserPostUpload() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPostFunction());
  }, []);

  const userPostData = useSelector((state) => state.fetchUserPost.data);

  const [formData, setFormData] = useState({
    userId: 1,
    location: " ",
    caption: " ",
    images: [],
  });
  console.log(formData);

  // Set initial state with existing post values when component mounts
  // useEffect(() => {
  //   if (userPostData && (userPostData.length > 0)) {
  //     setFormData({
  //       // userId: userPostData.userId,
  //       userId: 1,
  //       location: userPostData[0].destination,
  //       caption: userPostData[0].caption,
  //       images: [], // Assuming image paths are not needed for editing
  //     });
  //   }
  // }, [userPostData]);

    const fillFieldOnEdit = ()=>{
      if (userPostData && (userPostData.length > 0)) {
            setFormData({
              // userId: userPostData.userId,
              userId: 1,
              location: userPostData[0].destination,
              caption: userPostData[0].caption,
              images: [], // Assuming image paths are not needed for editing
            });
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    if (isEditing) {
      return;
    }
    const files = Array.from(event.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (event,postIdToEdit) => {
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
      if (isEditing) {
        // If editing, dispatch an edit action
        await dispatch(editPostApiFunction(formDataToSend, postIdToEdit));
      } else {
        // If not editing, dispatch a new post upload action
        await dispatch(postUploadApiFunction(formDataToSend));
      }
      console.log("Upload successful");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  

  const editTogglerFunction = () => {
    setIsEditing(!isEditing);
  };

  const editCancleFunction = ()=>{
    setIsEditing(false);
    setFormData({
      // userId: userPostData.userId,
      userId: 1,
      location: "",
      caption: "",
      images: [], 
    });

  }

  console.log(isEditing);

  return (
    <div className="App">
      <h2>{isEditing ? "Edit Post" : "Upload Form"}</h2>
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
          {isEditing ? "Update" : "Submit"}{" "}
          {/* Change button label based on edit mode */}
        </button>
       
      </form>
      <button
        onClick={() => {
          editTogglerFunction(); fillFieldOnEdit()
        }}
      >
        Edits
      </button>
      {isEditing && (
          <button className="btn btn-danger" onClick={()=>editCancleFunction()} >
            Cancel
          </button>
        )}
    </div>
  );
}

export default UserPostUpload;
