import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

const footerStyle = css({
  backgroundColor: 'black',
  height: '80px',
  color: 'white'
});

const gridContainer = css({
  display: 'grid',
  gridTemplateColumns: '40% 20% 40%'
});

const textSize = css({
  lineHeight: '60px',
'@media(max-width: 600px)': {
  fontSize: '14px'
  }
});

export const linkStyle = css({
  ':hover': {
    color: colors.mainBlue
  }
});

const inlineList = css({
    margin: 0,
    padding: 0,
  '& li': {
    display: 'inline',
    padding: '0 8px',
    listStyleType: 'none'
  }
});

const Footer = () => {
  return (
    <div>
      <footer {...footerStyle}>
        <div {...gridContainer}>
          <div>
            <h5 className={`pl-3 ${textSize}`}>
              &copy; PureClean {new Date().getFullYear()}
            </h5>
          </div>
          <div>
            <ul className={`text-center ${inlineList} ${textSize}`}>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" {...linkStyle}>
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" {...linkStyle}>
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={`pr-3 text-right ${textSize}`}>
              <i className="fas fa-laptop-code" />
              <span>
                <a href="https://simonwaltondev.com/#/" target="_blank" rel="noreferrer" {...linkStyle}>
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
