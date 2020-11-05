import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import { bottomBorder } from "../constants/styleRules";
import Van from "../images/van.jpeg";
import Cleaner from "../images/cleaner.jpg";
import Paul from "../images/Paul.jpg";
import AboutComponent from "../components/AboutComponent";
import Check from "../images/check.svg";

const titleStyle = css({
  textAlign: 'center',
  backgroundColor: colors.darkBlue,
  color: 'white',
  padding: '24px'
});

const imageContainer = css({
  margin: 'auto',
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
  listStylePosition: 'inside',
  margin:0,
  padding:0,
  paddingTop: '60px',
  height: '270px',
  minWidth: '270px',
  backgroundColor: colors.lightBlue,
  borderRadius: '50%',
  display: 'inline-block',
  '& li': {
    listStyleImage: `url(${Check})`,
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
    fontSize: '1.25em'
  },
});

const imageSize = css({
  maxWidth: '70%',
  height: 'auto',
  margin: '0 auto'
});

const bottomContainer = css({
  padding: '30px',
  textAlign: 'center',
  '@media(max-width: 992px)': {
    display: 'block'
  }
});


const About = () => {
  return (
    <div className="about">
      <div  {...titleStyle}>
        <h2>
          <span {...bottomBorder}>Welcome to PureClean</span>
        </h2>
        <br />
         <p>
            We are a residential and commercial professional window cleaning service based in Rustington, West Sussex.
          </p>
      </div>
      <AboutComponent
        bgColor='white'
        color='black'
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
      <div {...textContainer}>
          <h4 {...headingStyle}>
            <span {...bottomBorder}>OUR EXPERIENCE</span>
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
         <h4>Paul Batty</h4>
        </div>
      </AboutComponent>
      <AboutComponent
        bgColor='white'
        color='black'
      >
        <div>
        <h4 {...headingStyle}>
            <span {...bottomBorder}>OUR PROMISE</span>
          </h4>
          <div {...textContainer} {...bottomContainer}>
        <div>
          <i className={`fas fa-clipboard-check ${css({fontSize: 'calc(40px + 2vw)', paddingBottom: '16px', color: colors.darkBlue, '@media(max-width: 992px)':{paddingBottom:'24px'}})}`}/>
        </div>
        <p {...css({margin: 'auto 0'})}>
          At PURECLEAN all are highly experienced and carry full public liability
          insurance and all work is carried out to the strictest of health and safety requirements.
        </p>
      </div>

          </div>

       <div {...css({textAlign: 'center'})}>
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
