import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1>FELLOW</h1>
      <div className="footerBottom">
        <div className="footerNav">
          <Link className="footlink" to="/">
            HomePage
          </Link>
          <Link className="footlink" to="/shop">
            Shop
          </Link>
          <Link className="footlink" to="/about">
            AboutUs
          </Link>
        </div>
        <div className="footerDetails">
          <p>Fellow Clone</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
