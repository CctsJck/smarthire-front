import React, { useState } from 'react'
import axios from 'axios'


export const Createquestion = () =>{
    return(
        <>
        <button type="submit" onClick = {handleCreateaccount} class="btn btn-primary" style={{position: 'absolute', top: '2%', left: '2%' }}>Volver</button>
        <center>
            <h1>Pregunta X</h1>
        </center>
        </>
    )
}
