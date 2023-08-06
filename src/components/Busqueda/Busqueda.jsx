import React, { useEffect, useState } from 'react'
import { BusquedaList } from './BusquedaList/BusquedaList'
import axios from 'axios';
import { ModalDelete } from './Validacion/ModalDelete';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';


export const Busqueda = () => {


    const [busquedas, setBusquedas] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    const [showEditModal, setShowEditModal] =useState(false)
    const [idToDelete, setIdToDelete] = useState("")
    const [idToEdit, setIdToEdit] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => {
        let config = {
            method: 'get',
            url: `http://localhost:5000/search/recruiter/${sessionStorage.getItem('userId')}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };

        axios(config)
        .then(function(response){
            console.log(response.data)
            setBusquedas(response.data)

        })
        .catch(function (error){

            setSuccess("No Tiene busquedas")
        })

    },[])


    function borrarBusqueda(id){

        console.log("adfasf")
        setIdToDelete(id)
        setShowModal(true)
    }

    function handleBorrado(id){
        console.log("Id de handle borrado:" + id)

        let config = {
            method: 'delete',
            url: `http://localhost:5000/search/${id}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };

        axios(config)
            .then(function(response){
                setSuccess("¡Borrado de la busqueda completo!")
            })
    }

    function verResultados(id){
        console.log("entre a los resultados")
    }

    function editarBusqueda(id) {
        setIdToEdit(id)

    }



    return(
        <>
        <div class="container-md">
            <h1>Prueba de map de busquedas</h1>
            <BusquedaList busquedas={busquedas}
                borrarBusqueda ={borrarBusqueda}
                verResultados={verResultados}
                editarBusqueda={editarBusqueda}
                />

            <ModalDelete 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                text="Tenga en cuenta que una vez eliminada los cambios son irreversibles!"
                title='¿Desea eliminar la busqueda?'
                id={idToDelete}
                handleBorrado = {handleBorrado}

            />



            <div class="position-relative" >

                <p  class="position-absolute top-50 start-50 translate-middle">{success}</p>

            </div>





            
        </div>    
        </>
    )

}