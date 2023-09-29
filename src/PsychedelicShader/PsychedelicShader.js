import { useRef } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, OrbitControls } from '@react-three/drei';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

function MyCustomPlane() {
  const material = useRef();

  var uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "vec3", value: new THREE.Vector3(1, 1, 1) },
  };

  useFrame(({ clock }) => {
    material.current.uniforms.u_time.value =  clock.getElapsedTime();
  });

  return (
    <Plane args={[16, 10]}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}

        side={THREE.DoubleSide} 
      />
    </Plane>
  );
  
}

export default function PsychedelicShader() {

  return (
    <Canvas 
      dpr={window.devicePixelRatio} 
      camera={{ position: [0.0, 0.0, 10.0] }}
    >
      <MyCustomPlane />
      <OrbitControls />
    </Canvas>
  );
}
