import { Canvas } from "@react-three/fiber";
export default function DoorConfigurator() {
  return (
    <div id="door_canvas" className="h-screen w-screen">
      <Canvas className="bg-blue-500">
        <mesh></mesh>
      </Canvas>
    </div>
  );
}
