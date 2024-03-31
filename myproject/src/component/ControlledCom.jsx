// import React, { Component } from 'react'

// export default class ControlledCom extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             email: "",
//         }
//     }

//     handleForm = (e) => {
//         e.preventDefault();
//         console.log(this.state.name);
//         console.log(this.state.email);
//     }

//     render() {
//         return (
//             <>
//                 <br /><br />
//                 <form action="" onSubmit={(e) => this.handleForm(e)}>
//                     <input type="text" placeholder='Enter Your name' onChange={(e) => this.setState({ name: e.target.value })} />
//                     <br /><br />
//                     <input type="email" placeholder='Enter your email' onChange={(e) => this.setState({ email: e.target.value })} />
//                     <br /><br />
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }
// }

import React, { useState } from 'react'

export default function ControlledCom() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email)
    }

    return (
        <>
            <br /><br />
            <form action="" onSubmit={handleForm}>
                <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="emial" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}
