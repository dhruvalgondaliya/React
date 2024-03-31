import React, { useState } from 'react'
import '../App.css'

export default function Hooks() {


    // Hooks usestate
    const [name, setName] = useState("Hello World !!")
    const [counter, setCounter] = useState(0)

    const changestate = () => {
        if (name === "Hello World !!") {
            setName("Radha Krishna");
        }
        else {
            setName("Hello World !!");
        }
    }

    return (
        <div>
            <div className="demo">
                <h4 className='plus'>{name}</h4>
                <br />
                <button className='increment' onClick={changestate}>Change State</button>
            </div>
            <hr />
            <div className="demo">
                <h1 className='plus'>{counter}</h1>
                <button className='increment' onClick={() => setCounter(counter + 1)}>Increment</button>
                <button className='increment' onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    );
};
