import React, { useState } from 'react'

export default function FormHandling() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");
    const [check, setCheck] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(select)
        console.log(check)

        // input field clear karva
        e.target.reset();
    }

    return (
        <>
            <br /><br />
            <form className='handleForm' onSubmit={handleForm}>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder='Enter Your Name' onChange={handleName} />
                <br /><br />
                <label htmlFor="">Email :</label>
                <input type="email" placeholder='Enetr Your Email' onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                intrest:
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option>---select----</option>
                    <option>Ahemdabad</option>
                    <option>Surat</option>
                    <option>Amreli</option>
                    <option>Vadodra</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
                <br /><br />
                <button>Submit</button>

            </form>
        </>
    )
}
