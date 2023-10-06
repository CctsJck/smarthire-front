import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


export const Header = () => {

    let navigate = useNavigate();


    return(
        <>
        <body>
        <header class="navbar navbar-expand-lg bg-body-tertiary">
        <div class = 'container-fluid'>
            <div class="btn-menu mx-3">
            <label  for="btn-menu" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={() => console.log("hola")}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </label>
            </div>
            <a class="navbar-brand mx-2">Emoti Hire</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" onClick={() =>navigate("/landing")}>Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <button type="button" class="btn btn-primary me-2 btn-right" onClick={() =>navigate("/login")}>Iniciar Sesion</button>
                <button type="button" class="btn btn-primary"onClick={()=>navigate("/createaccount")}>CrearCuenta</button>
            </form>
            </div>
        </div>
        </header>
        <div class="capa"></div>
        <input type='checkbox' id="btn-menu"></input>
                <div class="container-menu">
                    <div class="cont-menu">
                        <nav>
                            <a href="#">Cerrar sesion</a>
                            <a href="#" onClick={() => navigate("/crearbusqueda")}>Crear busqueda</a>
                            <a href="#">Algo mas</a>
                        </nav>
                        <label for="btn-menu" class="icon-equis mx-2">x</label>
                    </div>
                </div>
        
            </body>
        </>
    )
}