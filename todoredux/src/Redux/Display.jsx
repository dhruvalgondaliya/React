import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "./Action";
import React from "react";

function Display() {
  const data = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  const deleteTODO = (id) => {
    dispatch(Delete(id));
  };

  const editTodo = (index, newValue) => {
    dispatch(Edit({ index, newValue }));
  };

  return (
    <div>
      <h1>Display</h1>
      <ul>
        {data.map((ele, i) => {
          return (
            <li key={i}>
              {ele}
              <button onClick={() => deleteTODO(i)}>Delete</button>
              <button
                onClick={() => {
                  const newValue = prompt("Enter Value");
                  if (newValue !== null) {
                    editTodo(i, newValue);
                  }
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Display;
