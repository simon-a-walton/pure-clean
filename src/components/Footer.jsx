import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

const footerStyle = css({
  backgroundColor: "black",
  height: "80px",
  color: "white"
});

const gridContainer = css({
  display: "grid",
  gridTemplateColumns: "40% 20% 40%"
});

const textSize = css({
  lineHeight: "60px",
"@media(max-width: 600px)": {
  fontSize: "14px"
  }
});

const inlineList = css({
    textAlign: "center",
    margin: 0,
    padding: 0,
  "& li": {
    display: "inline",
    padding: "0 8px",
    listStyleType: "none",
    "& a:hover": {
    color: colors.mainBlue
  }
  }
});

const Footer = () => {
  return (
    <div>
      <footer {...footerStyle}>
        <div {...gridContainer}>
          <div>
            <h5 {...css({ paddingLeft: "12px" })} {...textSize}>
              &copy; PureClean {new Date().getFullYear()}
            </h5>
          </div>
          <div>
            <ul {...inlineList} {...textSize}>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 {...css({ paddingRight: "16px", textAlign: "right" })} {...textSize}>
              <i className="fas fa-laptop-code" />
              <span>
                <a href="https://simonwaltondev.com/#/" target="_blank" rel="noreferrer">
                  &nbsp;
                  Simon Walton
                </a>
              </span>
            </h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
