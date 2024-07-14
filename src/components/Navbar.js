import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import "./NavDrop.js";
import WhyTF from './WhyTF.js';
import './WhyTF.css';

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
          <div className="navbar-logo-container">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                className="navbar-logo"
                src="images/TrueFaithLogoWide.jpg"
                alt="nav bar logo"
              ></img>
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <WhyTF />
              <Link
                to="/"
                className="nav-links"
                onClick={<WhyTF />}
              >
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
                Login
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
          {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}  */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
