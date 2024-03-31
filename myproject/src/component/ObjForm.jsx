import React, { useState } from 'react'

export default function ObjForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""

    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(formData);

        e.target.reset();
    }

    return (
        <>

            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder='Enter Your Name' onChange={handleChange} />
                <br /><br />
                <input type="email" name="email" placeholder='Enter Your Email' onChange={handleChange} />
                <br /><br />
                <input type="password" name="password" placeholder='Enter Your Password' onChange={handleChange} />
                <br /><br />
                <button>Submit</button>
            </form>

            <h3>{formData.name}</h3>
            <h3>{formData.email}</h3>
            <h3>{formData.password}</h3>

        </>
    )
}
