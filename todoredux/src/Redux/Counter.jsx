import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inc, Dec } from "./Action";

function Counter() {
  const counter = useSelector((state) => state.CouterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(Inc(2))}>Increase</button>
      <button onClick={() => dispatch(Dec(5))}>Decrease</button>
    </div>
  );
}

export default Counter;
