import React from "react";
import { css, select } from "glamor";
import { colors } from "../constants/styleConstants";

const footerStyle = css({
  backgroundColor: colors.darkBlue,
  height: '80px'
});

const textSize = css({
  lineHeight: '60px',
'@media(max-width: 600px)': {
  fontSize: '10px'
  }
});

export const linkStyle = css({
  ':hover': {
    color: 'black'
  }
});

const inlineList = select('& li',{
  display: 'inline',
  padding: '0 8px'
});

function Footer() {
  return (
    <div>
      <footer className={`${footerStyle}`}>
        <div className="row text-white">
          <div className="pl-4 col">
            <h5 className={`m-0 ${textSize}`}>
              &copy; PureClean {new Date().getFullYear()}
            </h5>
          </div>
          <div className="col">
            <ul className={`list-unstyled text-center ${inlineList} ${textSize}`}>
              <li>
                <a href="www.facebook.com" {...linkStyle}>
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="www.instagram.com" {...linkStyle}>
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="pr-4 col">
            <h5 className={`m-0 text-right ${textSize}`}>
              Created by
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
