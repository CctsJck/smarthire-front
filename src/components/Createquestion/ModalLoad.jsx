import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalLoad = (props) => {

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="text-center">
          <p>{props.text}</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide} className="btn-success">Cancelar</Button>


<Button className="btn-danger" onClick = {props.handleLoadequestion} >Borrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
