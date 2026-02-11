import { Canvas, useFrame } from "@react-three/fiber";
import { AmbientLight, DirectionalLight } from "three";
import { useRef } from "react";
import {
  FirstPersonControls,
  GizmoViewport,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { useControls } from "leva";
import { SpotLightHelper } from "three";

function LightWithHelper() {
  const light = useRef();
  const { angle, penumbra } = useControls({
    angle: Math.PI / 8,
    penumbra: { value: 0, min: 0, max: 1 },
  });
  useHelper(light, SpotLightHelper, "orange");
  return (
    <spotLight
      angle={angle}
      penumbra={penumbra}
      ref={light}
      intensity={100}
      position={[2, 3, 1]}
      castShadow
    />
  );
}

function AnimatedBox() {
  const boxRef = useRef();

  const { color, speed } = useControls({
    color: "#0000ff",
    speed: { value: 0.005, min: 0.001, max: 0.08, step: 0.001 },
  });

  useFrame(() => {
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });
  return (
    <mesh castShadow ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
}

export default function DoorConfigurator() {
  return (
    <div id="door_canvas" className="h-screen w-screen">
      <Canvas shadows camera={{ position: [2, 1, 2] }}>
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <axesHelper args={[10]} />
        <gridHelper args={[40, 20, "red", 0x55ccff]} />
        <OrbitControls enablePan={true} />
        <AnimatedBox />
        {/*  <directionalLight intensity={2} position={[2, 5, 1]} />;
        <ambientLight intensity={0.7} color={0xfcfcfc} />;*/}
        <LightWithHelper />
        {/*  <  <pointLight intensity={50} position={[2, 5, 1]} />*/}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
