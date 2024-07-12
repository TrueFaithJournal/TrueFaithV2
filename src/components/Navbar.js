import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import {ReactComponent as Logo } from '/public/images/TrueFaithLogo.jpg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <div>
              <Logo />
            </div> */}
            { <img src="images/TrueFaithIcon.png"></img>}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/our-mission"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Mission
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/previous-entries"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Previous Entries
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/new-entry"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                New Journal Entries
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ask-an-apostle"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ask An Apostle
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Get Started
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
