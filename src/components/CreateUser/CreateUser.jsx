import React, { useState } from 'react'
import './CreateUser.css'


export const CreateUser = () =>{
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("") 


    function handleSubmit(e){

        let config = {
            method: 'post',
            url: `https://${process.env.REACT_APP_API_URL}/users/roles/ROLE_ACCOUNTABLE`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        };

        axios

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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        </div>
        </>
    )
}



