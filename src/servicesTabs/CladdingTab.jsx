import React from "react";
import TabLayout from "./TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";

const CladdingTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.cladding}>
      <div {...gridItemContainer}>
        <p>
          Cladding on your house if not kept clean can very quickly become a real eye saw,
          protect your investment and image of your property.
        </p>
        <p>
          Green algae can damage your white cladding or any UPVC plastic and can cause permanent staining.
          By having your cladding cleaned at least once per year this will greatly help in keeping your cladding looking
          like new and will expand the life of the cladding.
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

export default CladdingTab;
