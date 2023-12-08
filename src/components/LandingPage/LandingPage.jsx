import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./LandingPage.css";
import { Header } from "../Header/Header";
import logo from "../../assets/EmotiHire.png";
import candidato from "../../assets/landing page candidato.avif";
import candidata from "../../assets/pexels-artem-podrez-4492161.jpg";
import candidata2 from "../../assets/pexels-yan-krukau-4458421.jpg";

export const LandingPage = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comentarios, setComentarios] = useState("");
  return (
    <>
      <Header></Header>
      <div
        class="col-md-12 d-flex"
        style={{ backgroundColor: "#97e184", height: "30%" }}
      >
        <div className="container" style={{ backgroundColor: "#97e184" }}>
          <div class="col-md-12 d-flex justify-content-start mt-3 mb-3">
            <div class="col-md-6 d-flex justify-content-start py-5">
              <div>
                <div class="col-lg-20 mxauto">
                  <h2 class="mb-4 me-5">
                    ¡Los procesos de selección nunca fueron tan faciles!
                  </h2>
                  <div class="d-flex">
                    <button
                      type="button"
                      class="btn btn-primary me-2"
                      onClick={() => {
                        if (sessionStorage.getItem("token") != null) {
                          navigate("/misbusquedas");
                        } else {
                          navigate("/createaccount");
                        }
                      }}
                    >
                      Comenzar
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary "
                      href="#contactar"
                    >
                      <Link to="seccionDestino" smooth={true} duration={250}>
                        ¡Contáctenos!
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 d-flex m-2 justify-content-center">
              <img src={logo}/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 d-flex" style={{ background: "#ffffff" }}>
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
                <h3>Tus candidatos son entrevistados y analizados</h3>
                <p>
                  Con EmotiHire vas a poder ahorrar tiempo, analizando
                  candidatos por medio de entrevistas virtuales. En ellas se
                  analizarán las emociones de los candidatos y se mostrarán en
                  un dashboard interactivo para un posterior análisis
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
                  El algoritmo de inteligencia artificial que se utiliza analiza
                  las emociones de los candidatos. Vos vas a poder proveer las
                  preguntas que desees y el tiempo para responder las mismas.
                  Luego podrás ver como reaccionaron los candidatos a la hora de
                  responderlas
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
                  Podras analizar los datos del curriculum de Likedin de una
                  manera mas amigable
                </h3>
                <p>
                  El candidato también va a tener la opción de cargar su
                  curriculum de LinkedIn. Este curriculum será analizado por
                  nuestro sistema y posteriormente, integrado al dashboard. Así,
                  vas a poder comparar las reacciones de los candidatos con sus
                  habilidades técnicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container card shadow mb-4 mt-3" id="seccionDestino">
        <form class="needs-validation" id="myform">
          <div class="mb-3">
            <label for="nameID" class="form-label">
              Ingrese su nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="nameID"
              placeholder="Juan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div class="mb-3">
            <label for="emailID" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="emailID"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div class="mb-3">
            <label for="floatingTextarea2">Commentarios/Preguntas</label>
            <textarea
              class="form-control"
              placeholder="Escribí lo que sea, desde comentarios hasta preguntas!"
              id="floatingTextarea2"
            ></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-success mb-4 mt">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
