import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img className="" src="" alt="" />
      <div className="navbarLinks">
        <Link className="link" to="/">
          <h1>HomePage</h1>
        </Link>
        <Link className="link" to="/">
          <h1>Browser</h1>
        </Link>
        <Link className="link" to="/">
          <h1>Icons</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
