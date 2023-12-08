import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useParams, useNavigate } from "react-router-dom";
import { ModalPregunta } from "./ModalPregunta/ModalPregunta";
import { ModalFiltro } from "./ModalFiltro/ModalFiltro";
import { ModalExperiencia } from "./ModalExperiencia/ModalExperiencia";
import axios from "axios";
import CryptoJS from "crypto-js";
import { ModalEducacion } from "./ModalEducacion/ModalEducacion";
export const Dashboard = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [showModalFiltro, setShowModalFiltro] = React.useState(false);
  const [busqueda, setBusqueda] = useState({});
  const [bandera, setBandera] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [order, setOrder] = useState("ASC");
  const params = useParams();
  const [success, setSuccess] = useState(false);
  const [Felicidad, setFelicidad] = useState(true);
  const [Enojo, setEnojo] = useState(true);
  const [Disgusto, setDisgusto] = useState(true);
  const [Miedo, setMiedo] = useState(true);
  const [Tristeza, setTristeza] = useState(true);
  const [Sorpresa, setSorpresa] = useState(true);
  const [Neutral, setNeutral] = useState(true);

  const [Experiencia, setExperiencia] = useState(false);
  const [showExperienciaModal, setShowExperienciaModal] = useState(false);
  const [experienciaObj, setExperienciaObj] = useState();
  const [candidateSelect, setCandidateSelect] = useState();

  const [Educacion, setEducacion] = useState(false);
  const [showEducacionModal, setShowEducacionModal] = useState(false);
  const [educacionObj, setEducacionObj] = useState();

  const [Habilidades, setHabilidades] = useState(false);

  const [search, setSearch] = useState("");
  const [resultadosFiltrados, setResultadosFiltrados] = useState(resultados);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...resultadosFiltrados].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setResultadosFiltrados(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...resultadosFiltrados].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setResultadosFiltrados(sorted);
      setOrder("ASC");
    }
  };
  function elegirPregunta() {
    setResultados([]);
    setShowModal(true);
  }
  function aplicarFiltro() {
    setShowModalFiltro(true);
  }
  useEffect(() => {
    let idBusqueda = CryptoJS.AES.decrypt(
      params.idBusqueda,
      import.meta.env.VITE_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACK_URL}search/${idBusqueda}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setBusqueda(response.data)
        setSearch("");
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          sessionStorage.clear();
          navigate("/login");
        }
      });
  }, []);
  useEffect(() => {
    if (JSON.stringify(busqueda) !== "{}") {
      setBandera(true);
    }
  }, [busqueda]);


  useEffect(()=>{
    console.log("resultados")
    console.log(resultados)
    console.log(resultadosFiltrados)
  },[resultados])

  useEffect(()=>{
    console.log("resultadosfiltrados")
    console.log(resultados)
    console.log(resultadosFiltrados)
  },[resultadosFiltrados])

  function handlePreguntaSelect(pregunta) {
    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACK_URL}result/filter/${pregunta.id}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setResultadosFiltrados(response.data)
        setResultados(response.data)
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          sessionStorage.clear();
          navigate("/login");
        }
      });

    setFelicidad(true);
    setEnojo(true);
    setDisgusto(true);
    setMiedo(true);
    setTristeza(true);
    setSorpresa(true);
    setNeutral(true);
    setExperiencia(false);
    setEducacion(false);
    setHabilidades(false);
  }

  function handleFiltroSelect(
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
  ) {
    setFelicidad(felicidadChecked);
    setEnojo(enojoChecked);
    setDisgusto(disgustoChecked);
    setMiedo(miedoChecked);
    setTristeza(tristezaChecked);
    setSorpresa(sorpresaChecked);
    setNeutral(neutralChecked);
    setExperiencia(experienciaChecked);
    setEducacion(educacionChecked);
    setHabilidades(habilidadesChecked);
  }

  function handleExperencia(experiencia, candidate) {
    setExperienciaObj(experiencia);
    setCandidateSelect(candidate);
    setShowExperienciaModal(true);
  }

  function handleEducacion(educacion, candidate) {
    setEducacionObj(educacion);
    setCandidateSelect(candidate);
    setShowEducacionModal(true);
  }

  function handleFilter(e) {
    if (e === "" || search === "") {
      setResultadosFiltrados(resultados);
    }
    setResultadosFiltrados(
      resultados.filter((resultado) => resultado.candidate.cvResponse.cv.toLowerCase().includes(e.toLowerCase()))
    );
    console.log(
      resultados.filter((resultado) =>
        resultado.candidate.name.toLowerCase().includes(e.toLowerCase())
      )
    );
  }

  return (
    <>
      <ModalExperiencia
        show={showExperienciaModal}
        onHide={() => setShowExperienciaModal(false)}
        candidato={candidateSelect}
        cv={experienciaObj}
      />

      <ModalEducacion
        show={showEducacionModal}
        onHide={() => setShowEducacionModal(false)}
        candidato={candidateSelect}
        cv={educacionObj}
      />

<div className="container text-center">
        <div className="d-inline-flex card rounded pt-2 pb-2 ps-4 pe-4 mt-2 mb-2">
          <h1 className="mx-5">{busqueda.name}</h1>
        </div>
      </div>
      <div class="container">
        <div class="card ps-5 pe-5 mt-1">
        <div class ="row">
          <div class ="col-6">
          <h3 class="mt-2 mb-2">
            Elegir pregunta la pregunta a analizar
          </h3>
          </div>
          <div class="col-4">
            <button
              type="button"
              class="btn btn-primary mt-2 mb-2 w-100"
              onClick={elegirPregunta}
            >
              Seleccione la pregunta que quiere analizar
            </button>
          </div>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="card ps-5 pe-5 mt-3">
          <div class="row">
            <div class="col-6">
              <h4 class="mt-2 mb-2">Seleccione un Filtro(Opcional)</h4>
            </div>
            <div class="col-4 text-center">
              <button
                type="button"
                className="btn btn-primary mt-2 mb-2"
                onClick={aplicarFiltro}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                </svg>
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

      <ModalFiltro
        show={showModalFiltro}
        onHide={() => setShowModalFiltro(false)}
        title="Filtros"
        preguntas={busqueda.questions}
        handleFiltroSelect={handleFiltroSelect}
        Felicidad={Felicidad}
        Enojo={Enojo}
        Disgusto={Disgusto}
        Miedo={Miedo}
        Tristeza={Tristeza}
        Sorpresa={Sorpresa}
        Neutral={Neutral}
        Experiencia={Experiencia}
        Educacion={Educacion}
        Habilidades={Habilidades}
      />

      <div class="container">
        <div class="card ps-5 pe-5 mt-1">
          <div class="row">
            <div class="col-6">
              <h4 class="mt-2 mb-2">Buscar</h4>
            </div>
            <div class="col-4 mt-2 mb-2">
              <input
                type="text"
                class="form-control"
                id="surnameID"
                placeholder="Ingrese una palabra clave"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleFilter(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tabla-resultados">
        <div className="container">
          <div className="card text-center d-flex mt-3">
            {resultadosFiltrados.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th onClick={() => sorting("name")}>Candidato</th>
                    <th
                      onClick={() => sorting("happy")}
                      className={Felicidad ? "" : "hidden"}
                    >
                      Felicidad
                    </th>
                    <th
                      onClick={() => sorting("angry")}
                      className={Enojo ? "" : "hidden"}
                    >
                      Enojo
                    </th>
                    <th
                      onClick={() => sorting("disgust")}
                      className={Disgusto ? "" : "hidden"}
                    >
                      Disgusto
                    </th>
                    <th
                      onClick={() => sorting("fear")}
                      className={Miedo ? "" : "hidden"}
                    >
                      Miedo
                    </th>
                    <th
                      onClick={() => sorting("sad")}
                      className={Tristeza ? "" : "hidden"}
                    >
                      Tristeza
                    </th>
                    <th
                      onClick={() => sorting("surprise")}
                      className={Sorpresa ? "" : "hidden"}
                    >
                      Sorpresa
                    </th>
                    <th
                      onClick={() => sorting("neutral")}
                      className={Neutral ? "" : "hidden"}
                    >
                      Neutral
                    </th>
                    <th
                      onClick={() => sorting("experiencia")}
                      className={Experiencia ? "" : "hidden"}
                    >
                      Experiencia
                    </th>
                    <th
                      onClick={() => sorting("educacion")}
                      className={Educacion ? "" : "hidden"}
                    >
                      Educacion
                    </th>
                    <th
                      onClick={() => sorting("habilidades")}
                      className={Habilidades ? "text-center" : "hidden"}
                    >
                      Habilidades
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultadosFiltrados.map((result) => (
                    <tr key={result.id}>
                      <td>
                        {result.candidate.name +
                          " " +
                          result.candidate.surename}
                      </td>
                      <td className={Felicidad ? "" : "hidden"}>
                        {(result.happy * 100).toFixed(2)}%
                      </td>
                      <td className={Enojo ? "" : "hidden"}>
                        {(result.angry * 100).toFixed(2)}%
                      </td>
                      <td className={Disgusto ? "" : "hidden"}>
                        {(result.disgust * 100).toFixed(2)}%
                      </td>
                      <td className={Miedo ? "" : "hidden"}>
                        {(result.fear * 100).toFixed(2)}%
                      </td>
                      <td className={Tristeza ? "" : "hidden"}>
                        {(result.sad * 100).toFixed(2)}%
                      </td>
                      <td className={Sorpresa ? "" : "hidden"}>
                        {(result.surprise * 100).toFixed(2)}%
                      </td>
                      <td className={Neutral ? "" : "hidden"}>
                        {(result.neutral * 100).toFixed(2)}%
                      </td>
                      <td className={Experiencia ? "" : "hidden"}>
                        <button
                          class="btn btn-info"
                          onClick={() =>
                            handleExperencia(
                              JSON.parse(result.candidate.cvResponse.cv),
                              result.candidate.name +
                                " " +
                                result.candidate.surename
                            )
                          }
                        >
                          Ver
                        </button>
                      </td>
                      <td className={Educacion ? "" : "hidden"}>
                        <button
                          class="btn btn-info"
                          onClick={() =>
                            handleEducacion(
                              JSON.parse(result.candidate.cvResponse.cv),
                              result.candidate.name +
                                " " +
                                result.candidate.surename
                            )
                          }
                        >
                          Ver
                        </button>
                      </td>
                      <td className={Habilidades ? "" : "hidden"}>
                        {JSON.parse(result.candidate.cvResponse.cv).habilidades
                          .length === 0 ? (
                          <p>---</p>
                        ) : (
                          JSON.parse(
                            result.candidate.cvResponse.cv
                          ).habilidades[0].skills.join(", ")
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p class="fw-bold">
                {" "}
                La pregunta seleccionada no tiene resultados todavia
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;