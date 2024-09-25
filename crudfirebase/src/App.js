// import { useEffect, useState } from 'react';
// import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
// import database from './firebase';
// import './App.css';

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [subscribe, setSubscribe] = useState(false);
//   const [val, setVal] = useState([]);
//   const [id, setId] = useState("")
//   const [show, setShow] = useState(false)

//   const value = collection(database, "UserData");

//   useEffect(() => {
//     const getData = async () => {
//       const querySnapshot = await getDocs(value);
//       const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setVal(documents);
//     }
//     getData();
//   }, [value]);

//   const handleSaveData = async (e) => {
//     e.preventDefault();
//     await addDoc(value, { name: name, email: email, gender: gender, subscribe: subscribe });
//     setName("");
//     setEmail("");
//     setGender("");
//     setSubscribe(false);
//     setId("");
//     setShow(false);
//   }

//   const handleDelete = async (id) => {
//     const deletVal = doc(database, "UserData", id);
//     await deleteDoc(deletVal);
//   }

//   const handleEditData = (id, name, email, gender, subscribe) => {
//     setId(id);
//     setName(name);
//     setEmail(email);
//     setGender(gender);
//     setSubscribe(subscribe);
//     setShow(true)
//   }

//   const handleUpdate = async () => {
//     const updateVal = doc(database, "UserData", id);
//     await updateDoc(updateVal, { name: name, email: email, gender: gender, subscribe: subscribe });
//     setId("");
//     setName("");
//     setEmail("");
//     setGender("");
//     setSubscribe(false);
//     setShow(false)
//   }

//   return (
//     <>
//       <form class="form-container">
//           <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
//           <br /><br />
//           <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           <br /><br />
//           <input type="radio" id="male" name="gender" value="male" checked={gender === "male"} onChange={() => setGender("male")} />
//           <label htmlFor="male">Male</label>
//           <input type="radio" id="female" name="gender" value="female" checked={gender === "female"} onChange={() => setGender("female")} />
//           <label htmlFor="female">Female</label>
//           <br /><br />
//           <input type="checkbox" id="subscribe" name="subscription" checked={subscribe} onChange={() => setSubscribe(!subscribe)} />
//           <label htmlFor="subscribe">Subscribe to Newsletter</label>
//           <br /><br />
//           {
//             !show ?
//               <button className='new-btn' onClick={handleSaveData}>Submit</button> :
//               <button className='new-btn' onClick={handleUpdate}>Save Change</button>
//           }
//         </form>

//         <table border={2} cellPadding="10">
//           <thead>
//             <tr>
//               <th>Sr No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Subscribe</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               val.map((item, index) => (
//                 <tr key={item.id}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.subscribe ? 'Yes' : 'No'}</td>
//                   <td>
//                     <button className='new-btn' onClick={() => handleEditData(item.id, item.name, item.email, item.gender, item.subscribe)}>Edit</button>
//                     <button className='new-btn' onClick={() => handleDelete(item.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>

//       {/* <SignUp /> */}

//     </>
//   );
// }
// export default App;

// google Authantication
// import React, { useEffect, useState } from 'react'
// import './App.css'
// import SignUp from './Authntication/SignUp'
// import Signin from './Authntication/SignIn'
// import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth'
// import app from './firebase'
// const auth = getAuth(app)

// function App() {
//   const [user, setUser] = useState(null)
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user)
//         setUser(user)
//       } else {
//         setUser(null)
//       }
//     })
//   }, [user])

//   if (user === null) {
//     return (<>
//       <SignUp />
//       <Signin />
//     </>)
//   }
//   return (
//     <>
//       <h1>Hello{user.email}</h1>
//       <button onClick={() => signOut(auth)}>LogOut</button>
//     </>
//   )
// }
// export default App;


// google Authantication
import React, { useEffect, useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from './firebase'

import Home from './Home'
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function App() {
  const [value, setValue] = useState("")

  const handleClick=()=>{
    signInWithPopup(auth,googleProvider)
    .then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("Email",data.user.email)
    })
    .catch((err)=>console.log(err));
  }

  useEffect (()=>{
    setValue(localStorage.getItem("email"));
  },[])

  return (
    <>
      {value ? (<Home email={value}/>) :
        (<button onClick={handleClick}>SingInWithGoogle</button>)
      }


    </>
  )
}
