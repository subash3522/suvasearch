import React from "react";
import "../Global.css";
import { Link } from "react-router-dom";

function Homepage1() {
  return (
    <>
      {/* new */}
      <div id="carouselExample" className="carousel slide" style={{position:'relative'}}>
      {/* <div className="d-none d-sm-block d-md-none" style={{position:'absolute', top:"50px", zIndex:'1', width:"100%", color:'white'}}>Slide Left or Right</div> */}
      
        <div className="carousel-inner" style={{ height: "70vh" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            
            <div
              className=" d-flex justify-content-center align-items-center background1"
              style={{ height: "70vh" }}
            >
              <div className="d-flex justify-content-evenly  w-100" >
                {/* <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center " style={{ border:'solid red'}}>
                  <div className="icon p-3" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Producs</div>
                  <button
                    className=" m-0 myfontsub btn btn-white text-white border"
                    style={{ width: "100px" }}
                  >
                    <Link
                      to="/Products"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                  </button>
                </div> */}

                <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center">
                  <div className="icon p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Your Travel is One Click Away</div>
                  <button
                    className=" m-0 myfontsub btn btn-white text-white border"
                    style={{ width: "100px" }}
                  >
                    <Link
                      to="/Explore"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " style={{ height: "100%" }}>
            <div
              className=" d-flex justify-content-center align-items-center background2"
              style={{ height: "70vh" }}
            >
              <div className="d-flex justify-content-evenly  w-100">
                {/* <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center ">
                  <div className="icon p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Tour Destination</div>
                  <button
                    className=" m-0 myfontsub btn btn-white text-white border"
                    style={{ width: "100px" }}
                  >
                    <Link
                      to="/Products"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                  </button>
                </div> */}

                <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center">
                  <div className="icon p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Adventure Starts Here</div>
                  <Link
                      to="/Explore"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " style={{ height: "100%" }}>
            <div
              className=" d-flex justify-content-center align-items-center background3"
              style={{ height: "70vh" }}
            >
              <div className="d-flex justify-content-evenly  w-100">
                {/* <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center ">
                  <div className="icon p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Charging Points: EV</div>
                  <button
                    className=" m-0 myfontsub btn btn-white text-white border"
                    style={{ width: "100px" }}
                  >
                    <Link
                      to="/Products"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                  </button>
                </div> */}

                <div className="d-flex flex-column  justify-content-center align-items-center text-white text-center">
                  <div className="icon p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                  <div className="m-3 myfont">Best Travel Destinations</div>
                  <Link
                      to="/Explore"
                      className="text-white text-decoration-none"
                    >
                      Explore
                    </Link>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
    </>
  );
}

export default Homepage1;
