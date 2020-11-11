import React from "react";
import { css } from "glamor";
import { Modal, Button } from 'react-bootstrap';
import { bottomBorder } from "../constants/styleRules";
import { buttonStyle } from "../components/Button";

import UmbrellaBG from "../images/UmbrellaBG.png";

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
      <Modal.Body {...css({
        backgroundImage: `url(${UmbrellaBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      })}>
        <br />
        <p>
          I offer a regular service to my customers, and if I am going to do that, then I need to be
          working out on the rainy days too. I offer 100% satisfaction guarantee anyway, if I have cleaned
          your windows (raining or not) and if they are not cleaned right, I will happily do them again for free.
          I would rather clean them again, and you be happy, than you being unsatisfied with my service.
          So I 'put my money where my mouth is' regarding cleaning windows in the rain.
        </p>
        <br />
        <p>
          Some days it is raining too heavily for practical and safe working conditions. Then, on those days,
          I do not clean windows. Otherwise, you will see me working out in the rain as my customers want a regular,
          reliable service, and it makes no difference at all to the cleanliness of your windows.
        </p>
        <br />
        <p>
          I <strong>must be notified within 24 hours</strong> after cleaning if you are not happy with the service.
        </p>
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
