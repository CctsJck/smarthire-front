import React, { useState } from 'react'
import axios from 'axios'


export const Createquestion = () =>{

    const [selectedImage, setSelectedImage] = useState();
    const type = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);
    const [tipoActividad, setTipoActividad] = useState('Seleccionar tipo de actividad');
    
    
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
     

    function handleCreatequestion(e){
        e.preventDefault()
        setTodos(currentTodos=> {
            return [
            ...currentTodos, 
            {name:name, type:tipoActividad, picture:"foto", idSearch:3},
        ]
        })

        setTipoActividad('Seleccionar tipo de actividad');
        setName('');
    }
    console.log(todos)

    function handleLoadequestion(e){
        e.preventDefault()

        var data = todos

        var config = {
            method: 'post',
            url: `http://localhost:5000/question/`,
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
                        <option value="">Seleccionar tipo de actividad</option>
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
                    <button type="submit" onClick = {handleCreatequestion} className="btn btn-primary" >Finalizar pregunta</button>
                    <button type="submit" onClick = {handleLoadequestion} className="btn btn-secondary" >Finalizar la carga de preguntas</button>
                </center>
                
            </form>
        </div>
      </div>
            </div>
            
        </div>  
        </>
    )
}
