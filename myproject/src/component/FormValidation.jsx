import React, { useState } from 'react';

export default function FormValidation() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        if (name.length <= 3 || password.length <=6) {
            alert("Please Enter Valid values");
        } else {
            alert("All Good ");
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
        <>
            <div className="main">
                <form onSubmit={handleForm}>
                    <input type="text" placeholder="Enter Your Name" onChange={handleName} />
                    {nameError ? <span className='error'>Name Not Valid</span> : ""}
                    <br /><br />
                    <input type="password" placeholder="Enter Your Password" onChange={handlePass} />
                    {passwordError ? <span className='error'>Password Not Valid</span> : ""}
                    <br /><br />
                    <button type="submit" className='btn_one'>Submit</button>
                </form>
            </div>
        </>
    );
}
