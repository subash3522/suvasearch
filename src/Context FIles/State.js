import myContextVariable from "./Context";

import React, { Children } from "react";

function State(props) {
  const aVariable = "hellothere";
  const nextVariable = 'next there'

  return (
    <myContextVariable.Provider value={{aVariable,nextVariable}}>
      {props.children}
    </myContextVariable.Provider>
  );
}

export default State;
