import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CryptoJS from "crypto-js";

export const ModalShare = (props) => {
  const idEncrypted = CryptoJS.AES.encrypt(
    props.id.toString(),
    import.meta.env.VITE_SECRET_KEY
  );
  const link = `${import.meta.env.VITE_FRONT_URL}candidate/${encodeURIComponent(
    idEncrypted
  )}`;

  const [click, setClick] = useState(false);
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
          <div class="d-inline-flex text-center">
            <button
              class="btn btn-info text-white"
              onClick={() => {
                setClick(true);
                navigator.clipboard.writeText(link.toString());
              }}
            >
              Click aquí para copiar el vínculo
              <div></div>
              {click === false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-clipboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              ) : click === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#03FA6E"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <div>Código HTML predeterminado o para otras opciones</div>
              )}
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn-success">
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
