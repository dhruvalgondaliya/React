import React, { useEffect, useState } from 'react'

export default function Router() {
    const [items, setItems] = useState(() => {
        const data = localStorage.getItem("FormData")
        return data ? JSON.parse(data) : []
    })
    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    })
    const [editeItem, setEditItem] = useState(null)

    const handleSavedata = () => {
        setItems([...items, inputValue]);
        setInputValue({
            name: "",
            password: ""
        });
        setEditItem(null)
    }

    useEffect(() => {
        localStorage.setItem("FormData", JSON.stringify(items))
    })

    // Delete
    const handleDelete = (index) => {
        const UpdateData = [...items]
        UpdateData.splice(index, 1)
        setItems(UpdateData)
    }

    // Edite
    const handleEdit = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }

    const handleData = () => {
        const UpdateData = [...items]
        UpdateData[editeItem] = inputValue
        setItems(UpdateData)
        setEditItem(null)
        setInputValue({
            name: "",
            password: ""
        });
    }
    // Savaliya Darshan

    return (
        <>
            <h1>Home Page</h1>

            <h2>Validation Form</h2>
            <input type="text" placeholder='Enter Your Name' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
            <br /><br />
            <input type="password" placeholder='Enter Your password' value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
            <br /><br />

            {
                editeItem == null ?
                    <button onClick={() => handleSavedata()}>Add Data</button> :
                    < button onClick={() => handleData()}>Save Data</ button>
            }
            <br /><hr />


            {
                items.length == 0 ? "" :
                    <table >
                        <thead>
                            <tr className='border'>
                                <th className='border'>NO</th>
                                <th className='border'>Name</th>
                                <th className='border'>Password</th>
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
                                                <td className='border'>
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
