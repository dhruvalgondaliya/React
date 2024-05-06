import React, { useEffect, useState } from 'react';

export default function New() {
    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("FormData")
        return localData ? JSON.parse(localData) : []
    });
    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    });
    const [editItem, setEditItem] = useState(null)



    useEffect(() => {
        localStorage.setItem("FormData", JSON.stringify(items))
    })

    const handleSubmit = () => {
        setItems([...items, inputValue]);
        setInputValue({
            name: "",
            password: ""
        });
        setEditItem(null)
    }

    const handleDelete = (index) => {
        const updatedData = [...items];
        updatedData.splice(index, 1);
        setItems(updatedData);
    }


    const handleEdit = (index) => {
        setEditItem(index);
        setInputValue(items[index])
    }

    const handleSaveData = () => {
        const updatedData = [...items];
        updatedData[editItem] = inputValue;
        setItems(updatedData);
        setEditItem(null);
        setInputValue({
            name: "",
            password: ""
        });

    }

    return (
        <>
            <form action='#'>
                <h1>Data form</h1>
                <input
                    type="text"
                    placeholder='Enter Name'
                    value={inputValue.name}
                    onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder='Enter Password'
                    value={inputValue.password}
                    onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
                />
                <br /><br />
                {
                    editItem === 0 ?
                        <button onClick={() => handleSaveData()}>Save Data</button> :
                        <button onClick={() => handleSubmit()}>Submit</button>
                }
            </form>

            <hr />

            {

                <table>
                    <thead>
                        {/* <input type="text" />  */}
                    </thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>

                    {
                        items.map((item, index) => {
                            return (
                                <>
                                    <tbody key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <button onClick={() => handleEdit(index)}>Edit</button>
                                            <button onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tbody>

                                </>
                            )
                        })
                    }


                </table>
            }

        </>
    );
}
