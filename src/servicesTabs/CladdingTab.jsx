import React from "react";
import TabLayout from "../components/TabLayout";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, gridImageContainer } from "../constants/styleRules.js";
import Header from "../components/Header";
import Cladding from "../images/image6.png";
import { css } from "glamor";

const CladdingTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.cladding}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.cladding} />
        <p>
          Cladding on your house if not kept clean can very quickly become a real eye sore,
          protect your investment and image of your property.
        </p>
        <p>
          Green algae can damage your white cladding or any UPVC plastic and can cause permanent staining.
          By having your cladding cleaned at least once per year this will greatly help in keeping your cladding looking
          like new and will expand the life of the cladding.
        </p>
      </div>
      <div {...gridImageContainer}>
        <img
          class="img-fluid mb-4 mb-lg-0"
          src={Cladding}
          alt="Cladding cleaning"
          {...css({ maxWidth: "60%", height: "auto" })}
        />

      </div>
    </TabLayout>
  );
}

export default CladdingTab;
