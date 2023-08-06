import React from 'react'
import { Modal,Button } from 'react-bootstrap'


export const ModalDelete = (props) =>{

    return(

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
                {props.text}
            </p>
        </Modal.Body>
        <Modal.Footer>

        <Button onClick={props.onHide} className="btn-success">Cancelar</Button>


        <Button className="btn-danger" onClick = {() => props.handleBorrado(props.id)} >Borrar</Button>


        </Modal.Footer>
    </Modal>
  
    )
}