import React, { useEffect, useState } from 'react'
import '../App.css'

export default function Crud() {
    const [items, setItems] = useState(() => {
        const storedData = localStorage.getItem("itemData")
        return storedData ? JSON.parse(storedData) : []
    });
    const [inputvalue, setInputValue] = useState({
        name: "",
        password: ""
    });
    const [editItem, setEditItem] = useState(null);
    const [searchData, setSearchData] = useState("");
    const [sort, setSort] = useState(null);

    useEffect(() => {
        localStorage.setItem("itemData", JSON.stringify(items));
    });

    const handleAddData = () => {
        if (inputvalue.name === "") {
            alert("Please Enter Name")
        } else if (inputvalue.password === "") {
            alert("Please Enter Password")
        } else {
            setItems([...items, inputvalue]);
            setInputValue({
                name: "",
                password: ""
            });
            setEditItem(null);
        }
    };

    const handleDelete = (index) => {
        const updateData = [...items];
        updateData.splice(index, 1);
        setItems(updateData);
    };

    const handleEdit = (index) => {
        setEditItem(index);
        setInputValue(items[index]);
    };

    const handleSaveItem = () => {
        const updateData = [...items];
        updateData[editItem] = inputvalue;
        setItems(updateData);
        setEditItem(null);
        setInputValue({
            name: "",
            password: ""
        });
    };

    const handleSearch = (e) => {
        setSearchData(e.target.value);
    };

    const handleSort = (field) => {
        setSort(field);
    };

    const sortedData = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items;

    const filterData = sortedData.filter((item) => {
        return item.name.toLowerCase().includes(searchData.toLowerCase()) ||
            item.password.toLowerCase().includes(searchData.toLowerCase());
    });

    return (
        <>
            <h2 className='text-center'>localStorage Data</h2>
            <div id='box'>
                <input type="text" placeholder='Enter Your Name' value={inputvalue.name} onChange={(e) => setInputValue({ ...inputvalue, name: e.target.value })} id='text' />
                <br /><br />
                <input type="password" placeholder='Enter Password' value={inputvalue.password} onChange={(e) => setInputValue({ ...inputvalue, password: e.target.value })} id='text' />
                <br /><br />
                {
                    editItem === null ?
                        <button onClick={() => handleAddData()} id='btn-login'>Login</button>
                        :
                        <button onClick={() => handleSaveItem()} id='btn-login'>Save button</button>
                }
            </div>
            <br /><br />

            {
                items.length == 0 ? "" :
                    <table className='border text-center'>
                        <header className='my-2 mx-2'>
                            <tr>
                                <input type="text" value={searchData} placeholder='Serch Data...' onChange={(e) => handleSearch(e)} />
                            </tr>
                        </header>
                        <tr>
                            <th className='border'>No</th>
                            <th className='border'>Name <button onClick={() => handleSort("name")}>&uarr;</button></th>
                            <th className='border'>Password <button onClick={() => handleSort("password")} >&darr;</button></th>
                            <th className='border'>Action</th>
                        </tr>

                        {
                            filterData.map((item, index) => {
                                return (
                                    <tbody key={index} >
                                        <tr>
                                            <td className='border'>{index + 1}</td>
                                            <td className='border'>{item.name}</td>
                                            <td className='border'>{item.password}</td>
                                            <td className='border'>
                                                <button className='btn border me-2' onClick={() => handleEdit(index)}>Edit</button>
                                                <button className='btn border ' onClick={() => handleDelete(index)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        }
                    </table>
            }
        </>
    );
}


// sessionstorage

// import React, { useEffect, useState } from 'react'
// import '../App.css'

// export default function Crud() {
//     const [items, setItems] = useState(() => {
//         const storedData = sessionStorage.getItem("itemData")
//         return storedData ? JSON.parse(storedData) : []
//     });
//     const [inputvalue, setInputValue] = useState({
//         name: "",
//         password: ""
//     });
//     const [editItem, setEditItem] = useState(null);
//     const [searchData, setSearchData] = useState("");
//     const [sort, setSort] = useState(null);

//     useEffect(() => {
//         sessionStorage.setItem("itemData", JSON.stringify(items));
//     });

//     const handleAddData = () => {
//         if (inputvalue.name === "") {
//             alert("Please Enter Name")
//         } else if (inputvalue.password === "") {
//             alert("Please Enter Password")
//         } else {
//             setItems([...items, inputvalue]);
//             setInputValue({
//                 name: "",
//                 password: ""
//             });
//             setEditItem(null);
//         }
//     };

//     const handleDelete = (index) => {
//         const updateData = [...items];
//         updateData.splice(index, 1);
//         setItems(updateData);
//     };

//     const handleEdit = (index) => {
//         setEditItem(index);
//         setInputValue(items[index]);
//     };

//     const handleSaveItem = () => {
//         const updateData = [...items];
//         updateData[editItem] = inputvalue;
//         setItems(updateData);
//         setEditItem(null);
//         setInputValue({
//             name: "",
//             password: ""
//         });
//     };

//     const handleSearch = (e) => {
//         setSearchData(e.target.value);
//     };

//     const handleSort = (field) => {
//         setSort(field);
//     };

//     const sortedData = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items;

//     const filterData = sortedData.filter((item) => {
//         return item.name.toLowerCase().includes(searchData.toLowerCase()) ||
//             item.password.toLowerCase().includes(searchData.toLowerCase());
//     });

//     return (
//         <>
//             <h2 className='text-center'>sessionStorage Data</h2>
//             <div id='box'>
//                 <input type="text" placeholder='Enter Your Name' value={inputvalue.name} onChange={(e) => setInputValue({ ...inputvalue, name: e.target.value })} id='text' />
//                 <br /><br />
//                 <input type="password" placeholder='Enter Password' value={inputvalue.password} onChange={(e) => setInputValue({ ...inputvalue, password: e.target.value })} id='text' />
//                 <br /><br />
//                 {
//                     editItem === null ?
//                         <button onClick={() => handleAddData()} id='btn-login'>Login</button>
//                         :
//                         <button onClick={() => handleSaveItem()} id='btn-login'>Save button</button>
//                 }
//             </div>
//             <br /><br />

//             {
//                 items.length == 0 ? "" :
//                     <table className='border text-center'>
//                         <header className='my-2 mx-2'>
//                             <tr>
//                                 <input type="text" value={searchData} placeholder='Serch Data...' onChange={(e) => handleSearch(e)} />
//                             </tr>
//                         </header>
//                         <tr>
//                             <th className='border'>No</th>
//                             <th className='border'>Name <button onClick={() => handleSort("name")}>&uarr;</button></th>
//                             <th className='border'>Password <button onClick={() => handleSort("password")} >&uarr;</button></th>
//                             <th className='border'>Action</th>
//                         </tr>

//                         {
//                             filterData.map((item, index) => {
//                                 return (
//                                     <tbody key={index} >
//                                         <tr>
//                                             <td className='border'>{index + 1}</td>
//                                             <td className='border'>{item.name}</td>
//                                             <td className='border'>{item.password}</td>
//                                             <td className='border'>
//                                                 <button className='btn border me-2' onClick={() => handleEdit(index)}>Edit</button>
//                                                 <button className='btn border ' onClick={() => handleDelete(index)}>Delete</button></td>
//                                         </tr>
//                                     </tbody>
//                                 );
//                             })
//                         }
//                     </table>
//             }
//         </>
//     );
// }
