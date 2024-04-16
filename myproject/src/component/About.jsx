import React from 'react'
// import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'


export default function About() {

    const navigate = useNavigate()

    const gotoContactPage = () => {
        navigate('/Contact')
    }

    return (
        <>
            <div className='text-center'>
                <h1>I am About Page</h1>
                {/* first method */}
                {/* <Link to="/Contact">Go To Contact Page</Link> */}

                {/* second method */}
                <button onClick={gotoContactPage}>GO TO CONTACT PAGE</button>
            </div>
        </>
    )
}
