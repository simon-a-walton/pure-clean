import React from "react";
import { css } from "glamor";
import { Modal, Button } from 'react-bootstrap';
import { buttonStyle, bottomBorder } from "../constants/styleRules";
import Rain from "../images/rain.jpg";

const RainModal = (props) => {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          <h4 >
            <span {...bottomBorder}>Our Rain Guarantee</span>
            &nbsp; <i className="fas fa-umbrella" />
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body {...css({ textAlign: "center" })}>
        <br />
        <img
          src={Rain}
          width={300}
          alt="Rain Guarantee"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          {...buttonStyle}
        >
          <h5>
            Close
          </h5>
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default RainModal;
