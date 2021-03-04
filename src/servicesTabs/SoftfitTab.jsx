import React from "react";
import { css } from "glamor";
import TabLayout from "../components/TabLayout";
import { colors } from "../constants/styleConstants";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer, imgContainer, imgGridContainer, gridImageContainer, greyImageBg } from "../constants/styleRules.js";
import SoffitClean from "../images/soffit-clean.jpg";
import SoffitDirty from "../images/soffit-dirty.jpg";
import Explanation from "../images/explanation.jpg";
import Header from "../components/Header";

const SoftfitTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.softfit}>
      <div {...gridItemContainer}>
        <Header title={tabTitles.softfit} />
        <h5>
          THE FASCIA
        </h5>
        <p>
          Your house fascias sit vertically just underneath the edge of the roof.
        </p>
        <br />
        <h5>
          THE SOFFITS
        </h5>
        <p>
          Your soffits sit horizontal to the ground and are the underboards of the fascia,
          usually ventilated to reduce condensation building up in your roof which could cause timbers to rot.
        </p>
        <br />
        <p>
          Green algae can damage your soffits and fascias or any UPVC plastic and could possibly cause permanent damage.
          By having your soffits and fascias cleaned at least once per year this will greatly help in keeping them
          look like new and will help them last much longer.
        </p>
        <br />
        <q>
          <em>
          Regular maintenance will help minimise damage and maximise the lifespan of your property
          as well as help improve the look of your property.
          </em>
        </q>
      </div>
      <div {...gridImageContainer} {...greyImageBg}>
          <img
            src={Explanation}
            {...imgContainer}
            alt="Soffit Explained"
            className="rounded"
          />
        <div {...imgGridContainer}>
          <img
            src={SoffitDirty}
            {...imgContainer}
            alt="Dirty Soffit"
            className="rounded"
          />
          <img
            src={SoffitClean}
            {...imgContainer}
            alt="Clean Soffit"
            className="rounded"
          />
        </div>
      </div>
    </TabLayout>
  );
}

export default SoftfitTab;
