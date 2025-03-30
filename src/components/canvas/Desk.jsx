import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Desk = ({ isMobile, isMedium }) => {
  const { scene } = useGLTF("./face/scene.gltf");

  // Debugging to ensure the model is loaded
  useEffect(() => {
    if (!scene) {
      console.error("Failed to load GLTF model!");
    } else {
      console.log("GLTF model loaded successfully:", scene);
    }
  }, [scene]);

  if (!scene) return null; // Prevent rendering if the model isn't loaded

  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />


      {/* Directional Light for Realistic Shadows */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <primitive
        object={scene}
        scale={ isMobile ? 0.87 : isMedium ? 0.98 : 1.2}
        // position={isMobile ? [0, -1.85, 0.25] : isMedium ? [0, -2.5, 0.25] : [0.8, -2.25, 1.0]}
        position={isMobile ? [0, -10.25, 0.25] : isMedium ? [0, -10.25, 0.25] : [1.8, -10.25, 0.9]}

        // rotation={[0, -0.2, -0.15]}
        rotation={[0, 0.5, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
};

const DeskCanvas = () => {

  const [isMobile, setMobile] = useState(false);
  const [isMedium, setMedium] = useState(false);


  // useEffect runs after the initial render and also after every re-render
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 750px)');
    const mediumQ = window.matchMedia('(max-width: 942px)')

    setMedium(mediumQ.matches)
    setMobile(mediaQuery.matches);

    const mediumChange = (e) => setMedium(e.matches)
    const handleChange = (e) => setMobile(e.matches); // Store function

    mediaQuery.addEventListener("change", handleChange);
    mediumQ.addEventListener("change", mediumChange);

    return () => {
      console.log("Cleanup running! Removing event listener.");
      mediaQuery.removeEventListener("change", handleChange); // Remove correctly
      mediumQ.removeEventListener("change", mediumChange); // Remove correctly
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 4, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // enableZoom={false}
          // maxPolarAngle={Math.PI / 1.8}
          // minPolarAngle={0}
          // autoRotate
          // autoRotateSpeed={5}
          enableZoom={false}
          // maxPolarAngle={Math.PI}
          // minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}    // Allow looking all the way up (180°)
          minPolarAngle={Math.PI / 2}          // Allow looking all the way down (0°)
        // maxAzimuthAngle={Infinity} // No limit on left-right rotation
        // minAzimuthAngle={-Infinity}
        />
        <Desk isMobile={isMobile} isMedium={isMedium}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DeskCanvas;
