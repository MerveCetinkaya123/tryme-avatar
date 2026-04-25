"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Mesh,
  MeshStandardMaterial,
  Object3D,
  SkinnedMesh,
} from "three";

const AVATAR_MODEL_PATH = "/models/avatar.glb?v=2";

function isMesh(object: Object3D): object is Mesh | SkinnedMesh {
  return (object as Mesh).isMesh === true;
}

export function AvatarModel() {
  const { scene } = useGLTF(AVATAR_MODEL_PATH);

  const cleanedScene = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (isMesh(child)) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.geometry) {
          child.geometry.deleteAttribute("color");
          child.geometry.computeVertexNormals();
        }

        child.material = new MeshStandardMaterial({
          color: "#b88a72",
          roughness: 0.68,
          metalness: 0.02,
          vertexColors: false,
        });
      }
    });

    return clonedScene;
  }, [scene]);

  return (
    <group position={[0, -1.15, 0]} scale={1.25}>
      <primitive object={cleanedScene} />
    </group>
  );
}

useGLTF.preload(AVATAR_MODEL_PATH);