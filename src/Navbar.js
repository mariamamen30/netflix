import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const navTransparency = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navTransparency);
    return () => window.removeEventListener("scroll", navTransparency);
  });
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Navbar;
<div className="navbar"></div>;
