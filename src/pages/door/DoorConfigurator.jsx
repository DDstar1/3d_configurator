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

import { DoorModelJSX } from "@/pages/door/3d_components/Door";
import DoorConfiguratorForm from "@/components/door_form";

export default function DoorConfigurator() {
  const [glassType, setGlassType] = useState("Klar");
  const [handle, setHandle] = useState("Ohne");
  const [handleColor, setHandleColor] = useState("Matt Schwarz");
  return (
    <div className="h-screen w-screen relative">
      {/* Configurator Form Overlay */}
      <DoorConfiguratorForm
        glassType={glassType}
        setGlassType={setGlassType}
        handle={handle}
        setHandle={setHandle}
        handleColor={handleColor}
        setHandleColor={setHandleColor}
      />

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [2, 1, 2] }}>
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <axesHelper args={[10]} />
        <gridHelper args={[40, 20, "red", 0x55ccff]} />
        <OrbitControls target={[1.2, 2.1, -0.971]} enablePan={true} />
        <directionalLight intensity={2} position={[2, 5, 1]} />
        <Environment preset="city" />

        {/* Door Model with props */}
        <DoorModelJSX
          position={[0, 0, 0]}
          glassType={glassType}
          handle={handle}
          handleColor={handleColor}
        />
      </Canvas>
    </div>
  );
}
