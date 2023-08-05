import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'


export const Login = () =>{
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("") 

    function handleSubmit(e){
        e.preventDefault()

        var data = {
            "email": email,
            "password": pass
        }


        var config = {
            method: 'post',
            url: `http://localhost:5000/login`,
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
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese su email o nombre de usuario</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
            </div>
            <button type="submit" onClick = {handleSubmit} class="btn btn-primary">Submit</button>
        </form>

        </div>
        </>
    )
}



