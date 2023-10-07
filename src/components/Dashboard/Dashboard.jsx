import React, { useEffect, useState} from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { ModalPregunta } from "./ModalPregunta/ModalPregunta";
import { ModalFiltro } from "./ModalFiltro/ModalFiltro";
import axios from "axios";

export const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalFiltro, setShowModalFiltro] = React.useState(false);
  const [busqueda, setBusqueda] = useState({});
  const [bandera, setBandera] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [order, setOrder] = useState("ASC");
  const params = useParams();

  const [Felicidad, setFelicidad] = useState(true);
  const [Enojo, setEnojo] = useState(true);
  const [Disgusto, setDisgusto] = useState(true);
  const [Miedo, setMiedo] = useState(true);
  const [Tristeza, setTristeza] = useState(true);
  const [Sorpresa, setSorpresa] = useState(true);
  const [Neutral, setNeutral] = useState(true);


  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...resultados].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setResultados(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...resultados].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setResultados(sorted);
      setOrder("ASC");
    }
  };

  function elegirPregunta() {
    setResultados([]);
    setShowModal(true);
  }

  function aplicarFiltro(){
    
    setShowModalFiltro(true);
  }

  useEffect(() => {
    let config = {
      method: "get",
      url: `http://localhost:5000/search/${params.idBusqueda}`,
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
        if (error.response.status === 404) setSuccess("No Tiene búsquedas");
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

      setFelicidad(true);
      setEnojo(true);
      setDisgusto(true);
      setMiedo(true);
      setTristeza(true);
      setSorpresa(true);
      setNeutral(true)
  }

  function handleFiltroSelect(tristezaChecked,enojoChecked,disgustoChecked,miedoChecked,sorpresaChecked,felicidadChecked,neutralChecked) {
    setFelicidad(felicidadChecked);
    setEnojo(enojoChecked);
    setDisgusto(disgustoChecked);
    setMiedo(miedoChecked);
    setTristeza(tristezaChecked);
    setSorpresa(sorpresaChecked);
    setNeutral(neutralChecked);
  }

  return (
    <>
      <div className="d-flex justify-content-start align-items-center mx-5 mt-4">
        <div className="col-md-10 d-flex mx-5 mt-4">
          <h1 className="mx-5">{busqueda.name}</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-2">
        <div className="col-md-10 d-flex card">
          <h3 className="d-flex justify-content-center my-4">
            Elegir pregunta la pregunta a analizar, para ver las respuestas de
            los candidatos
          </h3>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-3 d-flex mb-4">
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
      <div className="d-flex justify-content-center mx-2">
        <div className="col-md-10 d-flex mt-2 card align-items-center">
          <h3 className="d-flex justify-content-center mt-4">Filtros</h3>
          <button
            type="button"
            className="btn btn-primary custom-btn mx-2 my-1"
            onClick={aplicarFiltro}
          >
            +
          </button>
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

      <ModalFiltro
        show={showModalFiltro}
        onHide={() => setShowModalFiltro(false)}
        title="Filtros"
        preguntas={busqueda.questions}
        handleFiltroSelect={handleFiltroSelect}
        Felicidad = {Felicidad}
        Enojo = {Enojo}
        Disgusto = {Disgusto}
        Miedo = {Miedo}
        Tristeza = {Tristeza}
        Sorpresa = {Sorpresa}
        Neutral = {Neutral}
      />

      <div className="tabla-resultados">
        {resultados.length > 0 ? (
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className="col-md-10 d-flex mt-3 card">
              <table>
                <thead>
                  <tr>
                    <th onClick={() => sorting("name")}>Candidato</th>
                    <th onClick={() => sorting("happy")} className={Felicidad ? "" : "hidden"}>Felicidad</th>
                    <th onClick={() => sorting("angry")} className={Enojo ? "" : "hidden"}>Enojo</th>
                    <th onClick={() => sorting("disgust")} className={Disgusto ? "" : "hidden"}>Disgusto</th>
                    <th onClick={() => sorting("fear")} className={Miedo ? "" : "hidden"}>Miedo</th>
                    <th onClick={() => sorting("sad")} className={Tristeza ? "" : "hidden"}>Tristeza</th>
                    <th onClick={() => sorting("surprise")} className={Sorpresa ? "" : "hidden"}>Sorpresa</th>
                    <th onClick={() => sorting("neutral")} className={Neutral ? "" : "hidden"}>Neutral</th>
                  </tr>
                </thead>
                <tbody>
                  {resultados.map((result) => (
                    <tr key={result.id}>
                      <td>
                        {result.candidate.name + " " + result.candidate.surename}
                      </td>
                      <td className={Felicidad ? "" : "hidden"}>{(result.happy* 100).toFixed(2)}%</td>
                      <td className={Enojo ? "" : "hidden"}>{(result.angry* 100).toFixed(2)}%</td>
                      <td className={Disgusto ? "" : "hidden"}>{(result.disgust* 100).toFixed(2)}%</td>
                      <td className={Miedo ? "" : "hidden"}>{(result.fear* 100).toFixed(2)}%</td>
                      <td className={Tristeza ? "" : "hidden"}>{(result.sad* 100).toFixed(2)}%</td>
                      <td className={Sorpresa ? "" : "hidden"}>{(result.surprise* 100).toFixed(2)}%</td>
                      <td className={Neutral ? "" : "hidden"}>{(result.neutral* 100).toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
      
    </>
  );
};

export default Dashboard;
