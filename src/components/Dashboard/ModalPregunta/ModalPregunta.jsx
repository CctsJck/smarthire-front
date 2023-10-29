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
        <div class="list-group"> 
        {props.preguntas.length === 0 && "No hay pregunta"}
                    {props.preguntas.map(pregunta =>{
                        return(
                            <div>
                                <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      props.handlePreguntaSelect(pregunta);
                      props.onHide(); 
                    }}
                  >
                    {pregunta.name}
                  </a>
                            </div>
                        )
                    })}
        </div>   
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    </Modal>
    </>
  
    )
};