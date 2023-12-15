import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInnner, pointsOuter } from "./util";

const Thread3d = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{ position: [10, -7.5, -5] }}
        className="bg-[#050308]"
        style={{ height: "100vh" }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={ref}>
      {pointsInnner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        color={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        emissive={color}
      />
    </Sphere>
  );
};

export default Thread3d;


// camera={{ position: [10, -7.5, -5] }}
