import React from "react";
import Logo from "../images/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { css, select } from "glamor";
import RainModal from "../components/RainModal";

const navStyle = css({
  fontFamily: "Bebas Neue",
  fontSize: "calc(12px + 1.05vw)",
  backgroundColor: "white"
});

const navMargin = select("& a", {
  margin: "0 16px",
  "@media(max-width: 992px)": {
  margin: 0
    }
});

const rainStyle = css({
  fontSize: "0.6em",
  lineHeight: "38px",
  padding: "8px 0",
  "@media(max-width: 992px)": {
    lineHeight: "20px",
  }
});

const Navigation = () => {
  const pathname = window.location.pathname;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" {...navStyle}>
      <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="PureClean Logo"
          width={180}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`mr-auto ${navMargin}`}>
          {pathname === "/about" ? <Nav.Link href="/about" className="active">About</Nav.Link> : <Nav.Link href="/about">About</Nav.Link>}
          {pathname === "/services" ? <Nav.Link href="/services" className="active">Services</Nav.Link> : <Nav.Link href="/services">Services</Nav.Link>}
          {pathname === "/methods" ? <Nav.Link href="/methods" className="active">Methods</Nav.Link> : <Nav.Link href="/methods">Methods</Nav.Link>}
          {pathname === "/contact" ? <Nav.Link href="/contact" className="active">Contact Us</Nav.Link> : <Nav.Link href="/contact">Contact Us</Nav.Link>}
          <Nav.Link
            onClick={() => setModalShow(true)} {...rainStyle}>
              <i className="fas fa-umbrella" />
              &nbsp; Rain Guarantee
          </Nav.Link>
        </Nav>
        <RainModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;


