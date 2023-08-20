import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null); // State to hold the error message

  function handleSubmit(e) {
    e.preventDefault();

    var data = {
      email: email,
      password: pass,
    };

    var config = {
      method: 'post',
      url: `http://localhost:5000/login`,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let token = response.headers.get('authorization');
        sessionStorage.setItem('token', token.split(' ')[1]);

        let config = {
            method: 'get',
            url: `http://localhost:5000/recruiter/email/${email} `,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };
        axios(config)
          .then(function (response){
            sessionStorage.setItem('username',response.data.username)
            sessionStorage.setItem('email',response.data.email)
            sessionStorage.setItem('userId',response.data.id)
            //sessionStorage.setItem('user', response.data.usernm)
          })

      })
      .catch(function (error) {
        // Update the error state with the error message
        setError("El usario o contraseña no son correctos");
      });
  }

  return (
    <>
    <div>
      <h1 class='text-center'>Iniciar Sesión</h1>
      <div class='container-md w-25 bg-white mt-5 rounded'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ingrese su email o nombre de usuario
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              aria-describedby="passwordError"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <div id="passwordError" className="form-text text-center text-danger">
              {error} {/* Display the error message */}
            </div>
          </div>
          <div class='d-flex justify-content-center'>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>

    </>
  );
};


