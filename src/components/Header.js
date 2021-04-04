import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const param = useLocation()

    return (
        
        <nav className="header">
            <ul>
                <li>
                    <span className={`${param.pathname === '/' ? "active" : "hide"}`}>Video</span>
                    <Link to="/">Video Games</Link>
                </li>
                <li>
                    <span className={`${param.pathname === '/contact' ? "active" : "hide"}`}>Contact</span>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
