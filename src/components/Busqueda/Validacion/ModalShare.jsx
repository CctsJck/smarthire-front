import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import CryptoJS from 'crypto-js'


export const ModalShare = (props) =>{


    const idEncrypted =  CryptoJS.AES.encrypt(props.id.toString(), import.meta.env.VITE_SECRET_KEY)
    const link= `${import.meta.env.VITE_FRONT_URL}candidate/${encodeURIComponent(idEncrypted)}`;
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

            <div class='text-center'>
            <p>
                {props.text}
            </p>
            <button class="btn btn-info" onClick={navigator.clipboard.writeText(link.toString())}>
                asdfasdfasdfasdf
            </button>
            </div>
        </Modal.Body>
        <Modal.Footer>

        <Button onClick={props.onHide} className="btn-success">Cancelar</Button>


        <Button className="btn-danger" >Borrar</Button>


        </Modal.Footer>
    </Modal>
  
    )
}