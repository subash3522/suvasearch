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

  const likeRenderer = () => {
    mountains.forEach((value) => {
      totalLikeHandler(value.ID);
    });
  };

  //fetch mountains outside useeffects starts here
  const fetchMountains = async () => {
    try {
      const response = await axios.get("https://apitesting-com.onrender.com/api/mountains");
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
        const response = await axios.get("https://apitesting-com.onrender.com/mountain/1");
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
        `https://apitesting-com.onrender.com/mountains/${bud}`
      );

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
    axios.get("https://apitesting-com.onrender.com/suvaauth").then((res) => {
      if (res.data.status === "success") {
        setAuth(true);
      } else {
        console.log(res.data);
      }
    });
  });
  //login auth ends here

  //like post starts here
  const [userIdForLike, setUserIdForLike] = useState();

  const handleOnLike = (postId) => {
    axios
      .post("https://apitesting-com.onrender.com/like", {
        userIdForLIke: userId,
        postIdForLike: postId,
      })
      .then((res) => {})
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  //like post ends here

  //save post starts here
  const [userIdForSave, setUserIdForSave] = useState();

  const handleOnSave = (postId) => {
    axios
      .post("https://apitesting-com.onrender.com/Save", {
        userIdForSave: userId,
        postIdForSave: postId,
      })
      .then((res) => {})
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  //save post ends here

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
  const [totalLikes, setTotalLikes] = useState({});

  const totalLikeHandler = async (like) => {
    {
      /* like is the PostID */
    }
    try {
      const response = await axios.get(
        `https://apitesting-com.onrender.com/likecounter/${like}`
      );
      setTotalLikes((prev) => ({ ...prev, [like]: response.data.length }));
    } catch (error) {
      console.error("Error fetching mountains:", error);
    }
  };

  useEffect(() => {
    mountains.forEach((value) => {
      totalLikeHandler(value.ID);
    });
  }, [mountains]);

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
          <div className="card-container fade-in" key={value.ID}>
            <h3 className="card-title letter-animation">
              {value.mountainName}
            </h3>
            <Link
              className="product-container text-decoration-none text-black"
              to={auth ? `/Description/${value.ID}` : ""}
            >
              <img
                style={{ height: "200px", borderRadius: "8px" }}
                src={`https://apitesting-com.onrender.com/${value.photoPath}`}
                alt={value.mountainName}
                className="card-image letter-animation"
              />
              <p className="card-category letter-animation">{value.category}</p>
            </Link>
            <div className="card-buttons d-flex justify-content-between ">
              <div
                className="card-button letter-animation"
                onClick={() => {
                  handleOnLike(value.ID);
                  likeRenderer();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-hand-thumbs-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
                {totalLikes[value.ID]}
              </div>

              <button
                className="card-button letter-animation"
                // onClick={auth ? () => handleOnSave(value.ID) : ""}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-save"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Explore;
