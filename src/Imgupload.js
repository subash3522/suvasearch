import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Global.css";
import "./Imgupload.css";
import { useNavigate } from "react-router-dom";

function Imgupload() {

  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  //new formfield
  const [mountainName, setMountainName] = useState("");
  const [weather, setweather] = useState("");
  const [popularity, setPopularity] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState(null);

const navigate=useNavigate()

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

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!auth) {

     navigate('/login')
    }
    else{

    const formData = new FormData();
    formData.append("userId",userId)
    formData.append("mountainName", mountainName);
    formData.append("weather", weather);
    formData.append("popularity", popularity);
    formData.append("budget", budget);
    formData.append("category", category);
    formData.append("photo", photo);
    formData.append("description", description);

    try {
      await axios.post(`${apiUrl}/api/addMountain`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Mountain added successfully");
    } catch (error) {
      console.error("Error adding mountain:", error);
    }
  }
  };
  //newformfield ends here

  //login auth stats here
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get(`${apiUrl}/suvaauth`).then((res) => {
      if (res.data.status === "success") {
        console.log(res.data);
        setAuth(true);
      } else {
        console.log(res.data);
      }
    });
  });
  //login auth ends here

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-wrapper">
        <label>
          <span>Destination Name:</span>
          <input
            type="text"
            value={mountainName}
            onChange={(e) => setMountainName(e.target.value)}
          />
        </label>

        <label>
          <span>Weather:</span>
          <select
            type="text"
            value={weather}
            onChange={(e) => setweather(e.target.value)}
          >
            <option value="">Select Weather</option>
            <option value="Hot">Hot</option>
            <option value="Moderate">Moderate</option>
            <option value="Cold">Cold</option>
          </select>
        </label>

        <label>
          <span>Popularity:</span>
          <select
            type="text"
            value={popularity}
            onChange={(e) => setPopularity(e.target.value)}
          >
            <option value="">Select Popularity</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label>
          <span>Budget:</span>
          <select
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label>
          <span>Category:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>{" "}
            {/* Optional: Prompt the user to select an option */}
            <option value="Hiking">Hiking</option>
            <option value="Touring">Touring</option>
            <option value="Entertainment">Climbing</option>
            <option value="Family Time">Family Time</option>
            <option value="Biking">Biking</option>
            <option value="Religious">Religious</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <br />
        <label>
          Photo:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setPhoto)}
          />
        </label>

        <br />
        <label>
          Description:
          <input
           value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Uploads</button>
      </form>
    </>
  );
}

export default Imgupload;
