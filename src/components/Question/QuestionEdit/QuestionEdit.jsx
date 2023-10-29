import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

export const QuestionEdit = () => {
  const [name, setName] = useState();
  const [tipo, setTipo] = useState();
  const [time, setTime] = useState();

  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let idQuestion = CryptoJS.AES.decrypt(params.idQuestion,import.meta.env.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    let config = {
      method: "get",
      url: `${
        import.meta.env.VITE_BACK_URL
      }question/${idQuestion}` /*ver con gonza (Agregar parametro Route)*/,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setName(response.data.name);
        setTipo(response.data.type);
        setTime(response.data.time);
      })
      .catch(function(error){
        if (error.response.status === 403){
          sessionStorage.clear();
          navigate("/login")
        }
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("myform");

    if (form.checkValidity()) {
        let idQuestion = CryptoJS.AES.decrypt(params.idQuestion,import.meta.env.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8);

        var data = {
            id: idQuestion,
            name: name,
            time: time,
          };
    
          var config = {
            method: "put",
            url: `${import.meta.env.VITE_BACK_URL}question/`,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`
            },
            data: data,
          };
          axios(config)
            .then(function (response) {
              console.log(response);
              navigate(-1)
            }).catch(function(error){
              if (error.response.status === 403){
                sessionStorage.clear();
                navigate("/login")
              }
            });

    } else {
      form.reportValidity();
    }
  }

  return (
    <>
      <div class="container text-center">
        <div class="d-inline-flex align-self-center card rounded pt-2 pb-2 ps-4 pe-4 mt-2">
          <h1 class="text-center">Modificar Pregunta</h1>
        </div>
      </div>
      <div class="container card shadow w-50 bg-white mt-2 rounded">
        <div class="container-md">
          <form class="needs-validation" id="myform">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Modifique su pregunta
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label for="exampleFormControlTextarea1" class="form-label">
                Ingrese el tiempo de la pregutna
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value={"min"}
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={tipo === 'min'}
                  onChange={(e) => setTipo(e.target.value)}
                
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Minutos
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="sec"
                  checked={tipo === 'sec'}
                  onChange={(e) => setTipo(e.target.value)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Segundos
                </label>
              </div>
              <p></p>
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
                class="form-control"
                value={time}
                onChange={(e) => {
                  if (tipo==="min"){
                    if (e.target.value > 5) {
                      setTime(5);
                    } else {
                      setTime(e.target.value);
                    }
                  }else{
                    if(tipo==="sec"){
                      if (e.target.value > 60*5) {
                        setTime(60*5);
                      } else {
                        setTime(e.target.value);
                      }
                    }
                  }
                }}
                required
              />
            </div>
          </form>
          <div class="d-flex justify-content-center">

          <button class="btn btn-danger ms-1 mt-2 mb-2 text-center" onClick={()=>{
            navigate(-1)
          }}>Volver</button>

          <button class="btn btn-success ms-1 mt-2 mb-2 text-center" onClick={handleSubmit}>Modificar</button>

          </div>

        </div>
      </div>
    </>
  );
};
