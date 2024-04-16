import React, { useEffect, useState } from 'react'

export default function Test() {

    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("ItemData")
        return localData ? JSON.parse(localData) : []

    })

    const [inputvalue, setInputValue] = useState({
        name: "",
        password: ""
    })
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem("ItemData", JSON.stringify(items))
    })

    const handleAllData = () => {
        if (inputvalue.name == "") {
            alert("Enter a Name")
        } else if (inputvalue.password == "") {
            alert("Enter a Valid Password")
        } else if (inputvalue.password.length < 6) {
            alert("Password minimum 6 character")
        }
        else {
            setItems([...items, inputvalue])
            setInputValue({
                name: "",
                password: ""
            })
            setEditItem(null)
        }

    }

    // Delete Data
    const handleDelete = (index) => {
        const updateData = [...items]
        updateData.splice(index, 1)
        setItems(updateData)
    }

    // Edite Data
    const handleEdit = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }

    // Edite SaveData
    const handleSaveData = () => {
        const updateData = [...items]
        updateData[editItem] = inputvalue
        setItems(updateData)
        setEditItem(null)
        // input clear
        setInputValue({
            name: "",
            password: ""
        })
    }


    return (
        <>
            <input type="text" placeholder='Enter First Name' value={inputvalue.name} onChange={(e) => setInputValue({ ...inputvalue, name: e.target.value })} />
            <br /><br />
            <input type="password" placeholder='Enter Your Password' value={inputvalue.password} onChange={(e) => setInputValue({ ...inputvalue, password: e.target.value })} />
            <br /><br />
            {
                editItem === null ? <button onClick={() => handleAllData()}>Add Data</button> :
                    <button onClick={() => handleSaveData()}>SaveData</button>
            }


            {
                items.length === 0 ? "" :
                    <table>
                        <thead className='border'>
                            <tr>
                                <th className='border'>NO</th>
                                <th className='border'>Name</th>
                                <th className='border'>password</th>
                                <th className='border'>Action</th>
                            </tr>
                                </thead>

                        {
                            items.map((item, index) => {
                                return (
                                    <>
                                        <tbody key={index}>
                                            <tr className='border'>
                                                <td className='border'>{index + 1}</td>
                                                <td className='border'>{item.name}</td>
                                                <td className='border'>{item.password}</td>
                                                <td className='border'><button onClick={() => handleEdit(index)}>Edit</button>
                                                    <button onClick={() => handleDelete(index)}>Delete</button></td>
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
