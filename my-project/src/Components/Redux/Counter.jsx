// import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { dec, inc } from './Action';



export default function Counter() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.Counter);

    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(inc(5))}>Increment</button> &nbsp;
            <button onClick={() => dispatch(dec(2))}>Decrement</button>
        </>
    )
}
