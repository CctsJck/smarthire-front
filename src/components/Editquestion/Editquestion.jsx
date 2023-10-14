import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const Editquestion = () =>{

    const [selectedImage, setSelectedImage] = useState();
    const type = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
    const [name, setName] = useState(sessionStorage.getItem('name'));
    const [tipoActividad, setTipoActividad] = useState(sessionStorage.getItem('type'));


    const handleTipoActividadChange = (selectedOption) => {
        setTipoActividad(selectedOption);
    };

    const handleTextareaChange = (event) => {
        setName(event.target.value);
    };
    
 
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
     

    function handleUpdatequestion(e){
        e.preventDefault()

        var data = {
            "id": sessionStorage.getItem('id'),
            "name": name,
            "type": tipoActividad,
            "picture": "picture",   
        }

        var config = {
            method: 'put',
            url: `${import.meta.env.VITE_BACK_URL}question/`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            data : data


        };
        console.log(data)
        axios(config)
        .then((response) => 
            console.log(response)
            
        )


    }

    return(
        <>
        <div>
            <center>
            <button type="submit"  class="btn btn-primary" style={{position: 'absolute', top: '2%', left: '2%' }}>Volver</button>
            <h1>Pregunta X</h1>
            </center>
            <div class = "container-md">
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style={{ textAlign: "left" }}>Tipo de actividad</label>
            <div className="dropdown">
                <select onChange={(e) => handleTipoActividadChange(e.target.value)} value={tipoActividad}>
                            {type.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                            ))}
                </select>
            </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Pregunta</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    value={name}
                    onChange={handleTextareaChange}></textarea>
                </div>
            </div>
            <div className="container" >
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Foto (opcional) </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                <center>
                    <button type="submit" onClick = {handleUpdatequestion} className="btn btn-primary" >Finalizar edicion</button>
                </center>
                
            </form>
        </div>
      </div>
            </div>
            
        </div>  
        </>
    )
}
