import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

export const buttonStyle = css({
  backgroundColor: colors.darkBlue,
  color: "white",
  border: `2px solid ${colors.green}`,
  borderRadius: "8px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "black",
    color: "white"
  }
});

class Button extends React.PureComponent {
  static propsTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <h5 {...css({ padding:"40px 0", "@media(max-width: 992px)": { textAlign:"center" } })}>
        <a href={this.props.link} {...buttonStyle}>
          {this.props.title}
        </a>
      </h5>
    );
  }
}

export default Button;





