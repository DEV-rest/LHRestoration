import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Vansss from './Vanss'; 
import * as THREE from 'three';

const AnimatedVan = () => {
  const modelRef = useRef();

  // Easing function for smooth landing
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime; // Get elapsed time
    if (modelRef.current) {
      // Smoothly move the van down to y = 0
      modelRef.current.position.y = THREE.MathUtils.lerp(5, 0, easeOut(Math.min(elapsed / 2, 1)));

     
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        -Math.PI / 4, // Start at an angle (avoid front view)
        Math.PI / 2,  // Final rotation: clear side view
        easeOut(Math.min(elapsed / 2, 1))
      );
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      // Initial position and slight rotation
      modelRef.current.position.set(0, 5, 0); // Start above the scene
      modelRef.current.rotation.set(0, -Math.PI / 4, 0); 
    }
  }, []);

  return <Vansss ref={modelRef} scale={0.6} />;
};

const VanModel = () => {
  return (
    <Canvas shadows style={{ height: '100%', width: '100%' }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

    
     

      {/* Animated Van */}
      <Stage adjustCamera intensity={3} environment="sunset" shadows={{ type: 'soft' }}>
        <AnimatedVan />
      </Stage>

      {/* Environment for Realism */}
      {/* <Environment preset="sunset" background /> */}

      {/* OrbitControls */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3} // Limit vertical rotation
        target={[0, 0, 0]} 
        position={[8, 2, 8]}
        autoRotate autoRotateSpeed={1.8}
      />
    </Canvas>
  );
};

export default VanModel;
