import React from 'react'
import { QuestionItem } from '../QuestionItem/QuestionItem'

export const QuestionList = ({questions,borrarQuestion,editarQuestion,}) =>{
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Eliminar</th>
                <th scope='col'>Editar</th>
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
                            editarQuestion={editarQuestion}
                            />
                        )
                    })}
                
            </tbody>
        </table>
    )
}