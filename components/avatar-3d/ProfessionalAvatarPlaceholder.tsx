"use client";

export function ProfessionalAvatarPlaceholder() {
  return (
    <group position={[0, -0.55, 0]}>
      {/* Head */}
      <mesh position={[0, 2.35, 0]} castShadow>
        <sphereGeometry args={[0.32, 48, 48]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.45} metalness={0.05} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.95, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.13, 0.28, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.5} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <capsuleGeometry args={[0.42, 0.95, 16, 48]} />
        <meshStandardMaterial color="#64748b" roughness={0.48} metalness={0.08} />
      </mesh>

      {/* Waist / hips */}
      <mesh position={[0, 0.63, 0]} scale={[1.25, 0.65, 0.75]} castShadow>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial color="#64748b" roughness={0.5} />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.62, 1.35, 0]} rotation={[0, 0, -0.12]} castShadow>
        <capsuleGeometry args={[0.1, 0.95, 12, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.55} />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.62, 1.35, 0]} rotation={[0, 0, 0.12]} castShadow>
        <capsuleGeometry args={[0.1, 0.95, 12, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.55} />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.22, -0.25, 0]} castShadow>
        <capsuleGeometry args={[0.13, 1.15, 12, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.55} />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.22, -0.25, 0]} castShadow>
        <capsuleGeometry args={[0.13, 1.15, 12, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.55} />
      </mesh>
    </group>
  );
}