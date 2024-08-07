import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";

export function Lemon() {
  const { nodes, materials } = useGLTF("/lemon_4k.gltf/lemon_4k.gltf");

  return (
    <mesh geometry={nodes.lemon.geometry} position={[0.1, 0.1, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
      <MeshWobbleMaterial factor={0.6} map={materials.lemon.map} />
    </mesh>
  );
}
