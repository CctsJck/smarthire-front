import React, { useState } from 'react'
import { useRef,useEffect } from 'react'
import axios from 'axios'
import * as faceapi from 'face-api.js'

export const  VideoTest = () =>{
  const videoRef = useRef()
  const canvasRef = useRef()
  const [videoData, setVideoData] = useState([])


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

    },2000)
  }




  return (
    <div >
        <h1>Face Detection</h1>
        <div className="appvide">
        <video crossOrigin='anonymus' ref={videoRef} autoPlay></video>
        </div>
        <canvas ref={canvasRef} width="940" height="650" className='appcanvas'/>
       
    </div>
  )
}