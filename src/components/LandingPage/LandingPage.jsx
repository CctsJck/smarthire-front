import React from 'react'
import './LandingPage.css'
import { Header } from '../Header/Header'

export const LandingPage = () => {
    return(
        <>
        <Header></Header>     
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='px-4 py-5 my-5 text-left'>
                        <h1 class="display-5 fw-bold">SmartHire</h1>
                        <div class="col-lg-6 mxauto">
                            <p class="lead mb-4"> ¡Los procesos de seleccion nunca fueron tan faciles!</p>
                            <img class="imagen" src="assets/Smarthire.png"></img>
                            <div class="d-grid gap-2 d-sm-flex justify-content-sm-left">
                                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
                                <button type="button" class="btn btn-secondary btn-lg px-4 gap-3">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "container-md">
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
        
        </>
    )
}