"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import { AvatarModel } from "@/components/avatar-3d/AvatarModel";

export function AvatarScene() {
  return (
    <>
      <color attach="background" args={["#f8fafc"]} />

      <ambientLight intensity={0.8} />

      <directionalLight
        position={[3, 5, 4]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <spotLight
        position={[-4, 5, 2]}
        intensity={1.2}
        angle={0.35}
        penumbra={0.6}
        castShadow
      />

      <AvatarModel />

      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.35}
        scale={5}
        blur={2.4}
        far={3}
      />

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        minDistance={2.5}
        maxDistance={6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}