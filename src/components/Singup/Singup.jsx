import React, { useState } from 'react'
import axios from 'axios'

export const Singup = () =>{
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPass1] = useState("") 
    const [password2, setPass2] = useState("")



    function handleCreateaccount(e){
        e.preventDefault()

        var data = {
            "name": name,
            "surname":surname,
            "username": username,
            "email": email,
            "pass": password1,
        }

        var config = {
            method: 'post',
            url: `http://localhost:5000/recruiter/`,
            headers: {  
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            data : data

        };
        axios(config)
        .then((response) => 
            sessionStorage.setItem('token', response.headers.getAuthorization))


        console.log(sessionStorage.getItem('token'))

    }
    return(
        <>
        <div class = "container-md">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ingrese su nombre</label>
                <input type="text" class="form-control" id="name" placeholder="example"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ingrese su apellido</label>
                <input type="text" class="form-control" id="surname" placeholder="example"
                value={surname}
                onChange={e => setSurname(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ingrese su usuario</label>
                <input type="text" class="form-control" id="username" placeholder="example01"
                value={username}
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nueva password</label>
                <input type="password" class="form-control" id="password1" placeholder="***********"
                value={password1}
                onChange={e => setPass1(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nueva password</label>
                <input type="password" class="form-control" id="password2" placeholder="***********"
                value={password2}
                onChange={e => setPass2(e.target.value)}/>
            </div>
                <button type="submit" onClick = {handleCreateaccount} class="btn btn-primary">Crear Cuenta</button>

        </div>
        
        </>
    )
}