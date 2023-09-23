import React from "react";
import "./Dashboard.css";
import { ModalPregunta} from './ModalPregunta/ModalPregunta'

export const Dashboard = () => {
    
    const [showModal, setShowModal] = React.useState(false);
    
    function elegirPregunta(){
        setShowModal(true)
    }

  return (
    <>
      <div className="col-md-6 d-flex justify-content-end mx-5 mt-5">
        <h1>Busqueda: Pasantia mercado libre #traer del back</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-2">
        <div className="col-md-10 d-flex card">
          <h3 className="d-flex justify-content-center my-4">Elegir pregunta la pregunta a analizar, para ver las respuestas de los candidatos</h3>
          <div class="d-flex justify-content-center align-items-center">
            <div class="col-md-3 d-flex mb-4">
                <button type="button" className="btn btn-primary custom-btn mx-5 my-3" onClick={elegirPregunta} >Busca la pregunta que quieras analizar</button>
            </div>
        </div>
        </div>
      </div>

      <ModalPregunta
                show={showModal} 
                onHide={() => setShowModal(false)} 
                title='Elegir pregunta la pregunta a analizar, para ver las respuestas de los candidatos'

            />
    </>
  );
};