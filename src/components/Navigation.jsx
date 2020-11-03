import React from "react";
import Logo from "../images/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { css, select } from "glamor";

const navStyle = css({
  fontFamily: 'Bebas Neue',
  fontSize: 'calc(12px + 1.05vw)',
  backgroundColor: 'white'
});

const navMargin = select('& a', {
  margin: '0 16px',
  '@media(max-width: 992px)': {
  margin: 0
    }
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  getClassName() {
    if (this.state.isActive) {
      return 'active';
    }
    return null;
  }

  handlePage = () => {
    const pathname = window.location.pathname;
    if (pathname === '/about') {
      this.setState({ isActive: true });
    } else {
      this.setState({ isActive: false });
    }
  };

  render() {
  return (
    <Navbar collapseOnSelect expand="lg" {...navStyle}>
      <Navbar.Brand href="/">
        <img src={Logo} alt="PureClean Logo" width={180} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`mr-auto ${navMargin}`}>
          <Nav.Link href="/about" className={this.getClassName()}>
            About
          </Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/methods">Methods</Nav.Link>
          <Nav.Link href="/wfp">WFP</Nav.Link>
          <Nav.Link href="/contact">Contact US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
   componentDidMount() {
    window.addEventListener('load', this.handlePage);
  }
}

export default Navigation;




