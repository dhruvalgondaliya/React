import { useDispatch } from "react-redux";
import { useState } from "react";
import { Add } from "./Action";
import React from "react";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function FormSubmit(e) {
    e.preventDefault();
    dispatch(Add(input));
    setInput(""); // Clear the input field
  }

  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={FormSubmit}>
        <input
          type="text"
          placeholder="Enter To DO"
          value={input} // Bind input state to the value
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <br />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default Input;
