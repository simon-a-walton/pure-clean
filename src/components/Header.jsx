import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import { bottomBorder } from "../constants/styleRules";

class Header extends React.PureComponent {
  static propsTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <h4 {...css({
          marginBottom: "32px",
          "@media(max-width: 992px)": {
            textAlign: "center",
            marginBottom: "16px",
            lineHeight: "40px"
          }
        })}>
          <span {...bottomBorder}>{this.props.title}</span>
      </h4>
    );
  }
}

export default Header;
