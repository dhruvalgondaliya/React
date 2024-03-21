import React, { useState } from 'react'

export default function Content() {

    const [counter, setCounter] = useState(5);
    return (
        <>
            <div className="main-one">
                <h1 className='plus'>{counter}</h1>
                <button className='increment' onClick={() => setCounter(counter + 5)}>Increment</button>
                <button className='increment' onClick={() => setCounter(counter - 5)}>Decrement</button>
            </div>

        </>
    )
}
