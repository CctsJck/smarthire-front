import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AfterSingup = () => {

    let navigate = useNavigate();
    return(
        <>
        <div class = 'container card shadow mt-3 w-50 rounded'>
            
            <div class = "text-center border-bottom">
            <h2 >Ya Casi...</h2>
            </div>
            <div class='d-flex justify-content-center mt-5 mb-5 text-center' >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat velit voluptates laborum ex, quod quae quos quia excepturi, assumenda eius cupiditate. Voluptatibus magni corrupti eveniet ea, corporis dolorum ratione?</p>
            </div>

            
            <div class="border-bottom text-center"> 
            <p class="fw-bold mb-3">Recuerde que para iniciar sesión necesita validar su dirección de email!</p>
            </div>


            <div class="d-flex align-self-center gap-2 mt-3 mb-2">
              <button type="button" name="" id="" class="btn btn-outline-success" onClick={() => navigate("/login")}>Iniciar Sesión</button>
            </div>


        </div>
        </>
    )
}