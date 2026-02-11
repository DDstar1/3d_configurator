import * as THREE from "three";

export default function Door({ config }) {
  // Convert mm → meters (Three.js uses meters)
  const width = config.width / 1000;
  const height = config.height / 1000;

  // Frame thickness
  const frameDepth = 0.08;

  return (
    <group position={[0, 0, 0]}>
      {/* FRAME */}
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, frameDepth]} />
        <meshStandardMaterial color={config.frameColor} />
      </mesh>

      {/* GLASS */}
      <mesh position={[0, height / 2, frameDepth / 2 + 0.01]}>
        <boxGeometry args={[width * 0.85, height * 0.85, 0.02]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={config.glassType === "satinato" ? 0.6 : 0.1}
          roughness={config.glassType === "satinato" ? 0.6 : 0}
          transmission={1}
          thickness={0.02}
        />
      </mesh>

      {/* HANDLE */}
      {config.handleType !== "none" && (
        <group
          position={[
            width / 2 - 0.05, // stays locked to door edge
            height / 2,
            frameDepth / 2 + 0.03,
          ]}
        >
          {/* handle bar */}
          <mesh>
            <boxGeometry args={[0.02, 0.25, 0.02]} />
            <meshStandardMaterial color="#888888" />
          </mesh>

          {/* handle base */}
          <mesh position={[0, -0.14, 0]}>
            <boxGeometry args={[0.04, 0.02, 0.04]} />
            <meshStandardMaterial color="#666666" />
          </mesh>
        </group>
      )}
    </group>
  );
}
