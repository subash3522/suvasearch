import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Global.css";


function Imgupload() {
  //new formfield
  const [mountainName, setMountainName] = useState("");
  const [weather, setweather] = useState("");
  const [popularity, setPopularity] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState(null);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mountainName", mountainName);
    formData.append("weather", weather);
    formData.append("popularity", popularity);
    formData.append("budget", budget);
    formData.append("category", category);
    formData.append("photo", photo);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5001/api/addMountain", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Mountain added successfully");
    } catch (error) {
      console.error("Error adding mountain:", error);
    }
  };
  //newformfield ends here

  //login auth stats here
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:5001/suvaauth").then((res) => {
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
      <form onSubmit={handleFormSubmit}>
        <label>
          Mountain Name:
          <input
            type="text"
            value={mountainName}
            onChange={(e) => setMountainName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Weather:
          <input
            type="text"
            value={weather}
            onChange={(e) => setweather(e.target.value)}
          />
        </label>
        <br />
        <label>
          Popularity:
          <input
            type="text"
            value={popularity}
            onChange={(e) => setPopularity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Budget:
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Photo:
          <input
            type="file"
            accept=".jpeg"
            onChange={(e) => handleFileChange(e, setPhoto)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileChange(e, setDescription)}
          />
        </label>
        <br />
        <button type="submit">Uploads</button>
      </form>
    </>
  );
}

export default Imgupload;
