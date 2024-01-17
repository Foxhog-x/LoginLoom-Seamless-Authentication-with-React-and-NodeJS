/* eslint-disable react/prop-types */
import "../App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formpage } from "../pages/Formpage";

export const ModalAddUser = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_div">
            <Formpage />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
