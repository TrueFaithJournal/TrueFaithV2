import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import "./NavDrop.js";
import WhyTF from './WhyTF.js';
import './WhyTF.css';
import './Navbar.js';
// import OurMission from "./pages/ourMission.js";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li className="wtf-item">
              <Link
                to="/Our-Mission"
                className="nav-links"
                // onClick={closeMobileMenu}
              >
              </Link>
              Our Mission
            </li>
        <li>Testimonials</li>
        <li className="aaa-item">
              <Link
                to="/ask-an-apostle"
                className="nav-links"
                // onClick={closeMobileMenu}
              >
              </Link>
              Ask an Apostle</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;