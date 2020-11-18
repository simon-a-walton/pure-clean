import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";

const CommercialTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.commercial}>
      <div {...gridItemContainer}>
        <p>
          Traditional exterior and interior window cleaning as well as the latest water fed pole system.
          With many years of experience in the industry we take great pride in offering a quality tailored
          service to meet the needs of the customer.
          <br />
          <br />
          Attention to detail is important to us whether it is a traditional approach or our sophisticated pure water
          system. Both service’s include wiping down frames and sills making sure that the whole window is kept clean.
          <br />
          <br />
          Our customer’s have found us to be reliable and trustworthy and have been using us for lots of different
          services on a regular basis year after year.
        </p>
      </div>
      <div {...gridItemContainer}>
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src="http://placehold.it/900x400"
          alt=""
        />
      </div>
    </TabLayout>
  );
}

export default CommercialTab;
