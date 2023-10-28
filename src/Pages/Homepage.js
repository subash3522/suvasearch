import React from "react";
import "../Global.css";

function Homepage() {
  return (
    <>
      <div className="whole-body ">
        <div className="container-fluid  d-flex align-items-center justify-content-center h-global">
          <div className="text-white">
            <div className="d-flex flex-column">
              <div className="d-flex flex-column mb-3">
                <h1 className="text-center" style={{ fontFamily: "open-sans" }}>
                  Where Answers Await Your Query.
                </h1>
                <p
                  className="text-center"
                  style={{ fontFamily: "open-sans", fontSize: "1.1rem" }}
                >
                  {" "}
                  With lightning-fast precision and an intuitive interface,{" "}
                  <br /> we've revolutionized the way you navigate the web.
                </p>
              </div>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn text-black bg-white" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-around ">
          <div className="card p-3 width-global-80 global-bg-cards">
            <div className="m-3 text-center text-white">
              Mini Printer: Blue
            </div>
            <img
              src="https://i0.wp.com/starlight-kw.com/wp-content/uploads/2023/04/2-2.jpg?fit=1000%2C1000&ssl=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-evenly">
              <a href="#" className="btn btn-primary">
                Details
              </a>
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
              <a href="#" className="btn btn-primary">
                Details
              </a>
              <button className="btn btn-primary">Order</button>
            </div>
          </div>
        </div>
      <div className='container-fluid d-flex align-items-center justify-content-center ' style={{height:'6vh'}}> <div className="text-white"></div> </div>
      </div>
    </>
  );
}

export default Homepage;
