import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, gridImageContainer } from "../constants/styleRules.js";
import Header from "../components/Header";
import Commercial from "../images/image2.jpeg";
import { css } from "glamor";


const CommercialTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.commercial}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.commercial} />
        <p>
          Traditional exterior and interior window cleaning as well as the latest water fed pole system.
          With many years of experience in the industry we take great pride in offering a quality tailored
          service to meet the needs of the customer.
          <br />
          <br />
          Attention to detail is important to us whether it is a traditional approach or our sophisticated pure water
          system. Both services include wiping down frames and sills making sure that the whole window is kept clean.
          <br />
          <br />
          Our customers have found us to be reliable and trustworthy and have been using us for lots of different
          services on a regular basis year after year.
        </p>
      </div>
      <div {...gridImageContainer}>
        <img
          class="img-fluid mb-4 mb-lg-0"
          src={Commercial}
          alt="Commerical Cleaning"
          {...css({ maxWidth: "60%", height: "auto" })}
        />
      </div>
    </TabLayout>
  );
}

export default CommercialTab;
