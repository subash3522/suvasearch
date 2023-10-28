import React from "react";
import "../Global.css";

function Navbar() {
  return (
    <>
      <nav
        className="d-flex justify-content-around bg-white shadow sticky-top"
        style={{ borderTop: "solid black 0.5px" }}
      >
        <div
          className="m-1 fw-bold"
          style={{
            padding: "0 24px",
            fontSize: "1.6em",
            border: "solid black 1px",
            borderRadius: "5px",
          }}
        >
          {" "}
          suvasearch{" "}
        </div>
        <div className="" style={{ visibility: "hidden" }}>
          list
        </div>

        <div
          className="m-1 text-align-center"
          style={{
            border: "solid black 1px",
            backgroundColor: "#2D2C2C",
            color: "#FFDD00",
            padding: "8px 24px",
          }}
        >
          Login
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
