import * as THREE from "three";

export const getHardwareColour = (schloss) => {
  if (!schloss) return null;

  if (schloss.includes("Edelstahl")) return "Edelstahl";
  if (schloss.includes("Matt Schwarz")) return "Matt Schwarz";

  return "Silberfarbig"; // fallback if needed
};

export const getDoorMetrics = (doorRef) => {
  if (!doorRef.current) return null;

  const box = new THREE.Box3().setFromObject(doorRef.current);

  const size = new THREE.Vector3();
  const center = new THREE.Vector3();

  box.getSize(size); // full width/height/depth
  box.getCenter(center); // world center position

  return {
    width: size.x,
    height: size.y,
    depth: size.z,
    centerX: center.x,
    centerY: center.y,
    centerZ: center.z,
  };
};
