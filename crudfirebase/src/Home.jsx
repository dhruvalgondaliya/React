import React from 'react'

export default function Home(props  ) {

    const LogOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Your Email{props.email}</h2>
            <button onClick={LogOut}>LogOut</button>
        </div>
    )
}
