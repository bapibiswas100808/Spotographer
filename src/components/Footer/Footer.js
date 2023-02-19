import React from "react";
import Container from "react-bootstrap/esm/Container";
import Logo from "../Logo";
import "./Footer.css";
import LogoImage from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container>
        <Logo image={LogoImage} />
        <p>© 2022 Spotographer, All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
