import React, { useState } from 'react'
import './Login.css'
import { redirect  } from 'react-router-dom'


export const CreateUser = () =>{
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("") 


    const [datos, setDatos] = React.useState({
        mail:'',
        contraseña:''
    })

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }



    return(
        <>
        <div class = "container-md">
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese su email o nombre de usuario</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={email}
                    onChange={(e)=> handleChange(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                    value={pass}
                    onChange={(e)=> handleChange(e.target.value)}
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        </div>
        </>
    )
}



