"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { AvatarScene } from "@/components/avatar-3d/AvatarScene";

export function AvatarCanvas() {
  return (
    <div className="h-[560px] overflow-hidden rounded-3xl border bg-white shadow-xl">
      <Canvas
        shadows
        camera={{
          position: [0, 1.3, 4.4],
          fov: 42,
        }}
      >
        <Suspense fallback={null}>
          <AvatarScene />
        </Suspense>
      </Canvas>
    </div>
  );
}