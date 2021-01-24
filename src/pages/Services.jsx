import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { tabTitles } from "../constants/tabTitles";
import CommercialTab from "../servicesTabs/CommercialTab";
import SoftfitTab from "../servicesTabs/SoftfitTab";
import GutterTab from "../servicesTabs/GutterTab";
import SolarTab from "../servicesTabs/SolarTab";
import CladdingTab from "../servicesTabs/CladdingTab";
import ConservatoryTab from "../servicesTabs/ConservatoryTab";
import Check from "../images/check.svg";
import { tabStyle } from "../constants/styleRules";

const checkList = css({
  display: "inline-block",
  lineHeight: "40px",
  "& li": {
    paddingTop: "16px",
    fontFamily: "Bebas Neue",
    listStyleImage: `url(${Check})`,
    float: "left",
    marginRight: "40px"
  },
  "@media(max-width: 992px)": {
    display: "block",
    "& li": {
      float: "none",
      lineHeight: "16px"
    }
  }
});

const minHeight = css({
  minHeight: "65vh"
});

const Services = () => {
  return(
    <div {...css({ minHeight: "82vh" }) }>
      <Tabs defaultActiveKey="commercial" id="services-tab" {...tabStyle}>
        <Tab eventKey="commercial" title={tabTitles.commercial} {...minHeight }>
          <CommercialTab />
        </Tab>
        <Tab eventKey="softfit" title={tabTitles.softfit}>
          <SoftfitTab />
        </Tab>
         <Tab eventKey="conservatory" title={tabTitles.conservatory} {...minHeight }>
          <ConservatoryTab />
        </Tab>
        <Tab eventKey="gutter" title={tabTitles.gutter} {...minHeight }>
          <GutterTab />
        </Tab>
        <Tab eventKey="solar" title={tabTitles.solar} {...minHeight }>
          <SolarTab />
        </Tab>
        <Tab eventKey="cladding" title={tabTitles.cladding} {...minHeight }>
          <CladdingTab />
        </Tab>
      </Tabs>
      <div {...css({
        background: colors.darkBlue,
        color: "white",
        display:"flex",
        justifyContent: "center",
        padding: "16px"
      })}>
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

