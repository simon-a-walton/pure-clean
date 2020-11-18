import React from "react";
import Logo from "../images/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { css, select } from "glamor";
import RainModal from "../components/RainModal";
import NavTitles from "../data/navTitles";

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
  lineHeight: "27px",
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
        <Nav {...navMargin}>
          {NavTitles.map((nav, index) => (
            <Nav.Link href={nav.link} className={ pathname === nav.link ? "active" : "" }>{nav.name}</Nav.Link>
          ))}
          <Nav.Link
            onClick={() => setModalShow(true)} {...rainStyle}>
              Rain Guarantee &nbsp;
                <span {...css({ verticalAlign: "text-bottom", fontSize: "0.6em" })}>
                  <i className="fas fa-umbrella" />
                </span>
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


