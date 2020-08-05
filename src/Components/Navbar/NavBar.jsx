import React, { Component } from 'react'
import "./NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <div id="nav-container">
               <button>Search</button>
               <input size="30" type="text" placeholder="Enter your task here !"/>
               <button>add</button>
            </div>
        )
    }
}
