import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import Exclamation from "../images/exclamation.svg";


export const gridItemContainer = css({
  maxWidth: '500px',
  margin: 'auto auto',
  '@media(max-width: 992px)': {
    padding: '16px 0'
  }
});

export const warningList = css({
  listStyleImage: `url(${Exclamation})`
});

export const bottomBorder = css({
  borderBottom: `2px solid ${colors.green}`
});
