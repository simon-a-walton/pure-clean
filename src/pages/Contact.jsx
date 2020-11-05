import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import ContactForm from "../components/ContactForm";
import { bottomBorder } from "../constants/styleRules";

const gridContainer = css({
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  padding: '40px 100px',
  '@media(max-width: 992px)': {
    display: 'block',
    padding: '40px',
    '& div': {
      margin: '24px 0'
    }
  }
});

const Contact = () => {
  return (
    <div {...css({backgroundColor: colors.darkBlue, color: 'white'})}>

      <div {...gridContainer}>
        <div>
          <h4 >
        <span {...bottomBorder}>GET IN TOUCH</span>
      </h4>
          <ContactForm />
        </div>
        <div {...css({margin: 'auto', textAlign: 'center'})}>
          <iframe
            maxWidth="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="PureClean Rustington"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rustington,%20England+(PureClean)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            {...css({border: '4px solid white'})}
          >
          </iframe>
          <div {...css({padding: '16px', margin: '0 auto', textAlign: 'left'})}>
            <p><i className="fas fa-mobile-alt" /> Paul: 07702 113360</p>
            <p><i class="fas fa-at" /> purecleanwindow@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
