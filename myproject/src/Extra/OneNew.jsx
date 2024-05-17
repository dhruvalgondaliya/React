import React, { useState } from 'react'

export default function OneNew() {

    const [items, setItems] = useState([])
    const [inputValue, setIputValue] = useState({
        name: "",
        password: ""
    })

    const [editItem, setEditItem] = useState(null)
    const handleAddData = () => {
        setItems([...items, inputValue])
        setIputValue({
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
        setIputValue(items[index])
    }

    const handleChangeSave = () => {
        const UpdateData = [...items]
        UpdateData[editItem] = inputValue
        setItems(UpdateData)
        setEditItem(null)

    }

    return (
        <>
            <input type="text" placeholder='Enter Your Name' value={inputValue.name} onChange={(e) => setIputValue({ ...inputValue, name: e.target.value })} />
            <br /><br />
            <input type=" password" placeholder='Enter Password' value={inputValue.password} onChange={(e) => setIputValue({ ...inputValue, password: e.target.value })} />
            <br /><br />

            {
                editItem === null ?
                    <button onClick={() => handleAddData()}>Submit</button> :
                    <button button onClick={() => handleChangeSave()}>Change Save</button>
            }

            {
                items.length == 0 ? "" :
                    <table>
                       <thead>
                        <tr>
                            <input type="text" placeholder='Serch Your Data' />
                        </tr>
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
                                            <tr >
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.password}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(index)}>Edit</button>
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
