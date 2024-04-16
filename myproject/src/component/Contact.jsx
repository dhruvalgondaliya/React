import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
    // second method
    const navigate = useNavigate()
    const gotohomePage = () => {
        navigate('/')
    }

    return (
        <div>
            <div className='text-center'>
                <h1>I am Contact Page</h1>
                {/* two type to page link 
            1.First link tag
            2.onClick use to navigate hook
            */}

                {/* <Link to="/">Go To Home Page</Link> */}
                <button onClick={gotohomePage}>Go TO HOME PAGE</button>


            </div>
        </div>
    )
}
