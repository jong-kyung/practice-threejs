import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <div id='canvas-container' style={{ width: "100dvw", height: "100dvh" }}>
      <Canvas style={{ backgroundColor: "white" }}>
        <mesh>
          <boxGeometry />
          <ambientLight intensity={Math.PI / 2} />
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <meshStandardMaterial />
          <Environment preset='forest' background blur={1} />
          <PerspectiveCamera makeDefault position={[10, 10, 10]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
