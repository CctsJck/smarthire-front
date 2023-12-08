import React,{useEffect,useState}from 'react'
import { parsePath, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export const CandidateSign = () =>{
  
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [file,setFile] = useState(null);
    const params = useParams();
    const [candidateId, setCandidateId] = useState("");
    let navigate = useNavigate();


    useEffect(() => {
        console.log("candidato Updateado:", candidateId);
      }, [candidateId]);



    function navegar(){
        console.log(candidateId)
        
    }
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
                url: `${import.meta.env.VITE_BACK_URL}candidate/`, //ver con gonza (Agregar parametro Route) // ver como recibe la busqueda 
                data: data,
            };
            axios(config)
            .then(function(response){

               
                setCandidateId(response.data.id)
                

                var candidate = response.data.id

                const formData = new FormData();
                formData.append("file",file)
        
                axios.post(`${import.meta.env.VITE_BACK_URL}cv/${response.data.id}`,formData) //Poner el id necesario
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
                    <div class='mb-3 col-md-11 d-flex'>
                        <div class = 'col-md-12 d-flex justify-content-start'>
                            <input class="form-control" type="file" id="formFile" name="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            required></input>
                        </div>                
                    </div>
                    <div class="col-md-1 d-flex justify-content-start ms-2"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                  data-bs-toggle="tooltip" 
                  data-bs-title="Para descargarlo, en su perfil de LinkedIn, haciendo clic en MAS se puede descargar en formato .pdf"
                  
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
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