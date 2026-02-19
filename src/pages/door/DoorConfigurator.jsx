import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  Environment,
} from "@react-three/drei";
import { useState, Suspense } from "react";
import { DoorModelJSX } from "@/pages/door/3d_components/Door";
import { DoorConfigurationForm2 } from "@/components/door_form/Total_door_form";
import { DisplayAllValues } from "@/components/DisplayAllValues";

export default function DoorConfigurator() {
  return (
    <div className="min-h-screen w-screen flex  bg-white">
      <div className="flex mx-auto gap-3 justify-center w-270">
        {/* Left: 3D Canvas */}
        <div className="w-135 h-[80vh] sticky top-1">
          <Canvas
            shadows
            camera={{ position: [0, 1, 2] }}
            style={{ background: "#1f1f1f" }}
          >
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport />
            </GizmoHelper>
            <axesHelper args={[10]} />
            <gridHelper args={[40, 20, "red", 0x55ccff]} />
            <OrbitControls target={[0, 1, 0]} enablePan={true} />
            <directionalLight intensity={2} position={[2, 5, 1]} />
            <Suspense fallback={null}>
              <Environment preset="city" />
            </Suspense>

            {/* Door Model */}
            <DoorModelJSX />
          </Canvas>
        </div>

        {/* Right: Configurator Form */}
        <div className="flex flex-col top-5 w-135  h-fit  relative">
          <DoorConfigurationForm2 />
          <DisplayAllValues />
        </div>
      </div>
    </div>
  );
}
