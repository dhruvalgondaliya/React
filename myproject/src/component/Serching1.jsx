import React, { useState } from 'react'

export default function Serching() {
    const [allData] = useState(["Creata", "Alto 800", "Kia","Mercidec", "Fortuner", "Inova", "Gt Mustang", "Lamborghini", "Jaguar"])
    const [list, setList] = useState(allData);
    const [val, setVal] = useState("")

    const handleserch = (e) => {
        setVal(e.target.value)
        if (e.target.value) {
            let result = allData.filter((item => item.toLowerCase().includes(e.target.value.toLowerCase())))
            setList(result);
        }
        else {
            setList(allData)
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
