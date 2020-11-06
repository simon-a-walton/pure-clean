import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { tabTitles } from "../constants/tabTitles";
import SoftfitTab from "../servicesTabs/SoftfitTab";
import GutterTab from "../servicesTabs/GutterTab";
import SolarTab from "../servicesTabs/SolarTab";
import CladdingTab from "../servicesTabs/CladdingTab";
import ConservatoryTab from "../servicesTabs/ConservatoryTab";
import Check from "../images/check.svg";

const tabStyle = css({
  backgroundColor: colors.darkBlue,
  padding: '16px',
  color: 'white',
  '& a': {
    padding: '16px auto',
    margin: '0 auto',
    borderRadius: '4px'
  },
  '& .nav-link.active': {
    color: colors.darkBlue,
    backgroundColor: 'white',
    borderColor: colors.green
  },
    borderBottom: 'none',
  '& a:hover': {
    color: 'white'
  },
  '@media(max-width: 800px)': {
    display: 'block',
    padding: '8px 0',
    '& a': {
      padding: '8px',
      margin: 0
    }
  }
});

const checkList = css({
  display: 'inline-block',
  lineHeight: '40px',
  '& li': {
    paddingTop: '16px',
    fontFamily: 'Bebas Neue',
    listStyleImage: `url(${Check})`,
    float: 'left',
    marginRight: '40px'
  },
  '@media(max-width: 992px)': {
    display: 'block',
    '& li': {
      float: 'none',
      lineHeight: '16px'
    }
  }
});

const Services = () => {
  return(
    <div>
      <Tabs defaultActiveKey="softfit" id="services-tab" {...tabStyle}>
        <Tab eventKey="softfit" title={tabTitles.softfit}>
          <SoftfitTab />
        </Tab>
         <Tab eventKey="conservatory" title={tabTitles.conservatory}>
          <ConservatoryTab />
        </Tab>
        <Tab eventKey="gutter" title={tabTitles.gutter}>
          <GutterTab />
        </Tab>
        <Tab eventKey="solar" title={tabTitles.solar}>
          <SolarTab />
        </Tab>
        <Tab eventKey="cladding" title={tabTitles.cladding}>
          <CladdingTab />
        </Tab>
      </Tabs>
      <div {...css({background: colors.darkBlue, color: 'white', display:'flex', justifyContent: 'center',  padding: '16px'})}>
         <ul {...checkList}>
            <li>Professional and reliable service</li>
            <li>Fully insured</li>
            <li>Improve the look of your property</li>
            <li>Regular or one off cleans</li>
            <li>Water fed pole system</li>
          </ul>
      </div>
    </div>
  );
}

export default Services;

