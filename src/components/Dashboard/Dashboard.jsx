import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { ModalPregunta } from "./ModalPregunta/ModalPregunta";
import axios from "axios";

export const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [busqueda, setBusqueda] = useState({});
  const [bandera, setBandera] = useState(false);
  const [resultados, setResultados] = useState([]);

  function elegirPregunta() {
    setShowModal(true);
  }

  useEffect(() => {
    let config = {
      method: "get",
      url: `http://localhost:5000/search/3`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setBusqueda(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 404) setSuccess("No Tiene busquedas");
        else {
          navigate("/login");
        }
      });
  }, []);

  useEffect(() => {
    if (JSON.stringify(busqueda) !== "{}") {
      setBandera(true);
    }
  }, [busqueda]);

  function handlePreguntaSelect(pregunta) {
    console.log(pregunta);

    let config = {
      method: "get",
      url: `http://localhost:5000/result/filter/10`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setResultados(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 404) setSuccess("No Tiene resultados");
        else {
          navigate("/login");
        }
      });

  }

  return (
    <>
      <div className="col-md-6 d-flex justify-content-end mx-5 mt-5">
        <h1>{busqueda.name}</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-2">
        <div className="col-md-10 d-flex card">
          <h3 className="d-flex justify-content-center my-4">
            Elegir pregunta la pregunta a analizar, para ver las respuestas de los candidatos
          </h3>
          <div class="d-flex justify-content-center align-items-center">
            <div class="col-md-3 d-flex mb-4">
              <button
                type="button"
                className="btn btn-primary custom-btn mx-5 my-3"
                onClick={elegirPregunta}>Busca la pregunta que quieras analizar</button>
            </div>
          </div>
        </div>
      </div>
      {bandera ? (
        <ModalPregunta
          show={showModal}
          onHide={() => setShowModal(false)}
          title="Elija la pregunta a analizar, para ver los resultados de los candidatos"
          preguntas={busqueda.questions}
          handlePreguntaSelect={handlePreguntaSelect}
        />
      ) : (
        <></>
      )}
    </>
  );
};
