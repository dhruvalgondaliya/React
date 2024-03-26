import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        if (name.length <= 3 || password.length <= 5) {
            alert("Please Enter values");
        } else {
            alert("Registration Succesfull ");
            console.log("Name: " + name);
            console.log("Password: " + password);
        }
        e.target.reset();
    };

    const handleName = (e) => {
        let val = e.target.value;

        if (val.length <= 3) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        setName(val);
    };

    const handlePass = (e) => {
        let val = e.target.value;

        if (val.length <= 6) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        setPassword(val);
    };


    return (
        <div className='form'>
            <h2>Controlled Form</h2>
            <form onSubmit={handleForm} >
                <input type="text" placeholder='Name' onChange={handleName} />
                {nameError ? <span className='error' style={{ color: 'red' }}>Name Not Valid</span> : ""}
                <br /><br />
                <input type="email" placeholder='Email' onChange={handleName} /><br /><br />
                <input type="password" placeholder='password' onChange={handlePass} />
                {passwordError ? <span className='error ' style={{ color: 'red' }}>Password Not Valid</span> : ""}
                <br /><br />

                <button type='submit' className='btn-on'>submit</button>
            </form>
        </div>
    )
}