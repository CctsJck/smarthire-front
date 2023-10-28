import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalStart = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Estamos por comenzar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Te pedimos que recuerdes lo siguiente</h3>
            <ul>
              <li class="fw-bold">
                Activa los persmisos para acceder a la camara y video
              </li>
              <li class="fw-bold">Solo hay un intento por pregunta</li>
              <li class= "fw-bold">
                No se puede terminar antes, solo se podrá avanzar cuando termine
                el timer
              </li>
            </ul>
          </div>
          <div>
            <button
              class="btn btn-success"
              onClick={() => {
                props.comenzar();
                props.onHide();
              }}
            >
              Comenzar
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
