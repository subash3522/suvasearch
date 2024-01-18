import axios from "axios";
import React, { useEffect, useState } from "react";

function Imgupload() {
  const [imgfile, setImgfile] = useState();
  const [img, setImg] = useState([]);

  const handlechangeimage = (e) => {
    setImgfile(e.target.files[0]);
  };

  const displayImage = () => {
    axios.get("http://localhost:5001/upload").then((res) => {
      setImg(res.data);
    });
  };

  const onuploadclicker = () => {
    displayImage();
    const formdata = new FormData();
    formdata.append("image", imgfile);
    axios
      .post("http://localhost:5001/upload", formdata)
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:5001/newtest").then((res) => {
      // console.log(res.data[0].Email)
    });
  }, []);

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
      await axios.post("https://apitesting-com.onrender.com/api/addMountain", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Mountain added successfully");
    } catch (error) {
      console.error("Error adding mountain:", error);
    }
  };
  //newformfield ends here

  //mountains get

  const [mountains, setMountains] = useState([]);

  useEffect(() => {
    const fetchMountains = async () => {
      try {
        const response = await axios.get("https://apitesting-com.onrender.com/api/mountains");
        setMountains(response.data.mountains);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountains();
  }, []);

  //mountains get ends here

  return (
    <>
      <div>
        <input type="file" onChange={handlechangeimage} />
        <button onClick={onuploadclicker}>upload</button>
        {img.map((value, index) => (
          <img
            key={index}
            src={`https://apitesting-com.onrender.com/${value.Image}`}
            alt=""
            style={{ height: "200px", width: "300px" }}
          />
        ))}
        <div></div>
      </div>

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

    
  
        {
          mountains.map((value)=>(
          <div className="card" style={{ width: "18rem" }}>
          <img src={`https://apitesting-com.onrender.com/${value.photoPath}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{value.mountainName}</h5>
            <p className="card-text">
              {value.descriptionContent}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>))}


      
    </>
  );
}

export default Imgupload;
