import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Sun = () => {
  const sun = useGLTF("./sun/scene.gltf");

  return (
    <primitive object={sun.scene} scale={0.60} position-y={0} rotation-y={0} />
  );
};

const SunCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Main Front Light */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        {/* Back Light (for glowing edges) */}
        <pointLight position={[-5, -5, -5]} intensity={2} color={"#FFD700"} castShadow />

        {/* Optional: Small Ambient Light for Balance */}
        <ambientLight intensity={0.2} />

        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Sun />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SunCanvas;
