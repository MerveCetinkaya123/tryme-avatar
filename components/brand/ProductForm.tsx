"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ClothingCategory, ClothingItem, ClothingSize } from "@/types/clothing";

type ProductFormProps = {
  onAddProduct: (product: ClothingItem) => void;
};

export function ProductForm({ onAddProduct }: ProductFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ClothingCategory>("top");
  const [description, setDescription] = useState("");
  const [colorHex, setColorHex] = useState("#111827");
  const [sizes, setSizes] = useState("S,M,L");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const availableSizes = sizes
      .split(",")
      .map((size) => size.trim().toUpperCase())
      .filter(Boolean) as ClothingSize[];

    const newProduct: ClothingItem = {
      id: `brand-product-${Date.now()}`,
      name,
      category,
      description,
      colorHex,
      availableSizes,
    };

    onAddProduct(newProduct);

    setName("");
    setCategory("top");
    setDescription("");
    setColorHex("#111827");
    setSizes("S,M,L");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Product name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Oversized Blazer"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value as ClothingCategory)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="top">Top</option>
          <option value="dress">Dress</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          type="text"
          placeholder="A product prepared for virtual try-on preview."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="colorHex">Product color</Label>
        <Input
          id="colorHex"
          type="color"
          value={colorHex}
          onChange={(event) => setColorHex(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sizes">Available sizes</Label>
        <Input
          id="sizes"
          type="text"
          placeholder="XS,S,M,L,XL"
          value={sizes}
          onChange={(event) => setSizes(event.target.value)}
          required
        />
        <p className="text-xs text-slate-500">
          Write sizes separated by commas. Example: XS,S,M,L,XL
        </p>
      </div>

      <Button type="submit" className="w-full">
        Add Product
      </Button>
    </form>
  );
}