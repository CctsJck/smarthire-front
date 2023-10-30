import React, { useState } from "react";
import axios from "axios";
import { Header } from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Singup = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPass1] = useState("");
  const [password2, setPass2] = useState("");

  function handleCreateaccount(e) {
    e.preventDefault();
    const form = document.getElementById("myform");

    if (form.checkValidity()) {
      var data = {
        name: name,
        surename: surname,
        username: username,
        email: email,
        pass: password1,
      };

      var config = {
        method: "post",
        url: `${import.meta.env.VITE_BACK_URL}recruiter/`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          navigate("/createaccount/after")
        })

        .catch(function (error) {
          if (
            error.response.data.message == "El nombre de usuario no es unico"
          ) {
            toast.error("El nombre de usuario ya esta en uso!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else if (
            error.response.data.message == "El email ingresado ya esta en uso"
          ) {
            toast.error("El email ingresado ya esta en uso", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Error desconocido!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } else {
      form.reportValidity();
    }
  }
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      <div class="container card shadow w-50 bg-white mt-5 rounded">
        <h1 class="text-center pt-3">Crear Cuenta</h1>
        <div class="container w-75 pt-3">
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
              <label for="surnameID" class="form-label">
                Ingrese su apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="surnameID"
                placeholder="Perez"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div class="mb-3">
              <label for="usernameID" class="form-label">
                Ingrese su usuario
              </label>
              <input
                type="text"
                class="form-control"
                id="usernameID"
                placeholder="Juan01"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <label for="password1ID" class="form-label">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="password1ID"
                placeholder="***********"
                value={password1}
                onChange={(e) => setPass1(e.target.value)}
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div class="mb-3">
              <label for="password2ID" class="form-label">
                Ingrese nuevamente la contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="password2ID"
                placeholder="***********"
                value={password2}
                onChange={(e) => setPass2(e.target.value)}
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                onClick={handleCreateaccount}
                class="btn btn-primary mb-4 mt"
              >
                Crear Cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
