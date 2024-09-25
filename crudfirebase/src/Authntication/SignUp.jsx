// import React, { useState } from 'react'
// import app from '../firebase'
// import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// import {GoogleAuthProvider} from 'firebase/auth';
// const auth = getAuth(app)
// const googleProvider = new GoogleAuthProvider();

// export default function Signup() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const SignUp = () => {
//         createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Success")).catch((err) => console.log(err))
//     }

//     const SingUpWithGoogle = () => {
//         signInWithPopup(auth,googleProvider);
//     }
    
//     return (

//         <div>
//             <h1>Sign Up</h1>
//             <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//             <br /><br />
//             <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//             <br /><br />
//             <button onClick={SignUp}>Sign Up</button>
//             <button onClick={SingUpWithGoogle()}>SingUpWithGoogle</button>
//         </div>
//     )
// }


// google SinngUp 
import React, { useState } from 'react';
import app from '../firebase';
import { getAuth ,signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div>
            <h1>SignUp With Google</h1>
            <input 
                type="email" 
                placeholder='Enter your Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <br /><br />
            <input 
                type="password" 
                placeholder='Enter your Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <br /><br />
        
            <button onClick={SignUpWithGoogle}>Sign Up With Google</button>
        </div>
    );
}
