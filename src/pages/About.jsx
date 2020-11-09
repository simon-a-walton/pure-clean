import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { bottomBorder } from "../constants/styleRules";
import Cleaner from "../images/cleaner.jpg";
import Paul from "../images/Paul.jpg";
import AboutComponent from "../components/AboutComponent";
import Check from "../images/check.svg";
import { buttonStyle } from "../constants/styleRules";

const titleStyle = css({
  textAlign: "center",
  background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.mainBlue})`,
  color: "white",
  padding: "24px"
});

const imageContainer = css({
  margin: "auto",
  textAlign: "center",
   "@media(max-width: 992px)": {
    margin: "40px auto"
  }
});

const textContainer = css({
  margin: "auto",
  maxWidth: "450px"
});

const headingStyle = css({
  "@media(max-width: 992px)": {paddingTop: "60px", textAlign: "center"},
  paddingBottom: "24px"
});

const listStyle = css({
  listStylePosition: "inside",
  margin:0,
  padding:0,
  paddingTop: "60px",
  height: "270px",
  minWidth: "270px",
  backgroundColor: colors.darkBlue,
  color: "white",
  borderRadius: "50%",
  display: "inline-block",
  "& li": {
    listStyleImage: `url(${Check})`,
    textAlign: "center",
    fontFamily: "Bebas Neue",
    fontSize: "1.25em"
  },
});

const imageSize = css({
  height: "250px",
  width: "250px",
  borderRadius: "50%",
  marginBottom: "30px"
});


const About = () => {
  return (
    <div>
      <div {...titleStyle}>
        <h2>
          <span {...bottomBorder}>Welcome to PureClean</span>
        </h2>
        <br />
        <p>
          We are a residential and commercial professional window cleaning service based in Rustington, West Sussex.
        </p>
      </div>
      <AboutComponent
        bgColor="white"
        color="black"
      >
        <div {...textContainer}>
          <h4 {...headingStyle}>
            <span {...bottomBorder}>WE OFFER</span>
          </h4>
          <p>
            Traditional exterior and interior window cleaning as well as the latest water fed pole system.
            With many years of experience in the industry we take great pride in offering a quality tailored
            service to meet the needs of the customer.
            <br />
            <br />
            Attention to detail is important to us whether it is a traditional approach or our sophisticated pure water
            system. Both service’s include wiping down frames and sills making sure that the whole window is kept clean.
            <br />
            <br />
            Our customer’s have found us to be reliable and trustworthy and have been using us for lots of different
            services on a regular basis year after year.
          </p>
        </div>
        <div {...imageContainer}>
          <img
            src={Cleaner}
            {...imageSize}
            alt="PureClean Cleaning"
          />
        </div>
      </AboutComponent>
      <AboutComponent
        color="white"
        bgColor="linear-gradient(135deg, #0171AD, #5FC7FF)"
      >
      <div {...textContainer}>
        <h4 {...headingStyle}>
          <span {...bottomBorder}>OUR EXPERIENCE</span>
        </h4>
        <p>
          We have great experience in a wide range of exterior cleaning, we tackle:
        </p>
          <ul {...css({ "& li": { listStyleImage: `url(${Check})` }, padding: "24px" })}>
            <li>All exterior and interior windows</li>
            <li>Conservatory roof cleaning</li>
            <li>Gutter clearing / cleaning</li>
            <li>Solar panel cleaning</li>
            <li>Soffit and fascia cleaning</li>
            <li>Cladding cleaning</li>
          </ul>
          <p>
            All with incredible results, often using a combination of pure water and specialist cleaning solutions
            to get even the dirtiest of surfaces sparkling again.
          </p>
        </div>
        <div {...imageContainer}>
          <img
            src={Paul}
            {...imageSize}
              alt="PureClean Paul Batty" />
          <h4>
            Paul Batty
          </h4>
        </div>
      </AboutComponent>
      <AboutComponent
        bgColor="white"
        color="black"
      >
        <div {...textContainer}>
          <h4 {...headingStyle}>
            <span {...bottomBorder}>OUR PROMISE</span>
          </h4>
          <p {...css({ margin: "auto 0" })}>
            At PURECLEAN all are highly experienced and carry full public liability
            insurance and all work is carried out to the strictest of health and safety requirements.
          </p>
          <h5 {...css({ padding:"40px 0", "@media(max-width: 992px)": { textAlign:"center" } })}>
            <a href="/contact" {...buttonStyle}>
              Get a Quote!
            </a>
          </h5>
        </div>
        <div {...css({
          textAlign: "center",
          marginTop: "50px",
          "@media(max-width: 992px)":
          { padding:"24px 0",
          marginTop: "0"
          }
        })}>
          <ul {...listStyle}>
            <li>Fully insured </li>
            <li>Professional and reliable </li>
            <li>Regular or one off cleans </li>
            <li>Water fed pole system </li>
            <li>Traditional </li>
          </ul>
        </div>
      </AboutComponent>
    </div>
  );
}

export default About;
