"use client";

import { ClothingCard } from "@/components/clothing/ClothingCard";
import type { ClothingItem } from "@/types/clothing";

type ClothingListProps = {
  items: ClothingItem[];
  selectedItem: ClothingItem;
  onSelectItem: (item: ClothingItem) => void;
};

export function ClothingList({
  items,
  selectedItem,
  onSelectItem,
}: ClothingListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <ClothingCard
          key={item.id}
          item={item}
          isSelected={item.id === selectedItem.id}
          onSelect={onSelectItem}
        />
      ))}
    </div>
  );
}