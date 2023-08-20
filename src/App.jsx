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

function App() {

  return (
    <Routes>
      <Route path= "/" element = {<LandingPage/>}/>

      <Route path= "/login" element = {<Login/>}/>

      <Route path="/createaccount" element = {<Singup/>}/> 

      <Route path = "/crearbusqueda" element = {<Createsearch/>}/>

      <Route path = "/busquedas" element = {<Busqueda/>}/>

      <Route path = "/preguntas/:searchId" element = {<Question/>}/>

    </Routes>


  )
}

export default App
