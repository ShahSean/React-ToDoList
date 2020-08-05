import React from 'react'
import "./NavBar.css"


export default function NavBar() {
    return (
        <div id="nav-container">
        <button>Search</button>
        <input size="30" type="text" placeholder="Enter your task here !"/>
        <button>add</button>
        </div>
    )
}

