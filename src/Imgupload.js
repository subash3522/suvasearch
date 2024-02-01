import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Global.css";
import { Link } from "react-router-dom";

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
      await axios.post("http://localhost:5001/api/addMountain", formData, {
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
        const response = await axios.get("http://localhost:5001/api/mountains");
        setMountains(response.data.mountains);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountains();
  }, []);

  //mountains get ends here

  //mountain get with id param:

  const [mountainsId, setMountainsId] = useState([]);

  useEffect(() => {
    const fetchMountainsId = async () => {
      try {
        const response = await axios.get("http://localhost:5001/mountain/1");
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountainsId();
  }, []);

  //mountain get with id param ends here

  //mountain get with budget param starts here

  const [mountainsBudget, setMountainsBudget] = useState([]);

  useEffect(() => {
    const fetchMountainsBudget = async () => {
      try {
        const response = await axios.get("http://localhost:5001/mountains/low");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountainsBudget();
  }, []);
  //mountain get with budget param ends here

  //login auth stats here
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("https://apitesting-com.onrender.com/suvaauth").then((res) => {
      if (res.data.status === "success") {
        console.log(res.data);
        setAuth(true);
      } else {
        console.log(res.data);
      }
    });
  });
  //login auth ends here

  //like post starts here
  const [userIdForLike, setUserIdForLike] = useState(1);

  const handleOnLike = (postId) => {
    axios
      .post("http://localhost:5001/like", {
        userIdForLIke: 1,
        postIdForLike: postId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  //like post ends here

  return (
    <>
      <div>
        <input type="file" onChange={handlechangeimage} />
        <button onClick={onuploadclicker}>upload</button>
        {img.map((value, index) => (
          <img
            key={index}
            src={`http://localhost:5001/${value.Image}`}
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

      <div className="product-container">
        {mountains.map((value) => (
          <Link
            className="product-container"
            to={auth ? `Description/${value.ID}` : ""}
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
              <p className="letter-animation">Save</p>
              <p
                className="letter-animation"
                onClick={() => handleOnLike(value.ID)}
              >
                Like
              </p>
              <p className="letter-animation">Recommend</p>

              <button className="shop-now-button">Shop Now</button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Imgupload;
