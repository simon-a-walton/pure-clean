import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";
import ContactForm from "../components/ContactForm";
import { gridContainer } from "../constants/styleRules";
import Logo from "../images/vanlogo.png";

const Contact = () => {
  return (
    <div {...css({ backgroundImage: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.mainBlue})`, color: "white", minHeight: "82vh"})}>
      <div {...gridContainer}>
        <div>
          <ContactForm />
        </div>
        <div {...css({ margin: "auto", textAlign: "center", "@media(max-width: 992px)":{ marginTop:"24px" } })}>
          <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="PureClean Rustington"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rustington,%20England+(PureClean)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            {...css({border: "2px solid white", borderRadius: "4px", height: "300px", "@media(max-width: 992px)": {height: "250px", width: "250px"}})}
          >
          </iframe>
          <div {...css({
            color: "black",
            padding: "16px",
            backgroundColor: "white",
            maxWidth:"350px",
            borderRadius:"4px",
            margin: "20px auto",
            "& a:hover": {
              color: colors.darkBlue
            }
          })}>
            <img
              src={Logo}
              width={200}
              alt="logo"
            />
            <div {...css({ padding:"12px", textAlign:"left" })}>
              <a href="tel:07702 113360" target="_blank" rel="noreferrer">
                <h6>
                  <i className="fas fa-mobile-alt" />
                  &nbsp; &nbsp; Paul: 07727 117136
                </h6>
              </a>
              <a href="mailto:purecleanwindow@outlook.com" target="_blank" rel="noreferrer">
                <h6>
                  <i className="fas fa-at" />
                  &nbsp; purecleanwindow@outlook.com
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
