import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= "navs">
        <nav className = "left-nav">
            <NavLink exact  activeClassName = "active" to  = "/">Home</NavLink>
            <NavLink exact  activeClassName = "active" to  = "/GettingStarted">Getting Started</NavLink>
            <NavLink exact  activeClassName = "active" to  = "/Components">Components</NavLink>
           
        </nav>
        <nav className = "right-nav">
        <a href = "#about">About Us</a>
        </nav>
            
        </div>
    )
}

export default Navbar
