import React from "react";
import "./Footer.css";
import FooterBG from "../../../assets/Home/shape-bg.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={FooterBG} alt="no internet" />
      </div>
    </div>
  );
}

export default Footer;
