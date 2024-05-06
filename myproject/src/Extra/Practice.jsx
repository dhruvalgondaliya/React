import React, { useEffect, useState } from 'react'

export default function Practice() {

    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("formData")
        return localData ? JSON.parse(localData) : []
    })
    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    })

    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(items))
    })

    const handleSubmitData = () => {
        setItems([...items, inputValue])
        setInputValue({
            name: "",
            password: ""
        })
    }

    const handleDelete = (index) => {
        const UpdateData = [...items]
        UpdateData.splice(index, 1)
        setItems(UpdateData)
    }

    const handleEdit = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }

    const handleSaveData = () => {
        const UpdateData = [...items]
        UpdateData[editItem] = inputValue
        setItems(UpdateData)
        setEditItem(null)
        setInputValue({
            name: "",
            password: ""
        })

    }

    return (
        <>
            <h1>Form Data</h1>

            <input type="text" placeholder='Enter Name' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
            <br /><br />
            <input type="password" placeholder='Enter Password' value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
            <br /><br />
            {
                editItem === null ?
                    <button onClick={() => handleSubmitData()}>Submit</button> :
                    <button onClick={() => handleSaveData()}>Save Edit</button>
            }

            {
                <table>
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
    )
}
