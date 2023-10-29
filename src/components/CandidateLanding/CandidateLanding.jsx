import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import candidato from "../../assets/landing page candidato.avif";
import candidata from "../../assets/pexels-artem-podrez-4492161.jpg";
import candidata2 from "../../assets/pexels-yan-krukau-4458421.jpg";

export const CandidateLanding = () => {
  const [busqueda, setBusqueda] = useState("");
  const params = useParams();
  let navigate = useNavigate();
  //sessionStorage.setItem('BusquedaID', token.split(' ')[1]); //TODO Poner el id de La Busqueda

  /* useEffect(() => {
        let config = {
            method: 'get',
            url: `http://localhost:5000/search/${params.idBusqueda}`, //AGregar la query de busqueda, ver el tema del TOKEN
        };

        axios(config)
        .then(function(response){
            console.log(response)

        })
        .catch(function (error){

            setSuccess("No Tiene preguntas")
        })
        console.log(params.idBusqueda)

    },[])*/

  return (
    <>
      <div>
        <div class="container bg-white rounded mt-5">
          <h1 class="text-center">Bienvenido a EmotiHire</h1>
          <p class="text-center text-body-secondary">
          ¡Hola! Bienvenido a Emotihire, en esta plataforma va a poder asistir a entrevistas de reclutamiento de una manera totalmente virtual, te contamos como es!
          </p>
          <div className="col-md-12 d-flex my-5" style={{ background: "#ffffff" }}>
        <div className="container mt-5" style={{ background: "#ffffff" }}>
          <div className="col-md-12 d-flex card shadow">
            <div className="d-flex align-items-center">
              <div className="col-md-6 d-flex justify-content-start">
                <img
                  src={candidato}
                  className=""
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-6 text-center py-5">
                <h3>¡Entrevista laboral cuando vos quieras!</h3>
                <p>
                Las entrevistas son grabadas y analizadas utilizando un algoritmo de inteligencia artificial. Así que la entrevista se hace cuando vos tengas disponibilidad, sin necesidad de coordinar una reunión. 
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex card shadow mt-5">
            <div className="d-flex align-items-center">
              <div className="col-md-6 text-center py-5">
                <h3>
                  {" "}
                  Utiliza inteligencia artificial en para la deteccion de
                  emociones de tus candidatos
                </h3>
                <p>
                  El algoritmo de inteligencia artificial que se utiliza analiza tus emociones. Vos tenes que responder las preguntas y listo!

                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <img src={candidata} className="candidato" class="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex card shadow my-5">
            <div className="d-flex align-items-center">
              <div className="col-md-6 d-flex justify-content-start">
                <img
                  src={candidata2}
                  className=""
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-6 text-center py-5">
                <h3>
                  Analizamos tu CV de LinkedIn
                </h3>
                <p>
                  Se te va a pedir que cargues tu CV de LinkedIn, con estos datos podemos mostrarle al reclutador cuales son tus habilidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div class="d-flex justify-content-center mb-4 pb-4">
            <button
              onClick={() => {
                const encryptedText = CryptoJS.AES.encrypt(params.idBusqueda.toString(), import.meta.env.VITE_SECRET_KEY)
                navigate(`/candidate/sign/${encodeURIComponent(params.idBusqueda)}`) 
              }}
              className="btn btn-success mb-4"
            >
              Comenzar
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
