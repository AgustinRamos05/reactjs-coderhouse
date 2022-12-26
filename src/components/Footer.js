import React from "react";
import Nav from "./Navbar";

const Facebook = "https://www.facebook.com/"
const Twitter = "https://twitter.com/?lang=es"
const Instagram = "https://www.instagram.com/"

const Footer = () => {
  return (
    <footer className="footer">
      <Nav 
      isHeader={false}
      hrefFacebook = {Facebook}
      hrefTwitter = {Twitter}
      hrefInstagram = {Instagram}
       />
      <p className="footer__copyright">Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
