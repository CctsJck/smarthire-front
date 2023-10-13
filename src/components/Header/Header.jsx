import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  let location1 = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  

  useEffect(() => {
    if (sessionStorage.getItem("userId") != null) {
      setLoggedIn(true);
    }
  }, []);

  function handleCerrarSesion(e) {
    sessionStorage.clear();
    if (location1.pathname == "/") {
      location.reload();
    } else {
      navigate("/");
    }
    //location.reload();
  }

  return (
    <>
      <body>
        <header class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div>
              {loggedIn === true ? (
                <div class="btn-menu mx-3">
                <label for="btn-menu" type="button">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                    onClick={() => console.log("hola")}
                    >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                    </svg>
                </label>
                </div>
              ) : loggedIn === false ? (
                <div></div>
              ) : (
                <div>Código HTML predeterminado o para otras opciones</div>
              )}
            </div>
            <a class="navbar-brand mx-2">Emoti Hire</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => navigate("/landing")}
                  >
                    Home
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button
                  type="button"
                  class="btn btn-primary me-2 btn-right"
                  onClick={() => navigate("/login")}
                  hidden={loggedIn}
                >
                  Iniciar Sesion
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => navigate("/createaccount")}
                  hidden={loggedIn}
                >
                  CrearCuenta
                </button>
              </form>
            </div>
          </div>
        </header>
        <div class="capa"></div>
        <input type="checkbox" id="btn-menu"></input>
        <div class="container-menu">
          <div class="cont-menu">
            <nav>
              <a href="#" onClick={() => navigate("/misbusquedas")}>
                Mis busquedas
              </a>
              <a href="#" onClick={() => navigate("/crearbusqueda")}>
                Crear busqueda
              </a>
              <a href="#" onClick={handleCerrarSesion}>
                Cerrar Sesión
              </a>
            </nav>
            <label for="btn-menu" class="icon-equis mx-2">
              x
            </label>
          </div>
        </div>
      </body>
    </>
  );
};
