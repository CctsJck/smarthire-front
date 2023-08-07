import React from 'react'
import { QuestionItem } from '../QuestionItem/QuestionItem'

export const QuestionList = ({questions,borrarQuestion,verResultados,editarQuestion,}) =>{
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Eliminar</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Resultados</th>
                </tr>
            </thead>
            <tbody>
                
                    {questions.length === 0 && "No hay preguntas"}
                    {questions.map(question =>{
                        return(
                        <QuestionItem
                            {...question}
                            key={question.id}
                            borrarQuestion ={borrarQuestion}
                            verResultados={verResultados}
                            editarQuestion={editarQuestion}
                            />
                        )
                    })}
                
            </tbody>
        </table>
    )
}