import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGlassMaterial, useMaterial } from "./AllMaterials";
import { useDoorStore } from "@/store/door_store";
import { getHardwareColour, getMetrics } from "@/utils/utils";

export function DoorModelJSX(props) {
  const { nodes, materials } = useGLTF("/models/door.glb");
  const door_ref = useRef();
  const lock_hole_ref = useRef();
  const handle_ref = useRef(); // ← new ref on the handle mesh
  const handle001_ref = useRef(); // ← new ref on the handle mesh

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
  const doorType = useDoorStore((s) => s.door.doorType);
  const anschlag = useDoorStore((s) => s.door.anschlag);

  const schlossColour = getHardwareColour(schloss);

  /* ===============================
     SCALE CALCULATION
  =============================== */
  const scaleX = doorWidth / BASE_WIDTH;
  const scaleY = doorHeight / BASE_HEIGHT;

  /* ===============================
     HANDLE POSITION CALCULATION
  =============================== */
  const originalX = nodes.handle.position.x;
  const originalY = nodes.handle.position.y;
  let handleX = originalX;
  let handleY = originalY;

  if (anschlag === "DIN rechts") {
    const door_metrics = getMetrics(door_ref);
    const handle_metrics = getMetrics(lock_hole_ref);

    if (door_metrics && handle_metrics) {
      const mirroredCenterX =
        door_metrics.centerX - (handle_metrics.centerX - door_metrics.centerX);
      handleX = originalX + (mirroredCenterX - handle_metrics.centerX);
    }
  }

  /* ===============================
     VISIBILITY LOGIC
  =============================== */
  const showGlass = verglasung && verglasung !== "Ohne Verglasung";
  const showSchloss = schloss && schloss !== "Ohne";
  const showRebateEdge = doorType === "Gefalzt";

  /* ===============================
     DYNAMIC MATERIALS
  =============================== */
  const glassMaterial = useGlassMaterial(verglasung);
  const schlossMaterial = useMaterial(schlossColour);

  return (
    <group ref={door_ref} {...props} dispose={null}>
      {/* ===============================
          Scalable group
      =============================== */}
      <group scale={[scaleX, scaleY, 1]}>
        <mesh geometry={nodes.door.geometry} material={materials.Material} />
        {showGlass && (
          <mesh geometry={nodes.glass.geometry} material={glassMaterial} />
        )}
        {showRebateEdge && (
          <mesh
            geometry={nodes.rebate_edge.geometry}
            material={nodes.rebate_edge.material}
          />
        )}
      </group>

      {/* ===============================
          HANDLE (fixed size)
      =============================== */}
      {showSchloss && (
        <group position={[handleX, 0, 0]}>
          <mesh
            ref={handle_ref}
            rotation={[0, anschlag === "DIN rechts" ? Math.PI : 0, 0]}
            geometry={nodes.handle.geometry}
            material={schlossMaterial}
          />
          <mesh
            ref={lock_hole_ref}
            geometry={nodes.lock_hole.geometry}
            material={schlossMaterial}
          />
          <mesh
            ref={handle001_ref}
            rotation={[0, anschlag === "DIN rechts" ? Math.PI : 0, 0]}
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
