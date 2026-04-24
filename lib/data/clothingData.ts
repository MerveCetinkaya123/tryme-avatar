import type { ClothingItem } from "@/types/clothing";

export const clothingItems: ClothingItem[] = [
  {
    id: "milla-basic-shirt",
    name: "Basic Fitted Shirt",
    category: "top",
    description: "A simple fitted top for daily outfits.",
    colorHex: "#111827",
    availableSizes: ["XS", "S", "M", "L"],
  },
  {
    id: "milla-summer-dress",
    name: "Summer Midi Dress",
    category: "dress",
    description: "A midi dress preview for avatar-based try-on.",
    colorHex: "#7c3aed",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: "milla-wide-leg-pants",
    name: "Wide Leg Pants",
    category: "bottom",
    description: "Comfortable pants for lower-body fit preview.",
    colorHex: "#475569",
    availableSizes: ["XS", "S", "M", "L", "XL"],
  },
];