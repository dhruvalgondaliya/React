import React from 'react'
import { useContext } from 'react'
import { data, data1 } from '../App'

export default function ChildC() {

        const name=useContext(data)
        const age=useContext(data1)


    return (
        <div>
            <h2>Child C</h2>
            <h3>my Name is {name} and age is {age}</h3>
        </div>
    )
}
