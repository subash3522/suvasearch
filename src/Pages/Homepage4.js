import React from 'react'

function Homepage4() {
  return (
 <>
 <div
        className="container d-flex flex-column flex-md-row align-items-center justify-content-evenly"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="d-flex w-md-50 w-100 m-3"
          style={{  height: "90%"}}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="myfont text-center" style={{ width: "60%" }}>
            Long heading is what you see here in this feature section
            </p>
            <p style={{ fontSize: "0.9rem", width: "80%" }}>
              Our search platform utilizes an advanced algorithm to deliver
              accurate and relevant results, making it easier than ever to find
              travell, hiking, biking places.
            </p>
            <div className="d-flex ">
              <div className=" d-flex flex-column align-items-center">
                <p style={{ fontSize: "1.3rem" ,fontWeight:'bold' }}>50% OFF</p>
                <p className="text-center" style={{ width: "80%" }}>
                  Unlock exclusive deals for hidden hiking spots and discounts with our search platform.
                </p>
                <button>Explore</button>
              </div>
              <div className=" d-flex flex-column align-items-center">
                <p style={{ fontSize: "1.3rem" , fontWeight:'bold'}}>50% OFF</p>
                <p className="text-center" style={{ width: "80%" }}>
                Unlock exclusive deals for hidden riding roads and discounts with our search platform.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-w-md-50 w-100"
          style={{ height: "90%" }}
        >
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnV0dXJlfGVufDB8fDB8fHww"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
 </>
  )
}

export default Homepage4