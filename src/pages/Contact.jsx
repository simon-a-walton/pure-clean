import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import ContactForm from "../components/ContactForm";

const gridContainer = css({
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  padding: '100px',
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
    <div className="contact" {...css({backgroundColor: colors.lightBlue})}>
      <div {...gridContainer}>
        <div>
          <ContactForm />
        </div>
        <div {...css({margin: '0 auto'})}>
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
          <div {...css({backgroundColor: 'white', borderRadius: '8px', padding: '16px', maxWidth: '300px', margin: '0 auto'})}>
            <p><i className="fas fa-mobile-alt" /> Paul: 07702 113360</p>
            <p><i class="fas fa-at" /> purecleanwindow@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
