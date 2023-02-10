import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const Nav = (props) => {

  const {isHeader,hrefFacebook,hrefTwitter,hrefInstagram } = props

  if (isHeader) {
    return (
      <nav className="header__nav">
        <Link to="/category/iphone" className="header__link">
          Iphone
        </Link>
        <Link to="/category/ipad" className="header__link">
          Ipad
        </Link>
        <Link to="/cart" className="header__link header__cart" >
          <CartWidget/>
        </Link>
      </nav>
    );
  } else {
    return (
      <div className="footer__nav">
        <a href={hrefFacebook} className="footer__link">
          Facebook
        </a>
        <a href={hrefTwitter} className="footer__link">
          Twitter
        </a>
        <a href={hrefInstagram} className="footer__link">
          Instagram
        </a>
      </div>
    );
  }
};

export default Nav;
