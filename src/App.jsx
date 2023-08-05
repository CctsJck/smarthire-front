import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Login } from './components/Login/Login'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { BusquedaItem } from './components/Busqueda/BusquedaItem/BusquedaItem'
import { Busqueda } from './components/Busqueda/Busqueda'

function App() {

  return (
    <Routes>
      <Route path= "/" element = {<Busqueda/>}/>
    </Routes>

  )
}

export default App
