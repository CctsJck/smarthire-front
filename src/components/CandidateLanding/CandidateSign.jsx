import React,{useEffect,useState}from 'react'
import { parsePath, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CandidateSign = () =>{
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [file,setFile] = useState(null);
    const params = useParams();
    const [candidateId, setCandidateId] = useState("");
    let navigate = useNavigate();


    useEffect(() => {
        console.log("candidato Updateado:", candidateId);
      }, [candidateId]);

   /* useEffect(() => {
        let config = {
            method: 'get',
            url: `http://localhost:5000/search/${params.idBusqueda}`, //ver con gonza (Agregar parametro Route)* ACA ME TRAE LA SEARCH
        };

        axios(config)
        .then(function(response){
            console.log(response.data.questions)
            

        })
        .catch(function (error){

            setSuccess("No Tiene preguntas")
        })

    },[])*/

    function navegar(){
        console.log(candidateId)
        //navigate(`/candidate/response/${params.idBusqueda}/${candidateId}`)
    }

    function handleSubmit(e){
        e.preventDefault();

        const form= document.getElementById('myform')

        if(form.checkValidity()){


            console.log(file)
            var data = {
                name: nombre,
                surename: apellido,
                idSearch: params.idBusqueda
              };
            
            var config = {
                method: 'post',
                url: `http://localhost:5000/candidate/`, //ver con gonza (Agregar parametro Route) // ver como recibe la busqueda 
                data: data,
            };
            axios(config)
            .then(function(response){

                console.log(response)
                setCandidateId(response.data.id)
                console.log(candidateId)

                var candidate = response.data.id

                const formData = new FormData();
                formData.append("file",file)
        
                axios.post(`http://localhost:5000/cv/${response.data.id}`,formData) //Poner el id necesario
                    .then(function(response){
                        navigate(`/candidate/response/${params.idBusqueda}/${candidate}`)
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
                        <div class = 'col-md-9 d-flex justify-content-start'>
                            <input class="form-control" type="file" id="formFile" name="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            required></input>
                        </div>
                        <div class='col-md-3 d-flex justify-content-end'>
                            <button class='btn btn-dark' onClick ={()=>console.log("hola")}>
                            Linked In CV
                            </button>
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