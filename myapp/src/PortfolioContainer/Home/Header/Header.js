import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <span>MYSELF</span>
        </div>
        <div className="header-options">
          <div className="header-separator">
            <a href="#">Home</a>
            <a href="#">AboutMe</a>
            <a href="#">Resume</a>
            <a href="#">ContactMe</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
