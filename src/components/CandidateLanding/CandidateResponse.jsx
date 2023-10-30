import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VideoTest.css";
import * as faceapi from "face-api.js";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CryptoJS from "crypto-js";
import { ModalStart } from "./ModalStart";


export const CandidateResponse = () => {
  const [busqueda, setBusqueda] = useState("");
  const [preguntas, setPreguntas] = useState([]);
  const params = useParams();
  const [cantidad, setCantidad] = useState(0);
  const [cont, setCont] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [btnState, setBtnState] = useState(true); 
  const [endPregunta, setEndPregunta] = useState(true);
  const [key, setKey] = useState(0);

  const [showModalStart, setShowModalStart] = useState(true);
  const [firstTimer, setFirstTimer] = useState(false);

  const videoRef = useRef();
  const canvasRef = useRef();
  const [videoData, setVideoData] = useState([]);

  let navigate = useNavigate();

  const renderTime = ({ remainingTime }) => {
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

  useEffect(() => {
    console.log("Video data updated:", videoData);
  }, [videoData]);

  useEffect(() => {
    console.log("Video data updated:", timerDuration);
  }, [timerDuration]);

  useEffect(() => {
    startVideo();
    videoRef &&
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]).then(() => {
        setInterval(async () => {
          try {
            const detections = await faceapi
              .detectAllFaces(
                videoRef.current,
                new faceapi.TinyFaceDetectorOptions()
              )
              .withFaceExpressions();
            console.log(detections[0].expressions);
            setVideoData((prevItems) => [
              ...prevItems,
              detections[0].expressions,
            ]);
          } catch {
          }
        }, 2000);
      });
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let idBusqueda = CryptoJS.AES.decrypt(
      params.idBusqueda,
      import.meta.env.VITE_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACK_URL}search/${idBusqueda}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setBusqueda(response.data.name);
        setPreguntas(response.data.questions);
      })
      .catch(function (error) {
        setSuccess("No Tiene preguntas");
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (cont < preguntas.length - 1) {
      setCont(cont + 1);
      setBtnState(true); 
      if (preguntas[cont+1].type === "min"){
        setTimerDuration(preguntas[cont+1].time*60) 
      }else{
        setTimerDuration(preguntas[cont+1].time) 
      }
      setEndPregunta(true);
      setVideoData([]);
      setKey((prevKey) => prevKey + 1); 
    } else if (cont === preguntas.length - 1) {
      navigate("/candidate/end");
    }
  }

  function handleTimerEnd() {
      console.log("Temino el timer");
      console.log(videoData);
      setBtnState(false);
      setEndPregunta(false);
      var data = videoData;

      let idCandidate = CryptoJS.AES.decrypt(
        params.idCandidate,
        import.meta.env.VITE_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);

      var config = {
        method: "post",
        url: `${import.meta.env.VITE_BACK_URL}result/${idCandidate}/${
          preguntas[cont].id
        }`, 
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: data,
      };
      console.log(data);
      axios(config).then((response) => console.log(response));
  }

  function handleComenzar(){
    console.log("empezo el cuestionario")
    console.log("tiempo: " + preguntas[cont].time*60)
    if (preguntas[cont].type === "min"){
      setTimerDuration(preguntas[cont].time*60) 
    }else{
      setTimerDuration(preguntas[cont].time) 
    }
    setFirstTimer(true)
  }

  return (
    <>
      <ModalStart
        show={showModalStart}
        onHide={() => setShowModalStart(false)}
        comenzar ={handleComenzar}
      />

      <div class="container text-center">
        <div class="d-inline-flex card rounded pt-2 pb-2 ps-4 pe-4 mt-2 mb-2">
          <h1>{busqueda}</h1>
        </div>
        <div class="card p-4 shadow">
          <div className="row">
            <div class="col d-flex flex-column">
              <div>
                <h1>
                  {preguntas.length > 0 ? preguntas[cont].name : "Cargando..."}
                </h1>
                <div className="timer-wrapper">
                  <CountdownCircleTimer
                    key={key}
                    isPlaying = {firstTimer}
                    duration={timerDuration}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={handleTimerEnd}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </div>
              <div className="mt-auto">
                <h4 hidden={endPregunta}>¡Se acabo el tiempo!</h4>
                <p hidden={endPregunta}>
                  Presione el boton para pasar a la siguiente pregunta
                </p>
              </div>
            </div>
            <div class="col d-flex flex-column border-start border-2 border-success">
              <div>
                <video
                  class="border border-dark border-3 rounded"
                  crossOrigin="anonymus"
                  ref={videoRef}
                  autoPlay
                ></video>
              </div>
              <canvas
                ref={canvasRef}
                width="1000"
                height="1000"
                className="appcanvas"
              />
            </div>
          </div>
          <div>
            <button
              class="btn btn-success mt-3"
              disabled={btnState}
              onClick={handleClick}
            >
              Siguiente Pregunta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
