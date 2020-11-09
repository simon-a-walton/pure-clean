import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { buttonStyle, bottomBorder } from "../constants/styleRules";
import Logo from "../images/logo.jpg";

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
      <Modal.Body>
        <br />
        <p>
          It is our policy to complete a scheduled job if it is raining. In the event of
          light precipitation we will continue as scheduled because rain does not affect the cleaning.
          In the event of heavy rain or showers, we will return within 1 to 2 days to complete the outside work.
          The interior of all windows are completed as scheduled so there is no disruption to your schedule.
        </p>
         <img
          src={Logo}
          width={150}
          alt="Logo"
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
