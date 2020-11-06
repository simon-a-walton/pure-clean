import React from "react";
import TabLayout from "./TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, warningList } from "../constants/styleRules.js";


const GutterTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.gutter}>
      <div {...gridItemContainer}>
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

export default GutterTab;
