import React, { useState } from 'react'

export default function ArrayForm() {
    const [formData, setFormData] = useState([]);
    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        setFormData([...formData, { name, email }])
        console.log(name)
        console.log(email)

        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleForm}>

                <input type="text" name='name' placeholder='Enter Your Name' />
                <br /><br />
                <input type="email" name='email' placeholder='Enter Your Email' />
                <br /><br />
                <button>Submit</button>
            </form>
            <ul></ul>

            {
                formData.map((item, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                <li><b>{item.name}</b></li>
                                <li><b>{item.email}</b></li>
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}
