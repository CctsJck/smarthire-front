import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalFiltro = (props) => {

  const [tristezaChecked, setTristezaChecked] = React.useState(props.Tristeza);
  const [enojoChecked, setEnojoChecked] = React.useState(props.Enojo);
  const [disgustoChecked, setDisgustoChecked] = React.useState(props.Disgusto);
  const [miedoChecked, setMiedoChecked] = React.useState(props.Miedo);
  const [sorpresaChecked, setSorpresaChecked] = React.useState(props.Sorpresa);
  const [felicidadChecked, setFelicidadChecked] = React.useState(
    props.Felicidad
  );
  const [neutralChecked, setNeutralChecked] = React.useState(props.Neutral);
  const [experienciaChecked, setExperienciaChecked] = React.useState(
    props.Experiencia
  );

  const [educacionChecked, setEducacionChecked] = React.useState(
    props.Educacion
  );
  const [habilidadesChecked, setHabilidadesChecked] = React.useState(
    props.Habilidades
  );

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
  };

  const handleSorpresaChange = (event) => {
    setSorpresaChecked(event.target.checked);
  };

  const handleFelicidadChange = (event) => {
    setFelicidadChecked(event.target.checked);
  };

  const handleNeutralChange = (event) => {
    setNeutralChecked(event.target.checked);
  };

  const handleExperienciaChange = (event) => {
    setExperienciaChecked(event.target.checked);
  };

  const handleEducacionChange = (event) => {
    setEducacionChecked(event.target.checked);
  };

  const handleHabilidadesChecked = (event) => {
    setHabilidadesChecked(event.target.checked);
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
          <div class="row mb-3">
            <div class="col border-end">
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
            </div>
            <div class="col">
            <h2 class="mb-4">Curriculum</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Experiencia"
                  checked={experienciaChecked}
                  onChange={handleExperienciaChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Experiencia
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Educacion"
                  checked={educacionChecked}
                  onChange={handleEducacionChange}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Educacion
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Habilidades"
                  checked={habilidadesChecked}
                  onChange={handleHabilidadesChecked}
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Habilidades
                </label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary custom-btn mx-2 my-1"
              onClick={() => {
                props.handleFiltroSelect(
                  tristezaChecked,
                  enojoChecked,
                  disgustoChecked,
                  miedoChecked,
                  sorpresaChecked,
                  felicidadChecked,
                  neutralChecked,
                  experienciaChecked,
                  educacionChecked,
                  habilidadesChecked
                );
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
