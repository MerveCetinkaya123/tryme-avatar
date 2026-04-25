"use client";

import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";

import { ProfessionalAvatarPlaceholder } from "@/components/avatar-3d/ProfessionalAvatarPlaceholder";

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

      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15}>
        <ProfessionalAvatarPlaceholder />
      </Float>

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
        minDistance={3}
        maxDistance={6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}