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
import { useSelector } from "react-redux/es/hooks/useSelector";
import { authCheckerFunction } from "./ReactTooklitFolder/AuthSlice";
import { useDispatch } from "react-redux";

function HomeRouter() {
  axios.defaults.withCredentials = true;

  const auth = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckerFunction());
  });

  console.log(auth);

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
