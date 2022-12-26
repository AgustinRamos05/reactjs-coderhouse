import React from "react";
import CartWidget from "./CartWidget";

const Nav = (props) => {
  if (props.isHeader) {
    return (
      <nav className="header__nav">
        <a href="#" className="header__link">
          About us
        </a>
        <a href="#" className="header__link">
          Log in
        </a>
        <a href="#" className="header__link header__cart" >
          <CartWidget/>
        </a>
      </nav>
    );
  } else {
    return (
      <div className="footer__nav">
        <a href={props.hrefFacebook} className="footer__link">
          Facebook
        </a>
        <a href={props.hrefTwitter} className="footer__link">
          Twitter
        </a>
        <a href={props.hrefInstagram} className="footer__link">
          Instagram
        </a>
      </div>
    );
  }
};

export default Nav;
