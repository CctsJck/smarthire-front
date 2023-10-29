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


  const [Experiencia,setExperiencia] = useState(false)
  const [showExperienciaModal,setShowExperienciaModal]= useState(false);
  const [experienciaObj,setExperienciaObj]=useState();
  const [candidateSelect,setCandidateSelect]=useState();


  const [Educacion,setEducacion] = useState(false)
  const [showEducacionModal,setShowEducacionModal]= useState(false);
  const [educacionObj,setEducacionObj]=useState();


  const [Habilidades,setHabilidades] = useState(false)






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
        //console.log(response.data);
        setBusqueda(response.data);
      })
      .catch(function(error){
        if (error.response.status === 403){
          sessionStorage.clear();
          navigate("/login")
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
      url: `${import.meta.env.VITE_BACK_URL}result/filter/${pregunta.id}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("respuestas")
        console.log(response.data);
        console.log(response.data[0].candidate.cvResponse.cv)
        setResultados(response.data);
      })
      .catch(function(error){
        if (error.response.status === 403){
          sessionStorage.clear();
          navigate("/login")
        }
      });

    setFelicidad(true);
    setEnojo(true);
    setDisgusto(true);
    setMiedo(true);
    setTristeza(true);
    setSorpresa(true);
    setNeutral(true);
    setExperiencia(false)
    setEducacion(false)
    setHabilidades(false)
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
    setHabilidades(habilidadesChecked)
  }

  function handleExperencia(experiencia,candidate){
    setExperienciaObj(experiencia)
    console.log("mi candidato"+candidate)
    setCandidateSelect(candidate)
    setShowExperienciaModal(true)
    
  }

  function handleEducacion(educacion,candidate){
    setEducacionObj(educacion)
    setCandidateSelect(candidate)
    setShowEducacionModal(true)
  }

  return (
    <>
    <ModalExperiencia
        show={showExperienciaModal}
        onHide={() => setShowExperienciaModal(false)}
        candidato={candidateSelect}
        cv={experienciaObj}/>

<ModalEducacion
        show={showEducacionModal}
        onHide={() => setShowEducacionModal(false)}
        candidato={candidateSelect}
        cv={educacionObj}/>

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


      <div className="tabla-resultados">
        {resultados.length > 0 ? (
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className="col-md-10 d-flex mt-3 card">
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
                  {resultados.map((result) => (
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
                        <button class="btn btn-info" onClick={() => handleExperencia(JSON.parse(result.candidate.cvResponse.cv),result.candidate.name+" "+result.candidate.surename)}>Ver</button>
                      </td>
                      <td className={Educacion ? "" : "hidden"}>
                      <button class="btn btn-info" onClick={() => handleEducacion(JSON.parse(result.candidate.cvResponse.cv),result.candidate.name+" "+result.candidate.surename)}>Ver</button>
                      </td>
                      <td className={Habilidades ? "" : "hidden"}>
                        {JSON.parse(result.candidate.cvResponse.cv).habilidades[0].skills.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className="col-md-10 d-flex mt-2 card text-center">
              <p class='fw-bold'> La pregunta seleccionada no tiene resultados todavia</p>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
