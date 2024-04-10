import React, { useState } from 'react'

export default function Crud() {

  const [items, setItems] = useState([])
  const [inputvalue, setInputValue] = useState({
    name: "",
    password: ""
  })
  const [editItem, setEditItem] = useState(null)

  const handleAddData = () => {
    setItems([...items, inputvalue])
    setInputValue({
      name: "",
      password: ""
    })
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
      <table>
        <thead>
          <tr>
            <th>No</th>
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
                  <tr>
                    <td >{index + 1}</td>
                    <td >{item.name}</td>
                    <td>{item.password}</td>
                    <td>
                      <button id='btn-login' onClick={() => handleEdit(index)}>Edit</button>--
                      <button id='btn-login' onClick={() => handleDelete(index)}>Delete</button></td>
                  </tr>
                </tbody>

              </>
            )
          })
        }

      </table>

    </>
  )
}
