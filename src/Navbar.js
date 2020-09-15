import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from './image/logo.jpg'

console.log(logo)

function Navbar() {
    return (
        <nav className='navbar'>
            <Link className="navbar-link" to="/">
                <img className="navbar-logo" src={logo} alt="logo"/>
            </Link>
            <div className='navbar-adress'>
                <Link className="navbar-link" to="/">
                    Home
                </Link>
                <Link className="navbar-link" to="/about">
                    About
                </Link>
                <Link className="navbar-link" to="/menu">
                    Menu
                </Link>
                <Link className="navbar-link" to="/contact">
                    Contact
                </Link>
            </div>
            <div className='navbar-signin'>
            <Link className="navbar-link" to="/admin">
                <button className= 'navbar-button' >Sign In</button>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar
