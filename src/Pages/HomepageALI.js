import React from "react";
import "../Global.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Login from "./Login";
import Blured from "./Blured";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginToggler } from "../Reducer/Index";
import { tfTogler } from "../Actioncreator/Index";
import axios from "axios";

function HomepageALI({ loginCheck }) {
  const dispatch = useDispatch();
  const loginTogglerState = useSelector((state) => state.xyz);
  <script>AOS.init();</script>;
  axios.defaults.withCredentials= true;


  const handleLogout = ()=>{
    axios.get("http://localhost:5001/suvalogout")
    .then(res=>{
       window.location.reload(true)
       console.log(res.status);
    })
    .catch(err=>{console.log(err);})
}
  return (
    <>
      <div className="imagepreloader" />
      <div className="whole-body " style={{ height: "100vh" }}>
        <div className="container-fluid  d-flex align-items-center justify-content-center  h-global">
          <div
            className="text-white text-center"
            style={{ height: "40%", width: "400px" }}
          >
            <div className="d-flex flex-column">
              <div className="d-flex flex-column mb-3">
                <h1
                  className="text-center"
                  style={{
                    fontFamily: "poppins",
                    fontSize: "3em",
                    fontWeight: "bold",
                  }}
                >
                  Where Answers Await Your Query.
                </h1>
                <p
                  className="text-left mt-3"
                  style={{
                    fontFamily: "open-sans",
                    fontSize: "1rem",
                    color: "CaptionText",
                  }}
                >
                  {" "}
                  With lightning-fast precision and an intuitive interface,{" "}
                  we've revolutionized the way you navigate the web.
                </p>
              </div>
              <div className="d-flex justify-content-evenly ">
                <button
                  onClick={() => dispatch(tfTogler())}
                  className=" p-2  bg-black  text-white  "
                  style={{ width: "220px", border: "solid black 1px" }}
                >
                  Welcome to the home
                </button>
                <button
             onClick={handleLogout}
             className="  p-2  bg-transparent text-black  "
             style={{ width: "110px", border: "solid white 1px" }}
             >Logout</button>
               
              </div>
              {/* <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className=" text-black  bg-global" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center flex-column flex-md-row justify-content-around ">
          <div className="card p-1 width-global-80 global-bg-cards">
            <div className="m-3 text-center text-white">
              Mini Printer: Blue
            </div>
            <img
              src="https://i0.wp.com/starlight-kw.com/wp-content/uploads/2023/04/2-2.jpg?fit=1000%2C1000&ssl=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-evenly">
              <Link to='/Details' className="btn btn-primary">
                Details
              </Link>
              <button className="btn btn-primary">Order</button>
            </div>
          </div>
          <div className="card p-1 width-global-80 global-bg-cards">
            <div className="m-3 text-center text-white">
              Mini Printer: Pink
            </div>
            <img
              src="https://i0.wp.com/starlight-kw.com/wp-content/uploads/2023/04/2-2.jpg?fit=1000%2C1000&ssl=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-evenly">
              <Link to='/Details'  className="btn btn-primary">
                Details
              </Link>
              <button className="btn btn-primary">Order</button>
            </div>
          </div>
        </div> */}
        {/* <div
          className="container-fluid d-flex align-items-center justify-content-center "
          style={{ height: "6vh" }}
        >
          {" "}
          <div className="text-white"></div>
        </div> */}
      </div>
    </>
  );
}

export default HomepageALI;

