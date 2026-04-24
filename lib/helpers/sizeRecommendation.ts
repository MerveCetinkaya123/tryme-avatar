import type { ClothingCategory, ClothingSize } from "@/types/clothing";
import type { BodyMeasurement } from "@/types/measurement";

const sizeOrder: ClothingSize[] = ["XS", "S", "M", "L", "XL"];

const chestSizeRules = [
  { max: 82, size: "XS" },
  { max: 88, size: "S" },
  { max: 94, size: "M" },
  { max: 102, size: "L" },
  { max: Infinity, size: "XL" },
] as const;

const waistSizeRules = [
  { max: 64, size: "XS" },
  { max: 70, size: "S" },
  { max: 76, size: "M" },
  { max: 84, size: "L" },
  { max: Infinity, size: "XL" },
] as const;

const hipSizeRules = [
  { max: 90, size: "XS" },
  { max: 96, size: "S" },
  { max: 102, size: "M" },
  { max: 110, size: "L" },
  { max: Infinity, size: "XL" },
] as const;

function findSizeByMeasurement(
  value: number,
  rules: readonly { max: number; size: ClothingSize }[]
): ClothingSize {
  return rules.find((rule) => value <= rule.max)?.size ?? "XL";
}

function getLargestSize(sizes: ClothingSize[]): ClothingSize {
  return sizes.reduce((largestSize, currentSize) => {
    const largestIndex = sizeOrder.indexOf(largestSize);
    const currentIndex = sizeOrder.indexOf(currentSize);

    return currentIndex > largestIndex ? currentSize : largestSize;
  }, "XS");
}

export function getRecommendedSize(
  measurements: BodyMeasurement,
  category: ClothingCategory
): ClothingSize {
  const chestSize = findSizeByMeasurement(
    measurements.chest,
    chestSizeRules
  );

  const waistSize = findSizeByMeasurement(
    measurements.waist,
    waistSizeRules
  );

  const hipSize = findSizeByMeasurement(measurements.hip, hipSizeRules);

  if (category === "top") {
    return getLargestSize([chestSize, waistSize]);
  }

  if (category === "bottom") {
    return getLargestSize([waistSize, hipSize]);
  }

  return getLargestSize([chestSize, waistSize, hipSize]);
}