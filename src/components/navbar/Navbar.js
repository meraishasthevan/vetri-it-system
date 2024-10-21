import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../Vetri It Systems_files/logo.png';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <div className="nav-img">
                    <img src={logo} alt="Logo" />
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#" onClick={closeDropdown}>Vis process</Link>
            </li>
            <li className="nav-item dropdown">
                <span 
                    className="nav-link dropdown-toggle" 
                    style={{ cursor: "pointer" }} 
                    onClick={toggleDropdown}
                >
                    Digital Services
                </span>
                {dropdownOpen && (
                 <ul 
                 className="dropdown-menu show" 
                 onMouseLeave={handleMouseLeave}
             >
                 <li>
                     <Link className="dropdown-item" to="/development" onClick={closeDropdown}>
                         <i className="fas fa-globe"></i> Web Development
                     </Link>
                 </li>
                 <li>
                     <Link className="dropdown-item" to="#" onClick={closeDropdown}>
                         <i className="fas fa-code"></i> Software Development
                     </Link>
                 </li>
                 <li>
                     <Link className="dropdown-item" to="#" onClick={closeDropdown}>
                         <i className="fas fa-bullhorn"></i> Digital Marketing
                     </Link>
                 </li>
                 <li>
                     <Link className="dropdown-item" to="#" onClick={closeDropdown}>
                         <i className="fas fa-shopping-bag"></i> UI/UX Design
                     </Link>
                 </li>
                 <li>
                     <Link className="dropdown-item" to="#" onClick={closeDropdown}>
                         <i className="fas fa-bug"></i> Software Testing
                     </Link>
                 </li>
             </ul>
             
                )}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#" onClick={closeDropdown}>Treasure</Link>
            </li>
            <li>
                <Link className="nav-link" to="#">
                    <button className="nav-btn" onClick={closeDropdown}>Get a quote</button>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
