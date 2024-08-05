import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id='canvas-container' style={{ width: "100dvw", height: "100dvh" }}>
      <Canvas style={{ backgroundColor: "white" }}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
