
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inc, dec } from './Action';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(inc(5))}>Increment</button>
      <button onClick={() => dispatch(dec(2))}>Decrement</button>
    </>
  );
}
