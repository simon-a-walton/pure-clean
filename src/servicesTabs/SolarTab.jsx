import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, gridImageContainer } from "../constants/styleRules.js";
import Header from "../components/Header";
import Solar from "../images/image0.jpeg";
import { css } from "glamor";

const SolarTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.solar}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.solar} />
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
      <div {...gridImageContainer}>
        <img
          class="img-fluid mb-4 mb-lg-0"
          src={Solar}
          alt="Solar panel cleaning"
          {...css({ maxWidth: "100%", height: "auto" })}
        />
      </div>
    </TabLayout>
  );
}

export default SolarTab;
