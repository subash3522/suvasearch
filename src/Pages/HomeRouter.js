import React from "react";
import Homepage from "./Homepage";
import Homepage1 from "./Homepage1";
import Homepage3 from "./Homepage3";
import Homepage4 from "./Homepage4";
import FAQ from "./FAQ";
import { Element } from "react-scroll";

function HomeRouter() {
  return (
    <>
      
        <Homepage />
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
