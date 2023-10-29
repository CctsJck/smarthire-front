import React,{useEffect,useState}from 'react'
import { parsePath, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export const CandidateSign = () =>{
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [file,setFile] = useState(null);
    const params = useParams();
    const [candidateId, setCandidateId] = useState("");
    let navigate = useNavigate();


    useEffect(() => {

      }, [candidateId]);

    function handleSubmit(e){
        e.preventDefault();

        const form= document.getElementById('myform')


        if(form.checkValidity()){

            let idBusqueda = CryptoJS.AES.decrypt(params.idBusqueda, import.meta.env.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8);

            var data = {
                name: nombre,
                surename: apellido,
                idSearch: idBusqueda
              };
            
            var config = {
                method: 'post',
                url: `${import.meta.env.VITE_BACK_URL}candidate/`,
                data: data,
            };
            axios(config)
            .then(function(response){
                setCandidateId(response.data.id)
                var candidate = response.data.id
                const formData = new FormData();
                formData.append("file",file)
        
                axios.post(`${import.meta.env.VITE_BACK_URL}cv/${response.data.id}`,formData) 
                    .then(function(response){

                        
                        const candidateEncrypted = CryptoJS.AES.encrypt(candidate.toString(), import.meta.env.VITE_SECRET_KEY) 
                        
                        
                        navigate(`/candidate/response/${encodeURIComponent(params.idBusqueda)}/${encodeURIComponent(candidateEncrypted)}`)
                    })
                
            })

        }else{
            form.reportValidity();
        }

        



    }

    
    return(
        <div>
            <div class='container w-50 bg-white rounded mt-5'>
            <h1 class='text-center'>Datos del Candidato</h1>

                <div class ='container w-75 pt-3'>
                
                <form class="needs-validation" id="myform">
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Ingrese su nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Ingrese su apellido
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        aria-describedby="passwordError"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                    </div>
                    <label for="formFile" class="form-label">Ingrese su CV de LinkedIn</label>
                    <div class='mb-3 col-md-12 d-flex'>
                        <div class = 'col-md-12 d-flex justify-content-start'>
                            <input class="form-control" type="file" id="formFile" name="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            required></input>
                        </div>                
                    </div>
                    <div class='d-flex justify-content-center'>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-4 ">
                        ¡Comenzar!
                    </button>
                    </div>
                </form>
                </div>
            </div>
      </div>
    )
}