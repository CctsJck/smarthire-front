import React from 'react'
import { Modal,Button } from 'react-bootstrap'


export const ModalPregunta = (props) => {
    
    return(
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
                {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                ACA VA LA LIST
            </p>
        </Modal.Body>
        <Modal.Footer>

        <Button onClick={props.onHide} className="btn-success">Cancelar</Button>


        </Modal.Footer>
    </Modal>
    </>
  
    )
};