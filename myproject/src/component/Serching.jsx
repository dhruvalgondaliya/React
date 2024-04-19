import React, { useState } from 'react'

export default function Serching() {
    const [list, setList] = useState(["Creata", "Alto 800", "Kia", "Fortuner", "Inova", "Gt Mustang", "Lamborghini", "Jaguar"]);
    const [val, setVal] = useState("")

    const handleserch = (e) => {
        setVal(e.target.value)
        if (e.target.value) {
            let result = list.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()))
            setList(result)
        }
        else {
            setList(["Creata", "Alto 800", "Kia", "Fortuner", "Inova", "Gt Mustang", "Lamborghini", "Jaguar"])
        }

    }

    return (
        <>
            <input value={val} onChange={(e) => handleserch(e)} />

            {
                list.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </>
    )
}
