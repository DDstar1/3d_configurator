import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useGlassMaterial, useMaterial } from "./AllMaterials";
import { useDoorStore } from "@/store/door_store";
import { getHardwareColour, getDoorMetrics } from "@/utils/utils";

export function DoorModelJSX(props) {
  const { nodes, materials } = useGLTF("/models/door.glb");
  const door_ref = useRef();

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
     DOOR METRICS (after scaling)
  =============================== */
  const metrics = useMemo(() => {
    if (!door_ref.current) return null;
    console.log("Calculating door metrics...");
    console.log("getDoorMetrics:", getDoorMetrics(door_ref));
    return getDoorMetrics(door_ref);
  }, [doorWidth, doorHeight]);

  /* ===============================
     HANDLE POSITION CALCULATION
  =============================== */

  const handleX = useMemo(() => {
    const originalX = nodes.handle.position.x;
    if (!metrics) return originalX;

    if (anschlag === "DIN rechts") {
      // mirror around door center

      return metrics.centerX - (originalX - metrics.centerX);
    }

    return originalX;
  }, [anschlag, metrics]);

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
