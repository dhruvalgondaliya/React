import React from 'react'
// import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'


export default function About() {
    const navigate = useNavigate()
    const gotoHome = () => {
        navigate('/')
    }

    return (
        <>
            <div className='text-center'>
                <h1>I am Contact Page</h1>
                {/* first method */}
                {/* <Link to="/Contact">Go To Contact Page</Link> */}

                {/* second method */}
                <button onClick={gotoHome}>GO TO HOME PAGE</button>
            </div>
        </>
    )
}
