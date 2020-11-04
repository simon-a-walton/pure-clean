import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

const tabStyle = css({
  backgroundColor: colors.lightBlue,
  padding: '8px',
  '& a': {
    padding: '16px auto',
    margin: '0 auto',
    borderRadius: '4px'
  },
  '& .nav-link.active': {
    color: colors.darkBlue,
    backgroundColor: 'white',
    borderColor: colors.lightBlue
  },

    borderBottom: 'none',
  '& a:hover': {
    color: colors.darkBlue
  },
  '@media(max-width: 700px)': {
    display: 'block',
    padding: '0',
    '& a': {
      padding: '8px',
      margin: 0
    }
  }
});

const Services = () => {
  return(
    <div {...css({backgroundColor: colors.mainBlue})}>
    <Tabs defaultActiveKey="softfit" id="services-tab" {...tabStyle}>
      <Tab eventKey="softfit" title="Softfit & Fascia  Cleaning">
        <p>foo</p>
      </Tab>
      <Tab eventKey="gutter" title="Gutter cleaning">
        <p>foo</p>
      </Tab>
      <Tab eventKey="solar" title="Solar Panels">
        <p>foo</p>
      </Tab>
      <Tab eventKey="cladding" title="Cladding Cleaning">
        <p>foo</p>
      </Tab>
      <Tab eventKey="conservatory" title="Conservatory Roof Cleaning">
        <p>foo</p>
      </Tab>
    </Tabs>
    </div>
  );
}

export default Services;

