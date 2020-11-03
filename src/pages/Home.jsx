import React from "react";
import Header from "../images/header.jpg";
import { Jumbotron } from "react-bootstrap";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

const jumboStyle = css({
  backgroundImage: `url(${Header})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '75vh',
  width: '100%',
  marginBottom: '0',
  '@media(max-width: 650px)': {
  }
});

const jumboText = css({
  textAlign: 'center',
  color: 'white',
  margin: 'auto',
  maxWidth: '50%',
  fontSize: 'calc(20px + 2vw)',
  paddingTop: 'calc(20px + 3vw)',
  '@media(max-width: 650px)': {
  maxWidth: '80%'
    }
});

const buttonStyle = css({
  backgroundColor: colors.darkBlue,
  padding: '12px 18px',
  borderRadius: '8px',
  textDecoration: 'none',
  color: 'white',
  ':hover': {
    backgroundColor: colors.lightBlue,
    textDecoration: 'none',
    color: 'black'
  }
});


function Home() {
  return (
    <div className="home">
      <Jumbotron {...jumboStyle}>
        <h1 {...jumboText}>
          Residential and commercial professional window cleaning service based in Rustington, West Sussex.
        </h1>
        <h5 className="d-flex justify-content-center pt-3">
          <a href="/contact" {...buttonStyle}>
            Get a Quote!
          </a>
        </h5>
      </Jumbotron>
    </div>
  );
}

export default Home;


