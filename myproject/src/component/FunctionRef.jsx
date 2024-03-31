import React, { useRef } from 'react'

export default function FunctionRef() {
    let inputRef = useRef()
    let inputH = useRef()


    const handleRef = (dhruv) => {
        dhruv.current.style.color = "blue"
    }

    const handlecheng = (ref) => {
        ref.current.style.color = "red"
    }

    return (
        <>
            <h1 ref={inputRef}>Good Morning</h1>
            <button onClick={() => handleRef(inputRef)}>Click Me</button>

            <hr />
            <h1 ref={inputH}>Jay Shree Krishna</h1>
            <button onClick={() => handlecheng(inputH)}>Click Me</button>



        </>
    )
}
