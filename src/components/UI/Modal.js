import React from "react";
import { Modal } from "react-bootstrap";
import Login from "../Pages/Login";
function ModalNew(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      keepMounted
    >
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  );
}

export default ModalNew;
