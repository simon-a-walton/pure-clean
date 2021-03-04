import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, gridImageContainer, warningList } from "../constants/styleRules.js";
import Header from "../components/Header";
import Gutter from "../images/Image1.jpg";
import { css } from "glamor";

const GutterTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.gutter}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.gutter} />
        <p>
          A blocked gutter can cause serious water damage to your property which can then lead to costly repair bills.
          We recommend getting your gutters cleaned at least once a year
        </p>
        <br />
        <h5>
          If gutters are not cleared:
        </h5>
        <br />
        <ul {...warningList}>
          <li>They can sag due to weight build up</li>
          <li>Mould and damp against/ or in your property due to the build up of leaves,
          moss and other debris and obstructions clogging up your gutters</li>
          <li>Can cause rot to soffits and fascias</li>
          <li>Insect infestation</li>
          <li>Can cause cracks to the walls</li>
        </ul>
      </div>
      <div {...gridImageContainer}>
        <img
          class="img-fluid mb-4 mb-lg-0 rounded"
          src={Gutter}
          alt="Gutter clearing"
          {...css({ maxWidth: "70%", height: "auto" })}
        />
      </div>
    </TabLayout>
  );
}

export default GutterTab;
