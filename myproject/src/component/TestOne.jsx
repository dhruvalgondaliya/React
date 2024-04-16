import React, { useEffect, useState } from 'react'

export default function TestOne() {

    const [items, setItems] = useState(() => {
        const data = localStorage.getItem("formData")
        return data ? JSON.parse(data) : []
    })
    const [inputvalue, setInputValue] = useState({
        name: "",
        password: ""
    })
    const [editItem, setEditItem] = useState(null)

    // save data    
    const hanldeData = () => {
        if (inputvalue.name == "") {
            alert("Please Enter Name")
        }
        else if (inputvalue.password == "") {
            alert("Enter A Password")
        } else if (inputvalue.password.length > 5) {
            alert("password Minimum 5 character");
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

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(items))
    })

    // delete
    const handleDelete = (index) => {
        const updateData = [...items]
        updateData.splice(index, 1)
        setItems(updateData)
    }

    // Edite
    const handleEdit = (index) => {
        setEditItem(index);
        setInputValue(items[index]);
    }

    const handleSaveData = () => {
        const updateData = [...items]
        updateData[editItem] = inputvalue
        setItems(updateData)
        setEditItem(null)

        // feld clear
        setInputValue({
            name: "",
            password: ""
        })

    }

    return (
        <>
            <form action="#">
                <input type="text" placeholder='Enter Your Name' onChange={(e) => setInputValue({ ...inputvalue, name: e.target.value })} />
                <br /><br />
                <input type="password" placeholder='Enter Your Password' onChange={(e) => setInputValue({ ...inputvalue, password: e.target.value })} />
                <br /><br />

                {
                    editItem === null ?
                        <button onClick={() => hanldeData()}>SaveData</button> :
                        <button onClick={() => handleSaveData()}>UpdateItem</button>
                }
            </form>

            {
                items.length == 0 ? "" :
                    <table >
                        <thead>
                            <tr className='border'>
                                <th>NO</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            items.map((item, index) => {
                                return (
                                    <>
                                        <tbody key={index}>
                                            <tr className='border'>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.password}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(index)}>Edit</button>
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
