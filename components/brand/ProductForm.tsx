"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type {
  ClothingCategory,
  ClothingItem,
  ClothingSize,
} from "@/types/clothing";

type ProductFormProps = {
  onAddProduct: (product: ClothingItem) => void;
};

const validSizes: ClothingSize[] = ["XS", "S", "M", "L", "XL"];

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
      .filter((size): size is ClothingSize =>
        validSizes.includes(size as ClothingSize)
      );

    if (!name.trim() || !description.trim() || availableSizes.length === 0) {
      return;
    }

    const newProduct: ClothingItem = {
      id: `brand-product-${Date.now()}`,
      name: name.trim(),
      category,
      description: description.trim(),
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
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as ClothingCategory)}
        >
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="dress">Dress</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="A product prepared for virtual try-on preview."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-2">
          <Label htmlFor="colorHex">Product color</Label>
          <Input
            id="colorHex"
            type="color"
            value={colorHex}
            onChange={(event) => setColorHex(event.target.value)}
            className="h-11 cursor-pointer p-1"
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
      </div>

      <Button type="submit" className="w-full">
        Add product
      </Button>
    </form>
  );
}