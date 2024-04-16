import React from 'react'
// import { Link } from 'react-router-dom'

import { Navigate, useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()

    const gotoabout = () => {
        navigate('/about')
    }

    return (
        <>
            <div className='text-center'>
                <h1>I am Home Page</h1>
                {/* two type to page link 
                1.First link tag
                2.onClick use to navigate hook
                */}

                {/* <Link to="/about">Go To About Page</Link> */}

                <button onClick={gotoabout}>GO TO ABOUT PAGE</button>
            </div>
        </>
    )
}
