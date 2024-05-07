import React, { useEffect, useState } from 'react'
import './extra.css'

export default function Practice() {

    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("formData")
        // const localData = sessionStorage.getItem("formData") 
        return localData ? JSON.parse(localData) : []
    })
    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    })
    const [editItem, setEditItem] = useState(null)
    const [searchData, setSearchData] = useState("")
    const [sort, setSort] = useState(null)

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(items))
        // sessionStorage.setItem("formData", JSON.stringify(items))

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

    const handleSerch = (e) => {
        setSearchData(e.target.value)
    }

    const handleSort = (field) => {
        setSort(field)
    }

    const sortedData = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items;

    const filterData = sortedData.filter((item) => {
        return item.name.toLowerCase().includes(searchData.toLowerCase()) ||
            item.password.toLowerCase().includes(searchData.toLowerCase());
    })

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

            <h5 className='text-center mt-4'>Data Table</h5>

            {

                <table>
                    <thead className='Serch '>
                        <input type="text" value={searchData} placeholder='Search Your Data....' onChange={(e) => handleSerch(e)} className='m-2' />
                        <button className='sort' onClick={() => handleSort("name")}>&uarr;</button>
                        <button className='sort' onClick={() => handleSort("password")}>&darr;</button>

                    </thead>
                    <tr className='Serch'>
                        <th className='Serch'>No</th>
                        <th className='Serch'>Name</th>
                        <th className='Serch'>Password</th>
                        <th className='Serch'>Action</th>
                    </tr>
                    {
                        filterData.map((item, index) => {
                            return (
                                <>
                                    <tbody key={index} >
                                        <tr className='Serch'>
                                            <td className='Serch'>{index + 1}</td>
                                            <td className='Serch'>{item.name}</td>
                                            <td className='Serch'>{item.password}</td>
                                            <td className='Serch'>
                                                <button className='me-2' onClick={() => handleEdit(index)}>Edit</button>
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
