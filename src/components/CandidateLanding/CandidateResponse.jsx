import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom';
import "./VideoTest.css"
import * as faceapi from 'face-api.js'
import axios from 'axios';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

/*Falta:
    - Centrar el timer
    - Boton de Comenzar(Con o sin Modal)
    - Terminar*/




export const CandidateResponse = () => {
    const [busqueda,setBusqueda] = useState('');
    const [preguntas,setPreguntas] = useState([]);
    const params = useParams();
    const [cantidad,setCantidad] = useState(0);
    const [cont,setCont] = useState(0);
    const [timerDuration, setTimerDuration] =  useState(60)
    const [btnState, setBtnState] =  useState(true)//Modifica el estado del boton
    const [endPregunta,setEndPregunta] = useState(false)    

    const videoRef = useRef()
    const canvasRef = useRef()
    const [videoData, setVideoData] = useState([])
    
    const renderTime = ({ remainingTime }) => { // Funcion que se encarga de despregar el tiempo del timer
        if (remainingTime === 0) {
          return <div className="timer">Fin</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Tiempo Restante</div>
            <div className="value">{remainingTime}</div>
            <div className="text">Segundos</div>
          </div>
        );
      };

    useEffect(()=>{
        startVideo()
        videoRef && loadModels()

    },[])


    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({video:true})
        .then((currentStream) => {
        videoRef.current.srcObject = currentStream
        })
        .catch((err) =>{
        console.log(err)
        })
    }

    const loadModels = () =>{
        Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models")
        ]).then(()=>{
        faceMyDetect()
        })
    }

    
    const faceMyDetect = () => {
        setInterval(async()=>{
        const detections = await faceapi.detectAllFaces(videoRef.current,
            new faceapi.TinyFaceDetectorOptions()).withFaceExpressions()

            videoData.push(detections[0].expressions)
            //console.log(videoData)
            /*if (videoData.length === 20){

            console.log("asdfasdbfpuadsv aisdcebcfuds f")

                var data = videoData
        
                var config = {
                    method: 'post',
                    url: `http://localhost:5000/result/hola/5/4`, // modificar los ids
                    headers: {
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type': 'application/json'
                    },
                    data : data
        
        
                };
                console.log(data)
                axios(config)
                .then((response) => 
                    console.log(response)
                    
                )
        
        

            }*/

        },2000)
    }

        
        
        useEffect(() => {
            let config = {
                method: 'get',
                url: `http://localhost:5000/search/${params.idBusqueda}`, //ver con gonza (Agregar parametro Route)* ACA ME TRAE LA SEARCH
            };

            axios(config)
            .then(function(response){
                console.log(response.data)
                setBusqueda(response.data.name)
                setPreguntas(response.data.questions) 


            })
            .catch(function (error){

                setSuccess("No Tiene preguntas")
            })

        },[])          



    function handleClick(e){
        e.preventDefault();
        console.log("asdfasdfasd")
        console.log(preguntas)
        if (cont < preguntas.length-1){
            setCont(cont + 1)
            setBtnState(true) //Cambio el estado del boton para que no se puede continuar a la siguiente pregunta
            setEndPregunta(false)
        }else if (cont === preguntas.length-1){
            //fin
        }
    }

    function handleTimerEnd(){
        console.log("Temino el timer")
        console.log(videoData)
        setBtnState(false)
        setEndPregunta(true)
        /*var data = videoData
        
                var config = {
                    method: 'post',
                    url: `http://localhost:5000/result/hola/5/4`, // modificar los ids
                    headers: {
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type': 'application/json'
                    },
                    data : data
        
        
                };
                console.log(data)
                axios(config)
                .then((response) => 
                    console.log(response)

                    
                )*/
    }

    return(
        <div class='container text-center'>
            <h1 class="mt-4">{busqueda}</h1>
                <div className="row">
                    <div class='col'>
                        <h1>{preguntas.length > 0 ? preguntas[cont].name : 'Cargando...'}</h1>
                        <CountdownCircleTimer 
                            isPlaying
                            duration={timerDuration}
                            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                            colorsTime={[10, 6, 3, 0]}
                            onComplete={handleTimerEnd} //Accion a reliazar (desactivar el boton o un modal)
                            >
                        {renderTime}
                        </CountdownCircleTimer>
                        <h4 hidden={endPregunta}>¡Se acabo el tiempo!</h4>
                        <p hidden={endPregunta}>Presione el boton para pasar a la siguiente pregunta</p>
                    </div>
                    <div class="col">
                        <div className="appvide">
                            <video crossOrigin='anonymus' ref={videoRef} autoPlay></video>
                        </div>
                    <canvas ref={canvasRef} width="940" height="650" className='appcanvas'/>
                        <h1>HOLA</h1>
                    </div>
                </div>
                <div>
                    <button class='btn btn-success' disabled={btnState} onClick ={handleClick}>
                    Siguiente Pregunra
                    </button>
                </div>


        </div>

        
    )
} 