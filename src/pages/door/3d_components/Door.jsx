import React from "react";
import { useGLTF } from "@react-three/drei";
import { useGlassMaterial, useMaterial } from "./AllMaterials";
import { useDoorStore } from "@/store/door_store";
import { getHardwareColour } from "@/utils/utils";

export function DoorModelJSX(props) {
  const { nodes, materials } = useGLTF("/models/door.glb");

  // Subscribe to global store fields
  const verglasung = useDoorStore((s) => s.door.verglasung);

  const schloss = useDoorStore((s) => s.door.schloss);
  const schlossColour = getHardwareColour(schloss);

  console.log(verglasung);

  console.log(schloss);

  // Visibility logic
  const showGlass = verglasung && verglasung !== "Ohne Verglasung";
  const showSchloss = schloss && schloss !== "Ohne";

  // Create new material instances when values change
  const glassMaterial = useGlassMaterial(verglasung);
  const schlossMaterial = useMaterial(schlossColour);

  return (
    <group {...props} dispose={null}>
      {/* Main Door */}
      <mesh
        geometry={nodes.door.geometry}
        material={materials.Material}
        position={[1.2, 2.1, -0.971]}
      />

      {/* Glass */}
      {showGlass && (
        <mesh
          geometry={nodes.glass.geometry}
          material={glassMaterial}
          position={[0.883, 3.492, -0.004]}
        />
      )}

      {/* Handle */}
      {showSchloss && (
        <>
          <mesh
            geometry={nodes.handle.geometry}
            material={schlossMaterial}
            position={[0.361, 2.791, -1.013]}
            rotation={[-Math.PI, 0, 0]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.lock_hole.geometry}
            material={schlossMaterial}
            position={[0.358, 2.354, -1.011]}
            rotation={[-Math.PI, 0, 0]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.handle001.geometry}
            material={schlossMaterial}
            position={[0.362, 2.14, -0.925]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.lock_hole001.geometry}
            material={schlossMaterial}
            position={[0.359, 2.219, -0.927]}
            scale={2.692}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("/models/door.glb");
