import React from "react";
import Nav from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">IphoneShop</h1>
      <Nav isHeader={true} />
    </header>
  );
};

export default Header;
