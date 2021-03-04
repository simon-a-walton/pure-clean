import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, imgContainer, imgGridContainer, greyImageBg } from "../constants/styleRules.js";
import ConservatoryClean from "../images/conservatory-clean.jpg";
import ConservatoryDirty from "../images/conservatory-dirty.jpg";
import Header from "../components/Header";

const ConservatoryTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.conservatory}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.conservatory} />
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
        <div {...imgGridContainer} {...greyImageBg}>
          <img
            src={ConservatoryDirty}
            {...imgContainer}
            alt="Dirty Conservatory"
            className="rounded"
          />
          <img
            src={ConservatoryClean}
            {...imgContainer}
            alt="Clean Conservatory"
            className="rounded"
          />
        </div>
      </div>
    </TabLayout>
  );
}

export default ConservatoryTab;
