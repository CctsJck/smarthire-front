import React, { useEffect, useState } from "react";
import { QuestionList } from "./QuestionList/QuestionList";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { ModalDeleteQuestion } from "./Validacion/ModalDeleteQuestion";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import CryptoJS from "crypto-js";

export const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  /*const [showEditModal, setShowEditModal] =useState(false)*/
  const [idToDelete, setIdToDelete] = useState("");
  const [idToEdit, setIdToEdit] = useState("");
  const [success, setSuccess] = useState("");
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let idBusqueda = CryptoJS.AES.decrypt(params.searchId, import.meta.env.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    console.log(idBusqueda)
    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACK_URL}search/${idBusqueda}` /*ver con gonza (Agregar parametro Route)*/,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.questions);
        setQuestions(response.data.questions);
      })
      .catch(function (error) {
        setSuccess("No Tiene preguntas");
      });
  }, []);

  function borrarQuestion(id) {
    console.log("adfasf");
    setIdToDelete(id);
    setShowModal(true);
  }

  function handleBorrado(id) {
    console.log("Id de handle borrado:" + id);

    let config = {
      method: "delete",
      url: `${import.meta.env.VITE_BACK_URL}question/${id}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config).then(function (response) {
      setSuccess("¡Borrado de la pregunta completo!");
    });
  }

  function verResultados(id) {
    console.log("entre a los resultados");
    
  }

  function editarQuestion(id, nombre, tipo, foto, idBusqueda) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("name", nombre);
    sessionStorage.setItem("type", tipo);
    sessionStorage.setItem("picture", foto);
  }

  return (
    <>
      <div class="container text-center">
      <div class="d-inline-flex card rounded pt-2 pb-2 ps-4 pe-4 mt-2 mb-2">
          <h1>Mis Preguntas</h1>
        </div>
        <div class = 'container w-75 card shadow rounded'>

        <QuestionList
          questions={questions}
          borrarQuestion={borrarQuestion}
          editarQuestion={editarQuestion}
        />

        <ModalDeleteQuestion
          show={showModal}
          onHide={() => setShowModal(false)}
          text="Tenga en cuenta que una vez eliminada los cambios son irreversibles!"
          title="¿Desea eliminar la pregunta?"
          id={idToDelete}
          handleBorrado={handleBorrado}
        />

        </div>

        <div class='d-inline-flex align-self-center'>
            <button class='btn btn-danger m-1'>Mis Busquedas</button>
            <button class='btn btn-success m-1'>Crear Pregunta</button>
        </div>

        <div class="d-inline-flex align-self-center">
          <p>
            {success}
          </p>
        </div>
      </div>
    </>
  );
};
