import React, { useEffect, useState } from 'react'

export default function Crud() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("itemData")
    return storedData ? JSON.parse(storedData) : []

  })
  const [inputvalue, setInputValue] = useState({
    name: "",
    password: ""
  })
  const [editItem, setEditItem] = useState(null)

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(items));
  })

  const handleAddData = () => {

    if (inputvalue.name === "") {
      alert("Please Enter Name")

    } else if (inputvalue.password == "") {
      alert("Please Enter Password")
    } else {
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

  // Edite Value
  const handleEdit = (index) => {
    setEditItem(index)
    setInputValue(items[index])
  }

  // button change 
  const handleSaveItem = () => {
    const updateData = [...items]
    updateData[editItem] = inputvalue

    setItems(updateData);
    setEditItem(null)
    // input clear 
    setInputValue({
      name: "",
      password: ""
    })
  }

  return (
    <>
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
          <table className='border'>
            <thead>
              <tr>
                <th className='border'>No</th>
                <th className='border'>Name</th>
                <th className='border'>Password</th>
                <th className='border'>Action</th>
              </tr>
            </thead>


            {
              items.map((item, index) => {
                return (
                  <>
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

                  </>
                )
              })
            }

          </table>
      }
    </>
  )
}
