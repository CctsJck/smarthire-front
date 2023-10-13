import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./LandingPage.css";
import { Header } from "../Header/Header";
import logo from "../../assets/Smarthire.png";
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
                    <button
                      type="button"
                      class="btn btn-primary me-2"
                      onClick={() => {
                        if (sessionStorage.getItem("userId") != null) {
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
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <img src={logo} className="imagen" style={{}} />
            </div>
          </div>
        </div>
      </div>
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
                <h3>Tus candidatos son entrevistados y analizados</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  neque quaerat, maiores perspiciatis modi libero quod quas
                  cumque hic itaque nemo eaque impedit, similique ipsum quia,
                  maxime quos ex qui!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  neque quaerat, maiores perspiciatis modi libero quod quas
                  cumque hic itaque nemo eaque impedit, similique ipsum quia,
                  maxime quos ex qui!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  neque quaerat, maiores perspiciatis modi libero quod quas
                  cumque hic itaque nemo eaque impedit, similique ipsum quia,
                  maxime quos ex qui!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container card shadow mb-4">
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
