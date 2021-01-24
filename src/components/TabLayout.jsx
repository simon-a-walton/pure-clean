import React from "react";
import { css } from "glamor";
import PropTypes from "prop-types";
import { bottomBorder } from "../constants/styleRules";

const tabContainer = css({
  backgroundColor: "white",
  padding: "60px",
  "@media(max-width: 992px)": {
    padding: "40px"
  }
});

const gridContainer = css({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  "@media(max-width: 992px)": {
    display: "block"
  }
});

class TabLayout extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.node.isRequired,
    tabTitle: PropTypes.string
  };

  render() {
    return (
      <div {...tabContainer}>

        <section {...gridContainer}>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default TabLayout;
