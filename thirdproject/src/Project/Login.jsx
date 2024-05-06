import React from 'react';
import NavBar from './NavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {

  const [data, setData] = useState(() => {
    const USerData = sessionStorage.getItem("UserData")
    return USerData ? JSON.parse(USerData) : []
  })
  const [inputValue, setInputValue] = useState({
    name: "",
    password: ""

  })

  const LoginData = (e) => {
    e.preventDefault();
    let isLoggedIn = false;
    setData([...data, inputValue])

    setInputValue({
      name: "",
      password: ""
    })

    data.forEach((user) => {
      if (user.name === inputValue.name && user.password === inputValue.password) {
        isLoggedIn = true;
      }
    });

    if (isLoggedIn) {
      alert('Login  SUCCESSFULLY')
    } else {
      alert('Login  FAILED')
    }

  }

  return (
    <div>
      <NavBar />

      <form id='user-info' className='mt-5'>
        <h3>Login</h3>
        <input type="text" name="name" placeholder="Name" value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} /> <br /><br />
        <input type="password" name="password" placeholder="Password" value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} /><br /><br />
        <button className='css' onClick={(e) => LoginData(e)} >Login </button> <Link to="/SingUp" > <a href="#">Sign Up</a></Link>
      </form>

    </div>
  );
}