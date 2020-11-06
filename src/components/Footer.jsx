import React from "react";
import { css, select } from "glamor";
import { colors } from "../constants/styleConstants";

const footerStyle = css({
  backgroundColor: 'black',
  height: '80px',
  color: 'white'
});

const gridContainer = css({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto'
});

const textSize = css({
  lineHeight: '60px',
'@media(max-width: 600px)': {
  fontSize: '10px'
  }
});

export const linkStyle = css({
  ':hover': {
    color: colors.mainBlue
  }
});

const inlineList = select('& li',{
  display: 'inline',
  padding: '0 8px',
  listStyleType: 'none'
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
          <div>
            <h5 className={`pr-3 text-right ${textSize}`}>
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
