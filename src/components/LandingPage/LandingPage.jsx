import React from "react";
import "./LandingPage.css";
import { Header } from "../Header/Header";
import logo from "../../assets/Smarthire.png";
import candidato from "../../assets/landing page candidato.avif";

export const LandingPage = () => {
  return (
    <>
      <Header></Header>

      <div
        class="col-md-12 d-flex"
        style={{ backgroundColor: "#97e184", height: "30%" }}
      >
        <div className="container">
          <div class="col-md-12 d-flex justify-content-start">
            <div class="col-md-6 d-flex justify-content-start py-5">
              <div>
                <h1 class="display-5 fw-bold">EmotiHire</h1>
                <div class="col-lg-20 mxauto">
                  <p class="lead mb-4">
                    {" "}
                    ¡Los procesos de seleccion nunca fueron tan faciles!
                  </p>

                  <div class="d-flex">
                    <button type="button" class="btn btn-primary me-2">
                      Get Started
                    </button>
                    <button type="button" class="btn btn-secondary ">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img src={logo} className="imagen" style={{}} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-5" style={{ backgroundColor: "white" }}>
        
        <div className="col-md-12 d-flex card shadow">
          <div className="d-flex align-items-center">
            <div className="col-md-6 d-flex justify-content-start">
              <img src={candidato} className="" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-6 text-center py-5">
              <h3>Tus candidatos son entrevistados y analizados</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                neque quaerat, maiores perspiciatis modi libero quod quas cumque
                hic itaque nemo eaque impedit, similique ipsum quia, maxime quos
                ex qui!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 d-flex card shadow mt-5">
          <div className="d-flex align-items-center">
            <div className="col-md-6 text-center py-5">
              <h3> Utiliza inteligencia artificial en para la deteccion de emociones
                de tus candidatos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                neque quaerat, maiores perspiciatis modi libero quod quas cumque
                hic itaque nemo eaque impedit, similique ipsum quia, maxime quos
                ex qui!
              </p>
            </div>
			<div className="col-md-6 d-flex justify-content-end">
                            <img
                src={candidato}
                className="candidato"
                class="img-fluid img-sm"
              />
            </div>
          </div>
        </div> 

        <div className="col-md-12 d-flex card shadow mt-5">
          <div className="d-flex align-items-center">
            <div className="col-md-6 d-flex justify-content-start">
              <img src={candidato} className="" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-6 text-center py-5">
              <h3>Podras analizar los datos del curriculum de Likedin de una
                manera mas amigable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                neque quaerat, maiores perspiciatis modi libero quod quas cumque
                hic itaque nemo eaque impedit, similique ipsum quia, maxime quos
                ex qui!
              </p>
            </div>
          </div>
        </div>
        </div>

        <div class="col-md-12 mb-2 card shadow" style={{ bottom: "0", marginTop:"5%"}}>
            <div class="p-5"> 
                <h1 class="text-center">Contact</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Numero de telefono</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    
      
    </>
  );
};
