import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { gridContainer, gridItemContainer, bottomBorder } from "../constants/styleRules";
import  Window from "../images/clean-window-glass.svg";

const Methods = () => {
  return (
    <div {...css({ backgroundImage: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.mainBlue})`, color: "white" })}>
      <div {...gridContainer}>
        <div {...gridItemContainer}>
          <h4 {...css({ paddingBottom: "24px", "@media(max-width: 992px)": { textAlign: "center" } })}>
            <span {...bottomBorder}>
              Traditional methods
            </span>
          </h4>
          <p>
            Traditional window cleaning is the use of water and detergent, an applicator to wash and
            agitate the glass and a squeegee to remove the water. We then use a microfibre cloth to polish up the edges.
            Your frames are always wiped over and sills will also be wiped down everytime.
          </p>
          <p>
            Water fed pole systems are used by most window cleaners now but traditional will always have its place
            especially for interior cleaning.
            On some occasions the water fed system cannot be used but as long as the windows can all be reached
            safely then we will be happy to use the traditional method.
          </p>
          <p>
            The water fed pole system will also not be able to tackle heavily soiled windows,
            windows that have not been cleaned in a very long time, or if you have had building work on or near your property.
          </p>
        </div>
          <div {...gridItemContainer} {...css({textAlign:"center"})}>
            <img
              src={Window}
              alt="Window"
            />
        </div>
      </div>
    </div>
  );
}

export default Methods;

