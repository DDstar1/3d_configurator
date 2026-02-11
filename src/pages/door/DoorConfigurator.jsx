import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { AmbientLight, DirectionalLight } from "three";
import { useRef, useState } from "react";
import {
  FirstPersonControls,
  GizmoViewport,
  OrbitControls,
  useHelper,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { GizmoHelper, Environment } from "@react-three/drei";
import { useControls } from "leva";
import { SpotLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DoorModelJSX } from "@/pages/door/3d_components/Door";

function LightWithHelper() {
  const { intensity, color } = useControls({
    intensity: { value: 0.8, min: 0, max: 5, step: 0.1 },
    color: "#ffffff",
  });

  return <ambientLight intensity={0.8} />;
}

function AnimatedBox() {
  const boxRef = useRef();

  const { color, speed } = useControls({
    color: "#0000ff",
    speed: { value: 0.005, min: 0.001, max: 0.08, step: 0.001 },
  });

  const [wireFrame, setWireFrame] = useState(false);

  const handleClick = () => {
    setWireFrame(!wireFrame);
    console.log("Box clicked! Wireframe mode:", !wireFrame);
  };

  useFrame(() => {
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });
  return (
    <mesh castShadow ref={boxRef} onClick={handleClick} position={[3, 3, 3]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} wireframe={wireFrame} />
    </mesh>
  );
}

function Model() {
  const result = useGLTF("/models/door.glb");
  console.log(result);
  return <primitive object={result.scene} />;
}

function SphereWithTexture() {
  const texture = useTexture("/textures/wood/wood_texture.jpg");
  return (
    <mesh position={[-2, 3, 2]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
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
        <directionalLight intensity={2} position={[2, 5, 1]} />;
        <Environment preset="city" />
        <DoorModelJSX position={[0, 0, 0]} />
        {/* <AnimatedBox /> */}
        {/*   <SphereWithTexture /> */}
      </Canvas>
    </div>
  );
}
