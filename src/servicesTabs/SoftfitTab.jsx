import React from "react";
import { css } from "glamor";
import TabLayout from "./TabLayout";
import { colors } from "../constants/styleConstants";
import { tabTitles } from "../constants/tabTitles";
import { gridItemContainer } from "../constants/styleRules.js";
import Clean from "../images/clean.jpg";
import Dirty from "../images/dirty.jpg";

const imgContainer = css({
  maxWidth: '70%',
  height: 'auto',
  margin: '0 auto',
  padding: '16px'
});

const SoftfitTab = () => {
  return (
    <TabLayout tabTitle={tabTitles.softfit}>
      <div {...gridItemContainer}>
        <h4>
          THE FASCIA
        </h4>
        <p>
          Your house fascias sit vertically just underneath the edge of the roof.
        </p>
        <h4>
          THE SOFTFITS
        </h4>
        <p>
          Your soffits sit horizontal to the ground and is the underboard of the fascia,
          usually ventilated to reduce condensation building up in your roof which could cause timbers to rot.
        </p>
        <p>
          Green algae can damage your soffits and fascias or any UPVC plastic and could possibly cause permanent damage.
          By having your soffits and fascias cleaned at least once per year this will greatly help in keeping them
          look like new and will help them last much longer.
        </p>
      </div>
      <div {...gridItemContainer}>
        <div {...css({backgroundColor: colors.grey, display: 'grid', gridTemplateColumns: '50% 50%', marginBottom: '16px'})}>
          <img src={Dirty} {...imgContainer} alt="Dirty Softfit" />
          <img src={Clean} {...imgContainer} alt="Clean Softfit" />
        </div>
         <q>
          <em>
          Regular maintenance will help minimise damage and maximise the lifespan of your property
          as well as help improve the look of your property.
          </em>
        </q>
      </div>
    </TabLayout>
  );
}

export default SoftfitTab;
