import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import { QuestionListCreate } from "./QuetionListCreate";
import { ModalLoad } from "./ModalLoad";

export const Createquestion = () => {
    let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [showModalLoad, setShowModalLoad] = React.useState(false);
  const type = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const params = useParams();
  const [todos, setTodos] = useState([]);
  const [tipoActividad, setTipoActividad] = useState(
    "Seleccionar tipo de actividad"
  );

  const handleTipoActividadChange = (selectedOption) => {
    setTipoActividad(selectedOption);
  };

  const handleTextareaChange = (event) => {
    setName(event.target.value);
  };


  function handleCreatequestion(e) {
    e.preventDefault();

    const form = document.getElementById("myform");
    if (form.checkValidity()) {
      let idBusqueda = CryptoJS.AES.decrypt(
        params.idBusqueda,
        import.meta.env.VITE_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            name: name,
            time: time,
            idSearch: idBusqueda,
          },
        ];
      });

      setTipoActividad("Seleccionar tipo de actividad");
      setName("");
      setTime("");
    } else {
      form.reportValidity();
    }
  }

  console.log(todos);

  function handleLoadequestion(e) {

    e.preventDefault();

    console.log("gasdfasdfasdf")

    

    let data = todos;

    data.forEach((todo) =>{
        delete todo.id
    })
    console.log(data)

    var config = {
      method: "post",
      url: `${import.meta.env.VITE_BACK_URL}question/`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(data);
    axios(config).then((response) => {
        navigate(-1)
    });
  }

  function deleteQuestion(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleModalLoad(e){
    e.preventDefault()
    setShowModalLoad(true)
  }

  return (
    <>
        <ModalLoad
          show={showModalLoad}
          onHide={() => setShowModalLoad(false)}
          text="Cargar Preguntas"
          title="!Cuidado! Cuando hagas click se van a subir las preguntas"
          handleLoadequestion={handleLoadequestion}
        />

      <div class="container text-center">
        <div class="d-inline-flex align-self-center card rounded pt-2 pb-2 ps-4 pe-4 mt-2">
          <h1 class="text-center">Crear Preguntas</h1>
        </div>
      </div>
      <div class="container card shadow w-50 bg-white mt-2 rounded">
        <div class="">
          <QuestionListCreate todos={todos} deleteQuestion={deleteQuestion} />
        </div>
      </div>
      <div class="container card shadow w-50 bg-white mt-2 rounded">
        <div class="container-md">
          <form class="needs-validation" id="myform">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Ingrese la pregunta
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={name}
                onChange={handleTextareaChange}
                required
              ></textarea>
            </div>
            <div>
              <label
                for="exampleFormControlInput1"
                class="form-label"
                style={{ textAlign: "left" }}
              >
                Tiempo para contestar (minutos)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                class="form-control"
                value={time}
                onChange={(e) => {
                  if (e.target.value > 5) {
                    setTime(5);
                  } else {
                    setTime(e.target.value);
                  }
                }}
                required
              />
            </div>
            <div class="form-text" id="basic-addon4">
              Min: 1 min & Max: 5 min
            </div>
          </form>

          <div className="container mb-3">
            <div className="row">
              <form  className="form-inline">
                <br />
                <center>
                  <button
                    type="submit"
                    onClick={handleCreatequestion}
                    class="btn btn-primary me-1"
                  >
                    Agregar Pregunta a la Busqueda
                  </button>
                  <button
                    onClick={handleModalLoad}
                    class="btn btn-secondary ms-1"
                  >
                    Finalizar la carga de preguntas
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
