import type { BodyMeasurement } from "@/types/measurement";

export type AvatarProportions = {
  bodyHeight: number;
  shoulderWidth: number;
  waistWidth: number;
  hipWidth: number;
  legHeight: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function calculateAvatarProportions(
  measurements: BodyMeasurement
): AvatarProportions {
  const heightRatio = measurements.height / 165;
  const shoulderRatio = measurements.shoulder / 98;
  const waistRatio = measurements.waist / 70;
  const hipRatio = measurements.hip / 95;

  return {
    bodyHeight: clamp(260 * heightRatio, 230, 310),
    shoulderWidth: clamp(120 * shoulderRatio, 95, 150),
    waistWidth: clamp(85 * waistRatio, 70, 120),
    hipWidth: clamp(115 * hipRatio, 90, 150),
    legHeight: clamp(130 * heightRatio, 110, 160),
  };
}