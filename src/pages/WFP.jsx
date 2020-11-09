import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { gridContainer, gridItemContainer, bottomBorder } from "../constants/styleRules";
import WindowCleaning from "../images/window-cleaning.svg";

const WFP = () => {
  return (
    <div {...css({ backgroundImage: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.green})`, color: "white" })}>
      <div {...gridContainer}>
        <div {...gridItemContainer}>
          <h4 {...css({ paddingBottom: "24px", "@media(max-width: 992px)": { textAlign: "center" } })}>
            <span {...bottomBorder}>
              Water fed pole system
            </span>
          </h4>
          <p>
            We use the latest technology in pure water cleaning.
            Pure water is ordinary tap water that has been filtered through a series of filtration
            and then through RO (reverse osmosis) which gives you purified water at 0.00ppm
            (parts per million).
          </p>
          <p>
            The south is a hard water area and ranges from 250 to 350 ppm, so you have to have
            purified water to clean your windows as if you used water straight from the tap your
            glass would be heavily stained with limescale which can be very difficult to get off.
            By using the filtered pure water there is no need to squeegee the water from the
            windows as pure water dries naturally crystal clear.
          </p>
          <p>
            When using traditional methods various cleaning agents are used, this can leave a
            film on the glass which will not get every bit of dirt out of those tiny cracks, so when it
            rains this dirt can run down the windows making them look dirty again.
          </p>
          <p>
            The soft bristles on the pole remove all dirt from your frames and followed by the pure
            water rinse there is no dirt to run if the weather takes a turn!
          </p>
        </div>
         <div {...gridItemContainer} {...css({ textAlign:"center" })}>
            <img
              src={WindowCleaning}
              alt="Window Cleaning"
            />
        </div>
      </div>
    </div>
  );
}

export default WFP;


