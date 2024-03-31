import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        console.log("Mounted")
        return () => {
            console.log("Unmounted")
        }
    })

    useEffect(()=>{
        console.log("Updated")
    },[number])

    return (
        <>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <hr />
            <h4>{number}</h4>
            <button onClick={() => setNumber(number + 2)}>Add 2</button>
        </>
     
    )
}
