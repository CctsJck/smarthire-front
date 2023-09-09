import React from 'react'
import './LandingPage.css'
import { Header } from '../Header/Header'
import logo from '../../assets/Smarthire.png'

export const LandingPage = () => {
    return(
        <>
        <Header></Header>
        <div class="d-flex bg-success">


                <div class="container-md">

                    {/*<div class="d-flex justify-content-between" >
                        <div class="">
                            <h1 class="display-5 fw-bold">SmartHire</h1>
                            <div class="col-lg-6 mxauto">
                                <p class="lead mb-4"> ¡Los procesos de seleccion nunca fueron tan faciles!</p>
                                
                                <div class="d-grid gap-2 d-sm-flex">
                                    <button type="button" class="btn btn-primary">Get Started</button>
                                    <button type="button" class="btn btn-secondary ">Contact Us</button>
                                </div>
                            </div>      
                        </div >
                        <div class='d-flex align-items-left'> 
                            <p>hola</p>
                            <img src={logo} className='imagen' />
                        </div>
                                                
                     </div>*/}

                     <div class= "d-flex justify-content-between align-content-center">
                            <div>
                                <h1 class="display-5 fw-bold">SmartHire</h1>
                                    <div class="col-lg-6 mxauto">
                                        <p class="lead mb-4"> ¡Los procesos de seleccion nunca fueron tan faciles!</p>
                                        
                                        <div class="d-grid gap-2 d-sm-flex">
                                            <button type="button" class="btn btn-primary">Get Started</button>
                                            <button type="button" class="btn btn-secondary ">Contact Us</button>
                                        </div>
                                    </div>
                            </div>
                            
                            <img src={logo} className='imagen' />


                     </div>

                </div>


            </div>






            <div class="container text-center">
                <div class="row">
                    <div class="col align-self-start">
                    One of three columns
                    </div>
                    <div class="col align-self-end">
                    <h1>HOLA</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque quaerat, maiores perspiciatis modi libero quod quas cumque hic itaque nemo eaque impedit, similique ipsum quia, maxime quos ex qui!</p>
                    </div>
                </div>
            </div>

            
            <div class = "container-md mt-4">
                
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

        
        </>
    )
}