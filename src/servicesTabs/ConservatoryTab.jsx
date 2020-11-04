import React from "react";
import { css } from "glamor";
import TabLayout from "./TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";

const ConservatoryTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.conservatory}>
      <div {...gridItemContainer}>
        <p>
          Protect your investment with our professional conservatory cleaning- we offer professional conservatory
          cleaning and will bring your conservatory back to life. We use a combination of our pure water fed system
          and specialist cleaning solution to clear the build up of moss, grime and algae.
        </p>
        <p>
          Green algae can damage your white UPVC plastics and can cause permanent staining, by having the
          roof cleaned at least once a year this will greatly help in keeping the roof looking like new and should
          improve the life.
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

export default ConservatoryTab;
