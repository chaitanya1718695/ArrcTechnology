import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/color.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../assets/CSS/Navbaar.css";

function Navbaar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img className="logoimg" src={logoImage} alt="Logo" />

        <button 
          className="navbar-toggler" 
          type="button" 
          aria-controls="navbarSupportedContent" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation" 
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="hamburger" />
        </button>

        <div 
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} 
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto"> 
          <li className="nav-item">
              <Link className="nav-link" to="/DemoHome"><b>DEMOHOME</b></Link>
            </li>

            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                
                <Link className="softsolu" to="/softwaresolutions"><b>SOFTWARE SOLUTIONS</b></Link>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/webdev"><b>Website Development</b></Link>
                <Link className="dropdown-item" to="/appdev"><b>App Development</b></Link>
                <Link className="dropdown-item" to="/ecommerce"><b>E-Commerce Solutions</b></Link>
                <Link className="dropdown-item" to="/seosem"><b>SEO/SEM SOLUTIONS</b></Link>
                <Link className="dropdown-item" to="/digitalmarketing"><b>DIGITAL MARKETING</b></Link>
                <Link className="dropdown-item" to="/softdev"><b>SOFTWARE DEVELOPMENT</b></Link>
              </div>
            </li>
         
            <li className="nav-item">
              <Link className="nav-link" to="/Service"><b>SERVICES</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Recruitment"><b>RECRUITMENT</b></Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/Cybersecurity"><b>CYBER SECURITY</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dummy"><b>DUMMY</b></Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs"><b>CONTACT US</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbaar;
