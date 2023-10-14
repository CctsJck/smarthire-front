import React from 'react'
import { BusquedaItem } from '../BusquedaItem/BusquedaItem'

export const BusquedaList = ({busquedas,borrarBusqueda,verResultados,editarBusqueda,shareBusqueda}) =>{
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Eliminar</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Resultados</th>
                <th scope='col'>Compartir</th>
                </tr>
            </thead>
            <tbody>
                
                    {busquedas.length === 0 && "No hay busquedas"}
                    {busquedas.map(busqueda =>{
                        return(
                        <BusquedaItem
                            {...busqueda}
                            key={busqueda.id}
                            borrarBusqueda ={borrarBusqueda}
                            verResultados={verResultados}
                            editarBusqueda={editarBusqueda}
                            shareBusqueda={shareBusqueda}
                            />
                        )
                    })}
                
            </tbody>
        </table>
    )
}