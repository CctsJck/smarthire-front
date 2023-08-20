import React, { useEffect, useState } from 'react'
import { QuestionList } from './QuestionList/QuestionList'
import axios from 'axios';
import { ModalDeleteQuestion } from './Validacion/ModalDeleteQuestion';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import { useParams } from 'react-router-dom';


export const Question = () => {


    const [questions, setQuestions] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    /*const [showEditModal, setShowEditModal] =useState(false)*/
    const [idToDelete, setIdToDelete] = useState("")
    const [idToEdit, setIdToEdit] = useState("")
    const [success, setSuccess] = useState("")
    const {searchId} = useParams

    useEffect(() => {
        let config = {
            method: 'get',
            url: `http://localhost:5000/search/${searchId}`, /*ver con gonza (Agregar parametro Route)*/ 
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };

        axios(config)
        .then(function(response){
            console.log(response.data.questions)
            setQuestions(response.data.questions)

        })
        .catch(function (error){

            setSuccess("No Tiene preguntas")
        })

    },[])


    function borrarQuestion(id){

        console.log("adfasf")
        setIdToDelete(id)
        setShowModal(true)
    }

    function handleBorrado(id){
        console.log("Id de handle borrado:" + id)

        let config = {
            method: 'delete',
            url: `http://localhost:5000/question/${id}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };

        axios(config)
            .then(function(response){
                setSuccess("¡Borrado de la pregunta completo!")
            })
    }

    function verResultados(id){
        console.log("entre a los resultados")
    }

    function editarQuestion(id) {
        setIdToEdit(id)

    }



    return(
        <>
        <div class="container-md">
            <h1>Prueba de map de preguntas</h1>
            <QuestionList questions={questions}
                borrarQuestion ={borrarQuestion}
                verResultados={verResultados}
                editarQuestion={editarQuestion}
                />

            <ModalDeleteQuestion 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                text="Tenga en cuenta que una vez eliminada los cambios son irreversibles!"
                title='¿Desea eliminar la pregunta?'
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