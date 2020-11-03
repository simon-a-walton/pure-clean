import React from "react";
import { css } from "glamor";
import { colors } from "../constants/styleConstants";

const formContainer = css({
  backgroundColor: colors.darkBlue,
  color: 'white',
  height: '100%',
  padding: '30px',
  margin: '0 16px',
  borderRadius: '8px'
});

const inputStyle = css({
  width: '100%',
  border: '1px solid white',
  borderRadius: '8px'
});

const buttonStyle = css({
  backgroundColor: colors.darkBlue,
  color: 'white',
  border: `2px solid ${colors.green}`,
  borderRadius: '8px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white'
  }
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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mzbkgjnk"
        method="POST"
        {...formContainer}
      >
        <label>Name</label><br />
        <input type="text" name="name" {...inputStyle} required/><br /><br />
        <label>Email</label><br />
        <input type="email" name="email" {...inputStyle} required/><br /><br />
        <label>Message</label><br />
        <textarea type="text" name="message" rows="4" {...inputStyle}></textarea><br /><br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button {...buttonStyle}><h5>Submit</h5></button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
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
