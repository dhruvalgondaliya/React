// // import React, { Component, createRef } from 'react'
// // // this funnction use a CreateRef
// // export default class UncontrolledComp extends Component {
// //     constructor() {
// //         super();
// //         this.input = createRef();
// //         this.input1 = createRef();
// //     }

// //     handleForm = (event) => {
// //         event.preventDefault();
// //         console.log(this.input.current.value);
// //         console.log(this.input1.current.value);
// //     }

// //     render() {

// //         return (
// //             <>
// //                 <br />
// //                 <br />
// //                 <form action="" onSubmit={(event) => this.handleForm(event)}>
// //                     <input type="text" placeholder='Enter your name' ref={this.input} />
// //                     <br /><br />
// //                     <input type="emil" placeholder='Enter your Email' ref={this.input1} />
// //                     <br /><br />
// //                     <button>Submit</button>
// //                 </form>

// //             </>
// //         )
// //     }
// // }


// import React, { useRef } from 'react'


// // use the  useRef
// export default function UncontrolledComp() {
//     let input = useRef()
//     let input1 = useRef()

//     const handleForm = (event) => {
//         event.preventDefault();
//         console.log(input.current.value)
//         console.log(input1.current.value)

//         // input feld clear 
//         input.current.value = '';
//         input1.current.value = '';
//     }


//     return (
//         <>
//             <br /><br /> 
//             <form action="" onSubmit={handleForm}>
//                 <input type="text" placeholder='Enter your Name' ref={input} />
//                 <br /><br />
//                 <input type="email" placeholder='Enter your email' ref={input1} />
//                 <br /><br />
//                 <button>Submit</button>
//             </form>


//         </>
//     )
// }






