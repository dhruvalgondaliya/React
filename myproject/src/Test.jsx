import React, { useEffect, useState } from 'react';

export default function Test() {
    const [items, setItems] = useState(() => {
        const storedData = localStorage.getItem("formData")
        return storedData ? JSON.parse(storedData) : [];
    });
    const [inputValue, setInputValue] = useState({
        name: '',
        password: ''
    });
    const [editItem, setEditItem] = useState(null);

    const [searchData, setSearchData] = useState("")

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(items))
    })

    const handleAddData = () => {
        setItems([...items, inputValue]);
        setInputValue({ name: '', password: '' });
    };

    const handleDelete = (index) => {
        const updatedData = [...items];
        updatedData.splice(index, 1);
        setItems(updatedData);
    };

    const handleEdit = (index) => {
        setEditItem(index);
        setInputValue(items[index]);
    };

    const handleSaveData = () => {
        const updatedData = [...items];
        updatedData[editItem] = inputValue;
        setItems(updatedData);
        setEditItem(null);
        setInputValue({ name: '', password: '' });
    };

    const handleSerch = (e) => {
        setSearchData(e.target.value);
    }
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchData.toLowerCase()) ||
        item.password.toLowerCase().includes(searchData.toLowerCase())
    );

    return (
        <>
            <input type="text" value={inputValue.name} placeholder='Enter Name' onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
            <br /><br />
            <input type="password" value={inputValue.password} placeholder='Enter Password' onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
            <br /><br />
            {
                editItem === null ?
                    <button onClick={() => handleAddData()}>Add Data</button> :
                    <button onClick={() => handleSaveData()}>Save Change</button>
            }
            <hr />

            <table className='border' id="Table_new">
                <thead>
                    <tr>
                    <th className='border'><input className='mx-2 my-3' value={searchData} type="text" placeholder='Search Data....' onChange={handleSerch} /></th>

                    </tr>
                </thead>
                <tr className='border'>
                    <th className='border'>NO</th>
                    <th className='border'>Name</th>
                    <th className='border'>Password</th>
                    <th className='border'>Action</th>
                </tr>

                <tbody>
                    {
                        filteredItems.map((item, index) => (
                            <tr key={index} className='border'>
                                <td className='border'>{index + 1}</td>
                                <td className='border'>{item.name}</td>
                                <td className='border'>{item.password}</td>
                                <td className='border'>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
