import React from "react";
import { css } from "glamor";
import { buttonStyle, bottomBorder } from "../constants/styleRules";

const inputStyle = css({
  width: "100%",
  border: "1px solid white",
  borderRadius: "8px"
});


export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mzbkgjnk"
          method="POST"
          {...css({ color: "white" })}
        >
          <h4
            {...css({ paddingBottom: "24px", "@media(max-width: 992px)": {textAlign: "center" }})}>
            <span {...bottomBorder}>
              GET IN TOUCH
            </span>
          </h4>
          <p>
            Want to know more about our services or prices? Please fill out this form and one of
            our friendly team will get back to you
          </p>
          <br />
          <label>Name</label><br />
          <input type="text" name="name" {...inputStyle} required/><br /><br />
          <label>Email</label><br />
          <input type="email" name="email" {...inputStyle} required/><br /><br />
          <label>Message</label><br />
          <textarea type="text" name="message" rows="4" {...inputStyle}></textarea><br /><br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button {...buttonStyle}><h5>Submit</h5></button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
