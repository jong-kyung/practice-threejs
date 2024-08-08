import { Canvas } from "@react-three/fiber";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Lemon } from "./Scene";

function App() {
  return (
    <div id='canvas-container' style={{ width: "100dvw", height: "100dvh" }}>
      <Canvas style={{ backgroundColor: "white" }}>
        <mesh>
          <ambientLight intensity={Math.PI / 2} />
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <meshStandardMaterial />
          <group scale={20} position={[0, 0, 0]}>
            <Lemon />
          </group>
          <PerspectiveCamera makeDefault position={[10, 10, 10]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
