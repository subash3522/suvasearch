import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./Actioncreator/Index";

function ReducerPage() {
  const myState = useSelector((state) => state.countTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter mt-3 ms-3">
        <button onClick={() => dispatch(incNumber())}>+</button>
        <button>{myState}</button>
        <button onClick={() => dispatch(decNumber())}>-</button>
      </div>
    </>
  );
}

export default ReducerPage;
