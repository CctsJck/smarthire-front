import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Header } from '../Header/Header';
import axios from 'axios'

export const Createsearch = () =>{

    const [name, setName] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    function handleCreatesearch(e){
        e.preventDefault()

        var data = {
            "name": name,
            "description":descripcion,
            "endDate": selectedDate,
            "userId": 22,    
        }

        var config = {
            method: 'post',
            url: `http://localhost:5000/search/`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            data : data

        };
        axios(config)
        .then((response) => 
            console.log(response)
            
        )


    }

    return(
        <>
        <Header></Header>
        <div class="container">
        <div class="row justify-content-center mt-5">
        <div class="col-md-8 mt-4">
            <div class="card shadow">
        <center class="d-flex justify-content-center mt-5">
            <div class = "col-md-5">
                <div class="d-flex justify-content-center mb-5">
                    <h1>Crear Busqueda</h1>
                </div>

                <div class="my-5" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlInput1" class="form-label mb-3">Ingrese el titulo de la busqueda</label>
                    <input type="text" class="form-control" id="name" placeholder="Intership program 2023"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                </div>
                <div class="mb-3 mb-5" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <input class="form-control" id="descripcion" rows="3"
                    value={descripcion}
                    onChange={e=> setDescripcion(e.target.value)}>
                    </input>
                </div>
                <div class="mb-5" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlTextarea1" class="form-label mt-1">Seleccione una fecha de finalizacion de busqueda (opcional)</label>
                    <div style={{ textAlign: 'left' }}>
                        <DatePicker class="mt-5"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="05/08/2023"
                     />
                    </div>
                    <div class="d-flex justify-content-center mt-5 mb-5 ">
                    <button type="submit" onClick = {handleCreatesearch} class="btn btn-primary mb-5 mt-5">Crear busqueda</button>
                    </div>
                </div>
           </div>
        </center>
        </div>
        </div>
        </div>
        </div>
        
        
        </>
    )

}
