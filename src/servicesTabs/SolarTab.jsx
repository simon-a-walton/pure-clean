import React from "react";
import { css } from "glamor";
import TabLayout from "./TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";

const SolarTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.solar}>
      <div {...gridItemContainer}>
        <p>
          Protect your investment and increase the energy efficiency of your home with our professional and
          totally safe solar panel clean.
        </p>
        <p>
          This service is delivered using our reach and wash system, by using ultra soft brushes our
          service is guaranteed not to scratch your solar panels. We use 100% pure water to remove the build up of dirt,
          grime and moss.
        </p>
        <p>
          By keeping your solar panels as clean as possible you will be allowing the maximum amount of sun to
          penetrate into the panels and thereby increasing the efficiency of your solar panels.
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

export default SolarTab;
