"use client";

import type { ClothingItem } from "@/types/clothing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ClothingCardProps = {
  item: ClothingItem;
  isSelected: boolean;
  onSelect: (item: ClothingItem) => void;
};

export function ClothingCard({
  item,
  isSelected,
  onSelect,
}: ClothingCardProps) {
  return (
    <Card className={isSelected ? "border-slate-950" : ""}>
      <CardContent className="space-y-4 p-5">
        <div
          className="h-28 rounded-2xl border"
          style={{ backgroundColor: item.colorHex }}
        />

        <div>
          <h3 className="font-semibold text-slate-950">{item.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{item.description}</p>
        </div>

        <div className="text-sm text-slate-600">
          <p>Category: {item.category}</p>
          <p>Suggested size: {item.recommendedSize}</p>
        </div>

        <Button
          type="button"
          variant={isSelected ? "default" : "outline"}
          className="w-full"
          onClick={() => onSelect(item)}
        >
          {isSelected ? "Selected" : "Try on avatar"}
        </Button>
      </CardContent>
    </Card>
  );
}