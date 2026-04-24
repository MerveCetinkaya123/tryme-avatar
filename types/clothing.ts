export type ClothingCategory = "top" | "dress" | "bottom";

export type ClothingSize = "XS" | "S" | "M" | "L" | "XL";

export type ClothingItem = {
  id: string;
  name: string;
  category: ClothingCategory;
  description: string;
  colorHex: string;
  availableSizes: ClothingSize[];
  recommendedSize: ClothingSize;
};