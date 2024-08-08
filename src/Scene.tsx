import * as THREE from "three";
import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Lemon() {
  const lemonRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF("/lemon_4k.gltf/lemon_4k.gltf");

  useFrame((_, delta) => {
    if (lemonRef.current) {
      lemonRef.current.rotation.x += 1 * delta;
      lemonRef.current.rotation.y += 0.5 * delta;
      lemonRef.current.rotation.z += 0.5 * delta;
    }
  });

  return (
    <mesh
      geometry={(nodes.lemon as THREE.Mesh).geometry}
      position={[0.1, 0.1, 0.1]}
      rotation={[Math.PI / 2, 0, 0]}
      ref={lemonRef}
    >
      <MeshWobbleMaterial factor={0.6} map={(materials.lemon as THREE.MeshStandardMaterial).map} />
    </mesh>
  );
}
