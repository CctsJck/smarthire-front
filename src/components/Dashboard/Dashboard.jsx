import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { ModalPregunta } from "./ModalPregunta/ModalPregunta";
import axios from "axios";

export const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [busqueda, setBusqueda] = useState({});
  const [bandera, setBandera] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [order, setOrder] = useState("ASC")
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...resultados].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1
      );
      setResultados(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...resultados].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
      );
      setResultados(sorted);
      setOrder("ASC");
    }
  };

  function elegirPregunta() {
    setResultados([]);
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
      url: `http://localhost:5000/result/filter/${pregunta.id}`,
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
      <div className="d-flex justify-content-start align-items-center mx-5 mt-4">
        <div className="col-md-10 d-flex mx-5 mt-4">
          <h1 class="mx-5">{busqueda.name}</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-2">
        <div className="col-md-10 d-flex card">
          <h3 className="d-flex justify-content-center my-4">
            Elegir pregunta la pregunta a analizar, para ver las respuestas de
            los candidatos
          </h3>
          <div class="d-flex justify-content-center align-items-center">
            <div class="col-md-3 d-flex mb-4">
              <button
                type="button"
                className="btn btn-primary custom-btn mx-5 my-3"
                onClick={elegirPregunta}
              >
                Busca la pregunta que quieras analizar
              </button>
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

      <div className="tabla-resultados">
        {
          resultados.length > 0 ? (
            <div className="d-flex justify-content-center align-items-center mx-2">
              <div className="col-md-10 d-flex mt-3 card">
                <table>
                  <thead>
                    <th onClick={()=>sorting("name")}>Candidato</th>
                    <th onClick={()=>sorting("happy")}>Felicidad</th>
                    <th onClick={()=>sorting("angry")}>Enojo</th>
                    <th onClick={()=>sorting("disgust")}>Disgusto</th>
                    <th onClick={()=>sorting("fear")}>Miedo</th>
                    <th onClick={()=>sorting("sad")}>Tristeza</th>
                    <th onClick={()=>sorting("surprise")}>Sorpresa</th>
                  </thead>
                  <tbody>
                    {resultados.map((result)=>(
                        <tr key={result.id}>
                            <td>{result.candidate.name+' '+result.candidate.surename}</td>
                            <td>{result.happy}</td>
                            <td>{result.angry}</td>
                            <td>{result.disgust}</td>
                            <td>{result.fear}</td>
                            <td>{result.sad}</td>
                            <td>{result.surprise}</td>
                        </tr>

                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null /* Agrega una parte para el caso contrario si es necesario */
        }
      </div>
    </>
  );
};
