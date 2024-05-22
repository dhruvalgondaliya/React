import React, { useState } from 'react'

export default function Onclick() {

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState({
        name: '',
        password: ''
    });

    const handleSaveData = () => {
        setItems([...items, inputValue])
        setInputValue({
            name: '',
            password: ''
        })
    }

    const handleDelete = (index) => {
        const UpdateData = [...items];
        UpdateData.splice(index, 1);
        setItems(UpdateData);
    }

    



    return (
        <>

            <input type="text" placeholder='Enter Name' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
            <br /><br />
            <input type="password" value={inputValue.password} placeholder='Enter Your Password' onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
            <br /><br />
            <button onClick={() => handleSaveData()}>Save Data</button>

            {
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                    {
                        items.map((item, index) => {
                            return (
                                <>
                                    <tbody>
                                        <tr key={index}>

                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <button onClick={() => handleDelete(index)}>Delete</button>
                                            </td>

                                        </tr>
                                    </tbody>
                                </>
                            )
                        })

                    }

                </table>
            }




        </>
    )
}
