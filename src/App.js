import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Details from "./Pages/Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footer from "./Pages/Footer";
import { useState } from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Products from "./Shopping Apis/Products";
import ReducerPage from "./ReducerPage";
import Homepage1 from "./Pages/Homepage1";
import HomeRouter from "./Pages/HomeRouter";
import Blured from "./Pages/Blured";
import Imgupload from "./Imgupload";
import UserPostUpload from "./UserPostUpload";
import Description from "./Pages/Description";
import UserProfile from "./UserProfile";
import Explore from "./Pages/Explore";
import State from "./Context FIles/State";

function App() {
  return (
    <>
      <State>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<HomeRouter /> ? <HomeRouter /> : <Blured />}
            />

            <Route path="/Details" element={<Details />} />
            <Route path="/Products" element={<Products />} />

            <Route path="/ReducerPage" element={<ReducerPage />} />
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Imgupload" element={<Imgupload />}></Route>
            <Route path="/postupload" element={<UserPostUpload />}></Route>
            <Route path="/Description/:id" element={<Description />}></Route>
            {/* <Route path="/like/:likeId" element={<UserProfile />}></Route> */}
            <Route path="/profile/:saveId" element={<UserProfile />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
          </Routes>
        </Router>
      </State>

      {/* <Navbar/>
 <Homepage/>
 <Footer/> */}
    </>
  );
}

export default App;
