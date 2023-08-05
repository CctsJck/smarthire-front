import React from 'react'
import { BusquedaItem } from '../BusquedaItem/BusquedaItem'

export const BusquedaList = ({busquedas,borrarBusqueda,verResultados,editarBusqueda,}) =>{
    return(
        <ul class="list-gorup">
            {busquedas.length === 0 && "No hay busquedas"}
            {busquedas.map(busqueda =>{
                return(
                  <BusquedaItem
                    {...busqueda}
                    key={busqueda.id}
                    borrarBusqueda ={borrarBusqueda}
                    verResultados={verResultados}
                    editarBusqueda={editarBusqueda}
                    />
                )
            })}
        </ul>
    )
}