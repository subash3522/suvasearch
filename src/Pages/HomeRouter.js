import React, { useState } from "react";
import Homepage from "./Homepage";
import Homepage1 from "./Homepage1";
import Homepage3 from "./Homepage3";
import Homepage4 from "./Homepage4";
import FAQ from "./FAQ";
import { Element } from "react-scroll";
import HomepageALI from "./HomepageALI";
import axios from "axios";
import { useEffect } from "react";

function HomeRouter() {
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:5001/suvaauth").then((res) => {
      if (res.data.status === "success") {
        setAuth(true);
      } else {
        console.log(res.data);
      }
    });
  });

  return (
    <>
      {/* <Element name="Homepage">
        <Homepage />
        </Element> */}
      <Element name="Homepage">
        {auth ? <HomepageALI /> : <Homepage></Homepage>}
      </Element>

      <Element name="Homepage1">
        <Homepage1 />
      </Element>
      <Homepage3 />
      <Homepage4 />
      <FAQ />
    </>
  );
}

export default HomeRouter;
