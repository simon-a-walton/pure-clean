import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import Exclamation from "../images/exclamation.svg";

export const gridContainer = css({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  padding: "100px",
  "@media(max-width: 992px)": {
    display: "block",
    padding: "40px"
  }
});

export const gridItemContainer = css({
  maxWidth: "500px",
  margin: "auto auto",
  "@media(max-width: 992px)": {
    padding: "16px 0"
  }
});

export const gridImageContainer = css({
  maxWidth: "500px",
  margin: "auto auto",
  textAlign: "center",
  "& img":{
    padding: "16px",
    backgroundColor: colors.grey
  },
  "@media(max-width: 992px)": {
    padding: "16px 0"
  }
});

export const greyImageBg = css({
  "& img": {
    backgroundColor: colors.grey,
    padding: "16px",
    marginBottom: "16px"
  }
});

export const warningList = css({
  listStyleImage: `url(${Exclamation})`
});

export const bottomBorder = css({
  borderBottom: `2px solid ${colors.green}`
});

export const imgGridContainer = css({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  marginBottom: "16px",
  "@media(max-width: 992px)": {
    display: "block",
    textAlign: "center"
  }
});

export const imgContainer = css({
  maxWidth: "85%",
  height: "auto",
  margin: "0 auto",
  padding: "16px",
  "@media(max-width: 992px)": {
    maxWidth: "60%"
  },
   "@media(max-width: 550px)": {
    maxWidth: "100%"
  }
});

export const tabStyle = css({
  backgroundColor: colors.darkBlue,
  padding: "16px",
  color: "white",
  "& a": {
    padding: "16px auto",
    margin: "0 auto",
    borderRadius: "4px"
  },
  "& .nav-link.active": {
    color: colors.darkBlue,
    backgroundColor: "white",
    borderColor: colors.green
  },
    borderBottom: "none",
  "& a:hover": {
    color: "white"
  },
  "@media(max-width: 1100px)": {
    display: "block",
    padding: "8px 0",
    "& a": {
      padding: "8px",
      margin: 0
    }
  }
});
