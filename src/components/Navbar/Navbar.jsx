import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? "✖" : "☰"}
            </button>
        </nav>
  )
}

export default Navbar
