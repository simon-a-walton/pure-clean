import React from "react";
import { css } from "glamor";
import Window from "../images/clean-window-glass.svg";
import { Tabs, Tab } from "react-bootstrap";
import WindowCleaning from "../images/window-cleaning.svg";
import { gridItemContainer, tabStyle } from "../constants/styleRules";
import WaterDrop from "../images/tint-solid.svg";
import TabLayout from "../components/TabLayout";
import Button from "../components/Button";

export const waterList = css({
  margin: 0,
  padding: 0,
  listStyleImage: `url(${WaterDrop})`,
  "& li": {
    margin: "24px 0"
  }
});

const Methods = () => {
  return (
    <div {...css({ minHeight: "82vh" }) }>
      <Tabs defaultActiveKey="traditional" id="methods-tabs" {...tabStyle}>
        <Tab eventKey="traditional" title="Traditional">
          <TabLayout tabTitle="Traditional Methods">
            <div {...gridItemContainer}>
              <ul {...waterList}>
                <li>
                  Traditional window cleaning is the use of water and detergent, an applicator to wash and
                  agitate the glass and a squeegee to remove the water. We then use a microfibre cloth to polish up the edges.
                  Your frames are always wiped over and sills will also be wiped down everytime.
                </li>
                <li>
                  Water fed pole systems are used by most window cleaners now but traditional will always have its place
                  especially for interior cleaning.
                </li>
                <li>
                  On some occasions the water fed system cannot be used but as long as the windows can all be reached
                  safely then we will be happy to use the traditional method.
                </li>
                <li>
                  The water fed pole system will also not be able to tackle heavily soiled windows,
                  windows that have not been cleaned in a very long time, or if you have had building work on or near your property.
                </li>
              </ul>
            </div>
            <div {...gridItemContainer} {...css({textAlign:"center" })}>
              <img
                src={Window}
                alt="Window"
              />
              <Button
                link="/contact"
                title="Get a Quote!"
              />
            </div>
          </TabLayout>
        </Tab>
        <Tab eventKey="wfp" title="Water Fed Pole System">
          <TabLayout tabTitle="Water Fed Pole System">
            <div {...gridItemContainer}>
              <ul {...waterList}>
               <li>
                  We use the latest technology in pure water cleaning.
                  Pure water is ordinary tap water that has been filtered through a series of filtration
                  and then through RO (reverse osmosis) which gives you purified water at 0.00ppm
                  (parts per million).
                </li>
                <li>
                  The south is a hard water area and ranges from 250 to 350 ppm, so you have to have
                  purified water to clean your windows as if you used water straight from the tap your
                  glass would be heavily stained with limescale which can be very difficult to get off.
                  By using the filtered pure water there is no need to squeegee the water from the
                  windows as pure water dries naturally crystal clear.
                </li>
                 <li>
                  The soft bristles on the pole remove all dirt from your frames and followed by the pure
                  water rinse there is no dirt to run if the weather takes a turn!
                </li>
                  <li>
                  When using traditional methods various cleaning agents are used, this can leave a
                  film on the glass which will not get every bit of dirt out of those tiny cracks, so when it
                  rains this dirt can run down the windows making them look dirty again.
                </li>
              </ul>
            </div>
               <div {...gridItemContainer} {...css({textAlign:"center" })}>
                <img
                src={WindowCleaning}
                alt="Window Cleaning"
              />
              <Button
                link="/contact"
                title="Get a Quote!"
              />
            </div>
          </TabLayout>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Methods;

