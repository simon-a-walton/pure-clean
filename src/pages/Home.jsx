import React from "react";
import Header from "../images/header.jpg";
import { Jumbotron } from "react-bootstrap";
import { css } from "glamor";
import Button from "../components/Button";

const jumboStyle = css({
  backgroundImage: `url(${Header})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "82vh",
  width: "100%",
  marginBottom: "0",
  "@media(max-width: 650px)": {
    height: "80vh"
  }
});

const jumboText = css({
  textAlign: "center",
  color: "white",
  margin: "auto",
  maxWidth: "50%",
  fontSize: "calc(20px + 2vw)",
  paddingTop: "calc(20px + 3vw)",
  "@media(max-width: 650px)": {
  maxWidth: "80%"
    }
});

const Home = () => {
  return (
    <div {...css({ minHeight: "82vh" }) }>
      <Jumbotron {...jumboStyle}>
        <h1 {...jumboText}>
          Residential and commercial professional window cleaning service based in Rustington, West Sussex.
        </h1>
          <div
            {...css({
              display: "flex",
              justifyContent: "center",
              paddingTop: "16px"
            })}
          >
            <Button
              link="/contact"
              title="Get a Quote!"
            />
          </div>
      </Jumbotron>
    </div>
  );
}

export default Home;


