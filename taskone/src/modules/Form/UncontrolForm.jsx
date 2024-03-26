import React, { useRef } from 'react'

export default function Uncontrolled() {

    let input = useRef()
    let input1 = useRef()
    let input2 = useRef()

    const handleForm = (e) => {
        e.preventDefault()
        if (input.current.value.length <= 3) {
            alert("Please Enter Valid Username")

        } if (input2.current.value.length <= 5) {
            alert("Please Enter Valid password")
        }
        else {
            alert("Registration Succesfull")
            console.log("Name: " + input.current.value)
            console.log("email: " + input1.current.value)
            console.log("Password: " + input2.current.value)
        }

        // clear input feild 
        input.current.value = ""
        input1.current.value = ""
        input2.current.value = ""
    }
    return (
        <div>
            <h2>Uncontrolled Form</h2>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='Enter your name' ref={input} />
                <br /><br />
                <input type="email" placeholder='email' ref={input1} />
                <br /><br />
                <input type="password" placeholder='Password' ref={input2} />
                <br /><br />
                <button>submit</button>

            </form>
        </div>
    )
}