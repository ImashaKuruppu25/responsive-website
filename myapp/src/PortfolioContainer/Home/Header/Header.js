import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <BrowserRouter>
      <div className="header-container">
        <div className="header-parent">
          <div className="header-logo">
            <span>SELFHOOD</span>
          </div>
          <div className="header-options">
            <div className="header-separator">
              <Link to="#" className="mainNav">
                Home
              </Link>

              <Link to="#aboutMe" smooth>
                AboutMe
              </Link>
              <Link to="#Resume">Resume</Link>
              <Link to="#ContactMe">ContactMe</Link>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
