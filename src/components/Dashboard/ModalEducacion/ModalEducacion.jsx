import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalEducacion = (props) => {


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
            <h3>Experiencia de {props.candidato}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cv !== undefined ? (
            <ul class="list mt-2 mb-2">
              {props.cv.educacion === 0 && (
                <p class="fw-bold">No hay preguntas</p>
              )}
              {props.cv.educacion.map((edu) => {
                return (
                  <>
                  <div class="border-bottom">
                  <p class="fw-bold">Título: {edu.degree}</p>
                  <p>Instituto: {edu.institute}</p>
                  </div>
                  </>
                );
              })}
            </ul>
          ) : props.cv === undefined ? (
            <div></div>
          ) : (
            <div>Código HTML predeterminado o para otras opciones</div>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};