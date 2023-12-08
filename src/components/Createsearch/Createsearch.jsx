import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Header } from "../Header/Header";
import axios from "axios";
import CryptoJS from "crypto-js";
import { jwtDecode } from "jwt-decode";

export const Createsearch = () => {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  let navigate = useNavigate();

  function handleCreatesearch(e) {
    e.preventDefault();
    const form = document.getElementById("myform");
    if (form.checkValidity()) {
    var data = {
      name: name,
      description: descripcion,
      endDate: selectedDate,
      userId: jwtDecode(sessionStorage.getItem("token")).id,
    };

    var config = {
      method: "post",
      url: `${import.meta.env.VITE_BACK_URL}search/`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then((response) =>{
      const encryptedText = CryptoJS.AES.encrypt(response.data.id.toString(), import.meta.env.VITE_SECRET_KEY)
      navigate("/busquedas/preguntas/" + encodeURIComponent(encryptedText))
    }).catch(function(error){
      if (error.response.status === 403){
        sessionStorage.clear();
        navigate("/login")
      }
    });
  }else {
    form.reportValidity();
  }
  }

  return (
    <>
      <Header></Header>
      <div class="container w-50 text-center">
        <div class="d-inline-flex card rounded pt-2 pb-2 ps-4 pe-4 mt-2 mb-2">
          <h1>Crear Búsqueda</h1>
        </div>
        <div class="card rounded shadow text-start p-5">
          <form class="needs-validation" id="myform">



          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Ingrese el título de la búsqueda
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Intership program 2023"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Descripción
            </label>
            <textarea
              class="form-control"
              id="descripcion"
              rows="3"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label mt-1">
              Seleccione una fecha de finalización de búsqueda (opcional)
            </label>
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                isClearable
                placeholderText="05/08/2023"
                required
              />
            </div>
          </div>
          </form>
          <div class="d-flex justify-content-center mt-3">
            <button
              type="submit"
              onClick={handleCreatesearch}
              class="btn btn-primary"
            >
              Crear búsqueda
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
