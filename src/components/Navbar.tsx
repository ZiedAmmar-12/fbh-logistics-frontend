import React from "react";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <h2>Overview</h2>
      <input type="text" placeholder="Search for something" />
    </header>
  );
};

export default Navbar;
