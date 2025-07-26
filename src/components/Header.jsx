import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">ASTMKSD</div>
      <ul className="header-links">
        <li>HOME</li>
        <li>BLOCKCHAIN</li>
        <li>ARTIFICIAL INTELLIGENCE</li>
        <li>INSIGHTS</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Header;
