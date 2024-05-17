import { useState } from "react";
import {useDispatch} from "react-redux"
import { ADD } from "./Action";


function Input() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const handleForm = (e) =>{
        e.preventDefault()
        dispatch(ADD(input))
        e.target.reset()
    }

        
    return (
        <div>
            <h1>Input</h1>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter TODO" onChange={(e)=>setInput(e.target.value)}/>

                <br />
                <button >ADD TODO</button>
            </form>
        </div>

    )
}

export default Input