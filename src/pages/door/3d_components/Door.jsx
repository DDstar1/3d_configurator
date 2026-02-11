import React from "react";
import { useGLTF } from "@react-three/drei";
import { getGlassMaterial, getColour } from "./AllMaterials";

export function DoorModelJSX({ glassType, handle, handleColor, ...props }) {
  const { nodes, materials } = useGLTF("/models/door.glb");

  // Decide whether glass is visible
  const showGlass = glassType && glassType !== "Ohne";

  // Decide whether handle is visible
  const showHandle = handle && handle !== "Ohne";

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
          material={getGlassMaterial(glassType)}
          position={[0.883, 3.492, -0.004]}
        />
      )}

      {/* Handle */}
      {showHandle && (
        <>
          <mesh
            geometry={nodes.handle.geometry}
            material={getColour(handleColor)}
            position={[0.361, 2.791, -1.013]}
            rotation={[-Math.PI, 0, 0]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.lock_hole.geometry}
            material={getColour(handleColor)}
            position={[0.358, 2.354, -1.011]}
            rotation={[-Math.PI, 0, 0]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.handle001.geometry}
            material={getColour(handleColor)}
            position={[0.362, 2.14, -0.925]}
            scale={2.692}
          />
          <mesh
            geometry={nodes.lock_hole001.geometry}
            material={getColour(handleColor)}
            position={[0.359, 2.219, -0.927]}
            scale={2.692}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("/models/door.glb");
