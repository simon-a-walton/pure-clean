import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import Van from "../images/van.jpeg";
import Cleaner from "../images/cleaner.jpg";
import Paul from "../images/Paul.jpg";
import AboutComponent from "../components/AboutComponent";

const titleStyle = css({
  textAlign: 'center',
  backgroundColor: colors.lightBlue,
  padding: '16px 24px'
});

const imageContainer = css({
  margin: '20px auto',
  textAlign: 'center'
});

const textContainer = css({
  margin: 'auto',
  maxWidth: '450px'
});

const headingStyle = css({
  '@media(max-width: 992px)': {paddingTop: '60px', textAlign: 'center'},
  paddingBottom: '24px'
});

const listStyle = css({
  textAlign: 'center',
  margin:0,
  padding:0,
  paddingTop: '65px',
  height: '250px',
  minWidth: '250px',
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'inline-block',
  '& li': {listStyleType: 'none'}
});

const imageSize = css({
  maxWidth: '70%',
  height: 'auto',
  margin: '0 auto'
});


const About = () => {
  return (
    <div className="about">
      <h2 {...titleStyle}>
        Welcome to PureClean
      </h2>
      <AboutComponent
        bgColor={colors.mainBlue}
        color='black'
      >
        <div {...imageContainer}>
          <img
            src={Van}
            {...imageSize}
            alt="PureClean Van"
          />
        </div>
        <div {...textContainer}>
          <h4 {...headingStyle}>
            We are a residential and commercial professional window cleaning service based in Rustington, West Sussex.
          </h4>
          <div className="text-center">
            <ul {...listStyle}>
              <li>✔️ Fully insured </li>
              <li>✔️ Professional and reliable </li>
              <li>✔️ Regular or one off cleans </li>
              <li>✔️ Water fed pole system </li>
              <li>✔️ Traditional </li>
            </ul>
          </div>
        </div>
      </AboutComponent>
      <AboutComponent
        bgColor={colors.grey}
        color='black'
      >
        <div {...textContainer}>
          <h4 {...headingStyle}>
            WE OFFER
          </h4>
          <p>
            Traditional exterior and interior window cleaning as well as the latest water fed pole system.
            With many years of experience in the industry we take great pride in offering a quality tailored
            service to meet the needs of the customer.
            <br />
            <br />
            Attention to detail is important to us whether it is a traditional approach or our sophisticated pure water
            system both service’s include wiping down frames and sills making sure that the whole window is kept clean.
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
            {...css({'@media(max-width: 992px)': { margin: '80px auto' }})}
            alt="PureClean Cleaning"
          />
        </div>
      </AboutComponent>
      <AboutComponent
        bgColor={colors.darkBlue}
        color='white'
      >
        <div {...imageContainer}>
          <img
            src={Paul}
            {...css({
              height: '250px',
              width: '250px',
              borderRadius: '50%',
              marginBottom: '30px',
              border: '4px solid white'
              })}
              alt="PureClean Paul Batty" />
         <h2>Paul Batty</h2>
        </div>
        <div {...textContainer}>
          <h4 {...headingStyle}>
            OUR EXPERIENCE
          </h4>
          <p>
            We have great experience in a wide range of exterior cleaning, we tackle: - All exterior and interior windows
          </p>
            <ul className="p-3">
              <li>Conservatory roof cleaning</li>
              <li>Gutter clearing / cleaning</li>
              <li>Solar panel cleaning</li>
              <li>Soffit and fascia cleaning</li>
              <li>Cladding clean</li>
            </ul>
            <p>
              All with incredible results, often using a combination of pure water and specialist cleaning solutions
              to get even the dirtiest of surfaces sparkling again.
            </p>
        </div>
      </AboutComponent>
    </div>
  );
}

export default About;
