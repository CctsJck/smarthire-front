    import React from "react";
    import { Modal, Button } from "react-bootstrap";

    export const ModalFiltro = (props) => {
    console.log(props);

    const [tristezaChecked, setTristezaChecked] = React.useState(props.Tristeza);
    const [enojoChecked, setEnojoChecked] = React.useState(props.Enojo);
    const [disgustoChecked, setDisgustoChecked] = React.useState(props.Disgusto);
    const [miedoChecked, setMiedoChecked] = React.useState(props.Miedo);
    const [sorpresaChecked, setSorpresaChecked] = React.useState(props.Sorpresa);
    const [felicidadChecked, setFelicidadChecked] = React.useState(props.Felicidad);
    const [neutralChecked, setNeutralChecked]= React.useState(props.Neutral)

    const handleTristezaChange = (event) => {
        setTristezaChecked(event.target.checked);
      };

    const handleEnojoChange = (event) => {
        setEnojoChecked(event.target.checked);
      };
    
    const handleDisgustoChange = (event) => {
        setDisgustoChecked(event.target.checked);
      };

    const handleMiedoChange = (event) => {
        setMiedoChecked(event.target.checked);
      }
    
    const handleSorpresaChange = (event) => {
        setSorpresaChecked(event.target.checked);
      };
    
    const handleFelicidadChange = (event) => {
        setFelicidadChecked(event.target.checked);
      };


    const handleNeutralChange = (event) => {
        setNeutralChecked(event.target.checked);
      };

      

    

    

    return (
        <>
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
            <h2 class="mb-4">Emociones</h2>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Enojo"
                checked={enojoChecked}
                onChange={handleEnojoChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Enojo
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Disgusto"
                checked={disgustoChecked}
                onChange={handleDisgustoChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Disgusto
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Miedo"
                checked={miedoChecked}
                onChange={handleMiedoChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Miedo
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Tristeza"
                checked={tristezaChecked}
                onChange={handleTristezaChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Trizteza
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Sorpresa"
                checked={sorpresaChecked}
                onChange={handleSorpresaChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Sorpresa
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Felicidad"
                checked={felicidadChecked}
                onChange={handleFelicidadChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Felicidad
                </label>
            </div>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Neutral"
                checked={neutralChecked}
                onChange={handleNeutralChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Neutral
                </label>
            </div>
            <div className="text-center">
                <button
                type="button"
                className="btn btn-primary custom-btn mx-2 my-1"
                onClick={() => {
                    props.handleFiltroSelect(tristezaChecked,enojoChecked,disgustoChecked,miedoChecked,sorpresaChecked,felicidadChecked,neutralChecked);
                    console.log(tristezaChecked)
                    console.log(enojoChecked)
                    console.log(disgustoChecked)
                    console.log(miedoChecked)
                    console.log(sorpresaChecked)
                    console.log(felicidadChecked)
                    props.onHide(); 
                  }}
                >
                Aplicar filtros
                </button>
            </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </>
    );
    };
