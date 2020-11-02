import React from "react";
import Logo from "../images/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { css, select } from "glamor";

const navStyle = css({
  fontFamily: 'Bebas Neue',
  fontSize: 'calc(12px + 1.05vw)',
});

const navMargin = select('& a', {
  margin: '0 16px',
  '@media(max-width: 992px)': {
  margin: 0
    }
})

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img src={Logo} alt="PureClean Logo" width={180} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`mr-auto ${navStyle} ${navMargin}`}>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/methods">Methods</Nav.Link>
          <Nav.Link href="/wfp">WFP</Nav.Link>
          <Nav.Link href="/contact">Contact US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
