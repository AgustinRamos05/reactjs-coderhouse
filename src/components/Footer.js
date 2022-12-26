import React from "react";
import Nav from "./Navbar";

const Footer = () => {
  return (
    <footer className="footer">
      <Nav 
      isHeader={false}
      hrefFacebook = "https://www.facebook.com/"
      hrefTwitter = "https://twitter.com/?lang=es"
      hrefInstagram = "https://www.instagram.com/"
       />
      <p className="footer__copyright">Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
