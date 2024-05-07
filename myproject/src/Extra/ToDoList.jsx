import React, { useState } from 'react'
import './todo.css'

export default function ToDoList() {

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState({
        Work: ""
    })
    const [edititem, setEdititem] = useState(null)

    const handleSaveData = () => {
        setItems([...items, inputValue])
        setInputValue({
            Work: ""
        })
    }


    // Delete Work
    const handleDelete = (index) => {
        const UpdateData = [...items]
        UpdateData.splice(index, 1)
        setItems(UpdateData)
    }

    // Edit Work
    const hadleEdit = (index) => {
        setEdititem(index)
        setInputValue(items[index])
    }

    const handleChange = () => {
        const UpdateData = [...items]
        UpdateData[edititem] = inputValue
        setItems(UpdateData)
        setEdititem(null)
        setInputValue({
            Work: ""
        })
    }

    
    return (
        <>
            <h2 className='text-center mt-2'>ToDo LIst</h2><br />
            <div className='box'>

                <input type="text" value={inputValue.Work} placeholder='Enter Your Work.....' onChange={(e) => setInputValue({ ...inputValue, Work: e.target.value })} /><br /><br />
                {
                    edititem === null ? <button className='more' onClick={() => handleSaveData()}>AddData</button> :
                        <button className='more' onClick={() => handleChange()}>SaveChange</button>
                }
            </div>
            <hr />

            <h3 className='text-center'>ToDo List</h3>
            {
                <table className='text-center'>
                    <tr className='border-1'>
                        <th className='border-1'>No</th>
                        <th className='border-1'>Work</th>
                        <th className='border-1'>Action</th>
                    </tr>
                    {
                        items.map((item, index) => {
                            return (
                                <>
                                    <tbody key={index}>
                                        <tr className='border-1'>
                                            <td className='border-1'>{index + 1}</td>
                                            <td className='border-1'>{item.Work}</td>
                                            <td className='border-1'>
                                                <button className='new' onClick={() => hadleEdit(index)}><i class="bi bi-pencil-square"></i></button>
                                                <button className='new' onClick={() => handleDelete(index)}><i class="bi bi-trash"></i></button>
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
