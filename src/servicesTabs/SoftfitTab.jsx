import React from "react";
import { css } from "glamor";
import TabLayout from "./TabLayout";
import { colors } from "../constants/styleConstants";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";
import SoffitClean from "../images/soffit-clean.jpg";
import SoffitDirty from "../images/soffit-dirty.jpg";
import Explanation from "../images/explanation.jpg";

const imgContainer = css({
  maxWidth: '85%',
  height: 'auto',
  margin: '0 auto',
  padding: '16px'
});

const SoftfitTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.softfit}>
      <div {...gridItemContainer}>
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
      <div {...gridItemContainer}>
        <div {...css({backgroundColor: colors.grey, marginBottom: '16px', textAlign: 'center'})}>
          <img src={Explanation} {...imgContainer} alt="Soffit Explained" />
        </div>
        <div {...css({backgroundColor: colors.grey, display: 'grid', gridTemplateColumns: '50% 50%', marginBottom: '16px'})}>
          <img src={SoffitDirty} {...imgContainer} alt="Dirty Soffit" />
          <img src={SoffitClean} {...imgContainer} alt="Clean Soffit" />
        </div>
      </div>
    </TabLayout>
  );
}

export default SoftfitTab;
