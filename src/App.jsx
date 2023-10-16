import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LandingPage} from './components/LandingPage/LandingPage'
import { Header } from './components/Header/Header'
import { Login } from './components/Login/Login'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { BusquedaItem } from './components/Busqueda/BusquedaItem/BusquedaItem'
import { Busqueda } from './components/Busqueda/Busqueda'
import { Createsearch } from './components/Createsearch/Createsearch'
import {Question} from  './components/Question/Question'
import { Singup } from './components/Singup/Singup'
import { VideoTest } from './components/VideoTest/VideoTest'
import { CandidateLanding} from './components/CandidateLanding/CandidateLanding'
import { CandidateSign } from './components/CandidateLanding/CandidateSign'
import { CandidateResponse } from './components/CandidateLanding/CandidateResponse'
import { Dashboard } from './components/Dashboard/Dashboard'
import { CandidateEnd } from './components/CandidateLanding/CandidateEnd'
import {Createquestion} from './components/Createquestion/Createquestion'

function App() {

  return (
    <Routes>
      <Route path= "/" element = {<LandingPage/>}/>

      <Route path= "/login" element = {<Login/>}/>

      <Route path="/createaccount" element = {<Singup/>}/> 

      <Route path = "/crearbusqueda" element = {<Createsearch/>}/>

      <Route path = "/busquedas" element = {<Busqueda/>}/>

      <Route path = "/preguntas/:searchId" element = {<Question/>}/>

      <Route path="/hola" element = {<VideoTest/>}/>

      <Route path="/misbusquedas" element = {<Busqueda/>}/>

      <Route path="/crearBusqueda" element = {<Createsearch/>}/>

      <Route path="/busquedaItem" element = {<BusquedaItem/>}/>

      <Route path="/header" element = {<Header/>}/>

      <Route path="/candidate/:idBusqueda" element = {<CandidateLanding/>}/>

      <Route path='/candidate/response/:idBusqueda/:idCandidate' element = {<CandidateResponse/>}/>

      <Route path="/candidate/sign/:idBusqueda" element = {<CandidateSign/>}/>

      <Route path='/candidate/end' element = {<CandidateEnd/>}/>

      <Route path="/dashboard/:idBusqueda" element = {<Dashboard/>}/>

      <Route path="/busquedas/preguntas/:idBusqueda" element = {<Createquestion/>}/>



      

    </Routes>


  )
}

export default App
