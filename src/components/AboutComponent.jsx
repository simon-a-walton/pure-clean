import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { css } from "glamor";

const gridContainer = css({
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  padding: '100px',
  '@media(max-width: 992px)': {
    display: 'block',
    padding: '40px'
  }
});

class AboutComponent extends React.PureComponent {
  static propsTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <Fade>
        <section {...css({backgroundColor: this.props.bgColor, color: this.props.color})} >
         <div {...gridContainer}>
          {this.props.children}
        </div>
      </section>
    </Fade>
    );
  }
}

export default AboutComponent;
