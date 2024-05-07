import React, { useEffect, useState } from 'react'
import './extra.css'

export default function OneMore() {
    const [items, setItems] = useState(()=>{
        const localData = localStorage.getItem("formData")
        return localData ? JSON.parse(localData) : []
    })
    const [inpuValue, setInputValue] = useState({
        name: "",
        Password: ""
    })
    const [editItem, setEditItem] = useState(null)

    const handleSaveData = () => {
        setItems([...items, inpuValue])
        console.log(inpuValue)
        setInputValue({
            name: "",
            Password: ""
        })

    }

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(items))
    })
    const handleDelete = (index) => {
        const UpdateData = [...items]
        UpdateData.splice(index, 1)
        setItems(UpdateData)
    }


    const handleEditData = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }
    const handleSaveChange = () => {
        const UpdateData = [...items]
        UpdateData[editItem] = inpuValue
        setItems(UpdateData)
        setEditItem(null)
        setInputValue({
            name: "",
            Password: ""
        })
    }

    return (
        <>
            <h2>Form Data</h2>

            <input type="text" value={inpuValue.name} placeholder='Enter Name' onChange={(e) => setInputValue({ ...inpuValue, name: e.target.value })} />
            <br /><br />
            <input type="Password" value={inpuValue.Password} onChange={(e) => setInputValue({ ...inpuValue, Password: e.target.value })} placeholder='Enter Password' />
            <br /><br />

            {
                editItem === null ?
                    <button onClick={() => handleSaveData()}>Submit</button> :

                    <button onClick={() => handleSaveChange()}>SaveChange</button>
            }

            <h2 className='text-center'>Table Data</h2>
            {
                <table >
                    <tr className='Serch'>
                        <th className='Serch'>No</th>
                        <th className='Serch'>Name</th>
                        <th className='Serch'>Password</th>
                        <th className='Serch'   >Action</th>
                    </tr>
                    {
                        items.map((item, index) => {
                            return (
                                <>
                                    <tbody key={index}>
                                        <tr className='Serch'>
                                            <td className='Serch'>{index + 1}</td>
                                            <td className='Serch'>{item.name}</td>
                                            <td className='Serch'>{item.Password}</td>
                                            <td className='Serch'>
                                                <button onClick={() => handleEditData(index)}>Edit</button>
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
