import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
            ¡Hola! En esta plataforma es una nueva forma de ... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ullam repellat officiis
            dolorum earum maxime culpa, ut nobis impedit eum perferendis optio
            accusamus at quisquam delectus maiores eius aspernatur quod
            inventore!
          </p>
          <div className="col-md-12 d-flex card shadow mt-5">
            <div className="d-flex align-items-center">
              <div className="col-md-9 text-center py-5">
                <h3>
                  {" "}
                  Utiliza inteligencia artificial en para la deteccion de
                  emociones
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  neque quaerat, maiores perspiciatis modi libero quod quas
                  cumque hic itaque nemo eaque impedit, similique ipsum quia,
                  maxime quos ex qui!
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-end">
                <div class="bg-black"></div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex card shadow mt-5">
            <div className="d-flex align-items-center">
              <div className="col-md-3 d-flex justify-content-end"></div>
              <div className="col-md-9 text-center py-5">
                <h3>
                  {" "}
                  Utiliza inteligencia artificial en para la deteccion de
                  emociones de tus candidatos
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  neque quaerat, maiores perspiciatis modi libero quod quas
                  cumque hic itaque nemo eaque impedit, similique ipsum quia,
                  maxime quos ex qui!
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-4 pb-4">
            <button
              onClick={() => navigate(`/candidate/sign/${params.idBusqueda}`)}
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
