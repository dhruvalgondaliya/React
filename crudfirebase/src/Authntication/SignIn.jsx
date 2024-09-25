import React, { useState } from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase'

const auth = getAuth(app)
export default function SignIn() {

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const SignIn = () => {
        signInWithEmailAndPassword(auth,email,Password).then((value)=>alert("SignIn Success")).catch((err)=>console.log(err)) 
        
    }

    return (
        <div>
            <h1>Sign In</h1>
            <input type="email" placeholder='Enter Your Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <br /><br />
            <input type="Password" placeholder='Enter Your Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button onClick={SignIn}>Sign In</button>
        </div>
    )
}