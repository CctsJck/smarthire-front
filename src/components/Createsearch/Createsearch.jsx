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
        <center>
            <div class = "container-md">
                <h1>Crear Busqueda</h1>
                <div class="mb-3" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlInput1" class="form-label">Ingrese el titulo de la busqueda</label>
                    <input type="text" class="form-control" id="name" placeholder="Intership program 2023"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                </div>
                <div class="mb-3" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <input class="form-control" id="descripcion" rows="3"
                    value={descripcion}
                    onChange={e=> setDescripcion(e.target.value)}>
                    </input>
                </div>
                <div class="mb-3" style={{ textAlign: 'left' }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Seleccione una fecha de finalizacion de busqueda (opcional)</label>
                </div>
                <div style={{ textAlign: 'left' }}>
                        <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="05/08/2023"
                     />
                </div>
                <button type="submit" onClick = {handleCreatesearch} class="btn btn-primary">Crear Cuenta</button>
           </div>
        </center>
        
        
        
        </>
    )

}
