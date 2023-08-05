import React, { useState } from 'react'
import { BusquedaList } from './BusquedaList/BusquedaList'


export const Busqueda = () => {


    const [busquedas, setBusquedas] = useState([{id: 1, nombre: "nombre 1"},{id:2, nombre:"nombre 5"}])


    function borrarBusqueda(id){
        console.log("entre a borrar")
    }

    function verResultados(id){
        console.log("entre a los resultados")
    }

    function editarBusqueda(id) {
        console.log("entre a editar")
    }



    return(
        <>
        <h1>Prueba de map de busquedas</h1>
        <BusquedaList busquedas={busquedas}
            borrarBusqueda ={borrarBusqueda}
            verResultados={verResultados}
            editarBusqueda={editarBusqueda}
            />
        </>
    )

}