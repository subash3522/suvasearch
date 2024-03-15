import React from "react";
import "../Global.css";
import { Link } from "react-router-dom";
import { Link as Scroollink } from "react-scroll";
import { useSelector } from "react-redux";

function Navbar({ loginClicker }) {
  const auth = useSelector((state) => state.auth.data);

  return (
    <>
      <nav
        className="d-flex justify-content-around bg-white shadow sticky-top"
        style={{ borderTop: "solid black 0.5px" }}
      >
        <div
          className="m-1 fw-bold "
          style={{
            padding: "0 24px",
            fontSize: "1.6em",
            border: "solid black 1px",
            borderRadius: "5px",
          }}
        >
          <Link className="text-decoration-none text-black" to="/">
            {" "}
            suvasearch{" "}
          </Link>
        </div>
        <div className="" style={{ visibility: "hidden" }}>
          list
        </div>
        <div className="d-flex">
          <div
            // onClick={()=>loginClicker()}
            // onClick={() => dispatch(tfTogler())}
            className="m-1 text-align-center"
            style={{
              border: "solid black 1px",
              backgroundColor: "#2D2C2C",
              color: "#FFDD00",
              padding: "8px 10px",
            }}
          >
            <Scroollink
              activeClass="aactive"
              to="Homepage"
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset based on your layout
              duration={50}
            >
              Home
            </Scroollink>
          </div>
          <div
            className="m-1 text-align-center text-decoration-none"
            style={{
              border: "solid black 1px",
              backgroundColor: "#2D2C2C",
              color: "white",
              padding: "8px 10px",
            }}
          >
            {/* <Link to="/Products" className="text-white text-decoration-none">
              Explore
            </Link> */}
            <Link to="">Profile</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
