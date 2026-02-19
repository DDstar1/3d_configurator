import React from "react";
import { useGLTF } from "@react-three/drei";
import { useGlassMaterial, useMaterial } from "./AllMaterials";
import { useDoorStore } from "@/store/door_store";
import { getHardwareColour } from "@/utils/utils";

export function DoorModelJSX(props) {
  const { nodes, materials } = useGLTF("/models/door.glb");

  /* ===============================
     BASE MODEL DIMENSIONS (GLB SIZE)
  =============================== */
  const BASE_WIDTH = 900;
  const BASE_HEIGHT = 2100;

  /* ===============================
     GLOBAL STORE VALUES
  =============================== */
  const verglasung = useDoorStore((s) => s.door.verglasung);
  const doorWidth = useDoorStore((s) => s.door.width);
  const doorHeight = useDoorStore((s) => s.door.height);
  const schloss = useDoorStore((s) => s.door.schloss);

  const schlossColour = getHardwareColour(schloss);

  /* ===============================
     SCALE CALCULATION
  =============================== */
  const scaleX = doorWidth / BASE_WIDTH;
  const scaleY = doorHeight / BASE_HEIGHT;

  /* ===============================
     VISIBILITY LOGIC
  =============================== */
  const showGlass = verglasung && verglasung !== "Ohne Verglasung";
  const showSchloss = schloss && schloss !== "Ohne";

  /* ===============================
     DYNAMIC MATERIALS
  =============================== */
  const glassMaterial = useGlassMaterial(verglasung);
  const schlossMaterial = useMaterial(schlossColour);

  console.log("Adjusted X position:", nodes.handle.position.x * 22); // Log the adjusted X position for debugging

  return (
    <group {...props} dispose={null}>
      {/* ===============================
          Scalable group: door frame + glass
      =============================== */}
      <group scale={[scaleX, scaleY, 1]}>
        <mesh geometry={nodes.door.geometry} material={materials.Material} />
        {showGlass && (
          <mesh geometry={nodes.glass.geometry} material={glassMaterial} />
        )}
      </group>

      {/* ===============================
          HANDLE + LOCK (fixed size, not scaled)
      =============================== */}
      {showSchloss && (
        <group>
          <mesh geometry={nodes.handle.geometry} material={schlossMaterial} />
          <mesh
            geometry={nodes.lock_hole.geometry}
            material={schlossMaterial}
          />
          <mesh
            geometry={nodes.handle001.geometry}
            material={schlossMaterial}
          />
          <mesh
            geometry={nodes.lock_hole001.geometry}
            material={schlossMaterial}
          />
        </group>
      )}
    </group>
  );
}

useGLTF.preload("/models/door.glb");
