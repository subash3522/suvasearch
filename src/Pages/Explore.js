import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Global.css";
import { Link } from "react-router-dom";

function Explore() {
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

  //fetch mountains outside useeffects starts here
  const fetchMountains = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/mountains");
      setMountains(response.data.mountains);
    } catch (error) {
      console.error("Error fetching mountains:", error);
    }
  };
  //fetch mountains outside  useeffects ends here

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

  const fetchMountainsBudget = async (bud) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/mountains/${bud}`
      );
      console.log(response.data);
      setMountains(response.data);
    } catch (error) {
      console.error("Error fetching mountains:", error);
    }
  };

  //mountain get with budget param ends here

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

  //get user id from local storage
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

  //likes counter code starts here
  const [totalLikes, setTotalLIkes] = useState();

  const totalLikeHandler = async (like, PostID) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/likecounter/${like}`
      );
      setTotalLIkes((prev) => ({ ...prev, [PostID]: response.data.length }));
      // setTotalLIkes(response.data.length);
    } catch (error) {
      console.error("Error fetching mountains:", error);
    }
  };

  //like count storing functionality ends here

  return (
    <>
      <div
        className="container d-flex flex-column my-4"
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        <div className="filter-header mb-3 text-center">
          <h2>Filters</h2>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          {/* Weather Filter */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Weather
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("Hot")}
                >
                  Hot
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("Medium")}
                >
                  Medium
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("Cold")}
                >
                  Cold
                </button>
              </li>
            </ul>
          </div>

          {/* Difficulty Filter - Example for another filter */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Difficulty
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Easy")}
                >
                  Easy
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Moderate")}
                >
                  Moderate
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Hard")}
                >
                  Hard
                </button>
              </li>
            </ul>
          </div>

          {/* Altitude Filter - Example for another filter */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Altitude
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Low")}
                >
                  Low
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Medium")}
                >
                  Medium
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("High")}
                >
                  High
                </button>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Difficulty
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Easy")}
                >
                  Easy
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Moderate")}
                >
                  Moderate
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountains("Hard")}
                >
                  Hard
                </button>
              </li>
            </ul>
          </div>

          {/* Altitude Filter - Example for another filter */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Budget
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("Low")}
                >
                  Low
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("Medium")}
                >
                  Medium
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => fetchMountainsBudget("High")}
                >
                  High
                </button>
              </li>
            </ul>
          </div>

          {/* Reset Button */}
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => fetchMountains()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div
        className="container-fluid flex-wrap"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit,279px",
        }}
      >
        {mountains.map((value) => (
          <Link
            className="product-container text-decoration-none text-black"
            to={auth ? `/Description/${value.ID}` : ""}
          >
            <div className="card-container fade-in" key={value.ID}>
              <h3 className="card-title letter-animation">
                {value.mountainName}
              </h3>
              <img
                style={{ height: "200px", borderRadius: "8px" }}
                src={`http://localhost:5001/${value.photoPath}`}
                alt={value.mountainName}
                className="card-image letter-animation"
              />
              <p className="card-category letter-animation">{value.category}</p>
              <div className="card-buttons d-flex justify-content-between">
                <button
                  className="card-button letter-animation"
                  onClick={() => handleOnLike(value.ID)}
                >
                  Like:{totalLikes}
                </button>
                <button className="card-button letter-animation">Save</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Explore;
