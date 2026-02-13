import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  Environment,
} from "@react-three/drei";
import { useState, Suspense } from "react";

import { DoorModelJSX } from "@/pages/door/3d_components/Door";
import {
  DoorConfigurationForm2,
  DoorConfiguratorForm,
} from "@/components/door_form/Total_door_form";

export default function DoorConfigurator() {
  const [glassType, setGlassType] = useState("Klar");
  const [handle, setHandle] = useState("Ohne");
  const [handleColor, setHandleColor] = useState("Matt Schwarz");

  return (
    <div className="w-screen flex  bg-white">
      <div className="flex mx-auto gap-3 justify-center w-270">
        {/* Left: 3D Canvas */}
        <div className="w-135 h-[80vh] sticky top-1">
          <Canvas
            shadows
            camera={{ position: [2, 1, 2] }}
            style={{ background: "#1f1f1f" }}
          >
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport />
            </GizmoHelper>
            <axesHelper args={[10]} />
            <gridHelper args={[40, 20, "red", 0x55ccff]} />
            <OrbitControls target={[1.2, 2.1, -0.971]} enablePan={true} />
            <directionalLight intensity={2} position={[2, 5, 1]} />
            <Suspense fallback={null}>
              <Environment preset="city" />
            </Suspense>

            {/* Door Model */}
            <DoorModelJSX
              position={[0, 0, 0]}
              glassType={glassType}
              handle={handle}
              handleColor={handleColor}
            />
          </Canvas>
        </div>

        {/* Right: Configurator Form */}
        <div className="flex flex-col top-5 w-135  h-fit  relative">
          <DoorConfigurationForm2
            glassType={glassType}
            setGlassType={setGlassType}
            handle={handle}
            setHandle={setHandle}
            handleColor={handleColor}
            setHandleColor={setHandleColor}
          />
          <DoorConfiguratorForm
            glassType={glassType}
            setGlassType={setGlassType}
            handle={handle}
            setHandle={setHandle}
            handleColor={handleColor}
            setHandleColor={setHandleColor}
          />
        </div>
      </div>
    </div>
  );
}
