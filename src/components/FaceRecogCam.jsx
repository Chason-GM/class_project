import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const FaceRecogCam = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [model, setModel] = useState(null);
  const [classLabels, setClassLabels] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [uploadedImg, setUploadedImg] = useState(null);

  // Load model and labels on mount
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadGraphModel("/js_model/model.json");
      setModel(loadedModel);
      console.log("✅ Model loaded");
    };

    const loadLabels = async () => {
      const response = await fetch("/class_indices.json");
      const data = await response.json();
      const labelsArray = Object.entries(data)
        .sort((a, b) => a[1] - b[1])
        .map(([label]) => label);
      setClassLabels(labelsArray);
      console.log("✅ Labels loaded:", labelsArray);
    };

    const setupWebcam = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    loadModel();
    loadLabels();
    setupWebcam();
  }, []);

  const handleDetectFromWebcam = async () => {
    if (
      model &&
      classLabels.length > 0 &&
      videoRef.current &&
      videoRef.current.readyState === 4
    ) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(videoRef.current, 0, 0, 224, 224);

      const imageTensor = tf.browser
        .fromPixels(canvas)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(0);

      const predictionTensor = await model.executeAsync(imageTensor);
      const predictionArray = await predictionTensor.array();
      const index = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
      const confidence = predictionArray[0][index];
      const confidencePercent = (confidence * 100).toFixed(2);

      if (confidence >= 0.7) {
        setPrediction(`✅ Verified: ${classLabels[index]} (${confidencePercent}%)`);
      } else {
        setPrediction(`❌ Unverified (${confidencePercent}%)`);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImg(imageURL);
    }
  };

  const handleDetectFromImage = async () => {
    if (
      model &&
      classLabels.length > 0 &&
      imageRef.current &&
      uploadedImg
    ) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(imageRef.current, 0, 0, 224, 224);

      const imageTensor = tf.browser
        .fromPixels(canvas)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(0);

      const predictionTensor = await model.executeAsync(imageTensor);
      const predictionArray = await predictionTensor.array();
      const index = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
      const confidence = predictionArray[0][index];
      const confidencePercent = (confidence * 100).toFixed(2);

      if (confidence >= 0.7) {
        setPrediction(`✅ Verified: ${classLabels[index]} (${confidencePercent}%)`);
      } else {
        setPrediction(`❌ Unverified (${confidencePercent}%)`);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white space-y-4 p-4">
      {/* Webcam Section */}
      <div className="space-y-2 text-center">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="rounded shadow-lg w-[480px] h-auto"
        />
        <button
          onClick={handleDetectFromWebcam}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Who am I? (Webcam)
        </button>
      </div>

      {/* Upload Section */}
      <div className="text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="text-white mb-2"
        />
        {uploadedImg && (
          <>
            <img
              ref={imageRef}
              src={uploadedImg}
              alt="Uploaded"
              crossOrigin="anonymous"
              className="rounded shadow-lg w-[224px] h-[224px] mx-auto"
            />
            <button
              onClick={handleDetectFromImage}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Who am I? (Image)
            </button>
          </>
        )}
      </div>

      <canvas ref={canvasRef} width="224" height="224" className="hidden" />

      <div className="text-xl font-semibold">{prediction}</div>
    </div>
  );
};

export default FaceRecogCam;
