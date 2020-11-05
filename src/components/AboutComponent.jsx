import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { css } from "glamor";
import { gridContainer } from "../constants/styleRules";

class AboutComponent extends React.PureComponent {
  static propsTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <Fade>
        <section {...css({background: this.props.bgColor, color: this.props.color})} >
         <div {...gridContainer}>
          {this.props.children}
        </div>
      </section>
    </Fade>
    );
  }
}

export default AboutComponent;
