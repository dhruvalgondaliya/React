import { useState } from "react";
import { useDispatch } from "react-redux"
import { ADD } from "./Action";


function Input() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(ADD(input))
        e.target.reset()
    }


    return (
        <div>
            <h2 className="text-center">Input</h2>
            <div className="box">
                <form onSubmit={handleForm}>
                    <input type="text" placeholder="Enter TODO....." onChange={(e) => setInput(e.target.value)} />
                    <br /><br />

                    <button className="add">ADD TODO</button>
                </form>
            </div>
        </div>

    )
}

export default Input