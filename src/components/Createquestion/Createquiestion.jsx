import React, { useState } from 'react'
import axios from 'axios'


export const Createquestion = () =>{

    const [selectedImage, setSelectedImage] = useState();
 
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
     

    const removeSelectedImage = () => {
        setSelectedImage();
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
                            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Open this select menu
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Pregunta</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Especial</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Open this select menu
                    </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
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
                    <button type="submit" className="btn btn-success" >Finalizar pregunta</button>
                </center>
                
            </form>
 
        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
        </div>
      </div>
            </div>
            
        </div>  
        </>
    )
}
