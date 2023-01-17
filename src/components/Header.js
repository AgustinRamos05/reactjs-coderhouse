import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__logo">Virtual Shop</h1>
      </Link>
      <Nav isHeader={true} />
    </header>
  );
};

export default Header;
