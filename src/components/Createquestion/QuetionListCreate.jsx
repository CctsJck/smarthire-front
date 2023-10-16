import React from "react";
import { QuestionItemCreate } from "./QuestionItemCreate";

export const QuestionListCreate = ({todos,deleteQuestion}) => {
return(
    <ul class="list mt-2 mb-2">
      {todos.length === 0 && (<p class ="fw-bold" >No hay preguntas</p>)}
      {todos.map(todo => {
        return (
          <QuestionItemCreate
            {...todo}
            key={todo.id}
            deleteQuestion={deleteQuestion}
          />
        )
      })}
    </ul>
)
};
