"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ProductForm } from "@/components/brand/ProductForm";
import { ProductTable } from "@/components/brand/ProductTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clothingItems } from "@/lib/data/clothingData";
import type { ClothingItem } from "@/types/clothing";

const STORAGE_KEY = "tryme-brand-products";

export default function BrandPanelPage() {
  const [products, setProducts] = useState<ClothingItem[]>(clothingItems);

  useEffect(() => {
    const storedProducts = localStorage.getItem(STORAGE_KEY);

    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts) as ClothingItem[];
      setProducts([...clothingItems, ...parsedProducts]);
    }
  }, []);

  function handleAddProduct(product: ClothingItem) {
    const existingStoredProducts = localStorage.getItem(STORAGE_KEY);
    const parsedStoredProducts = existingStoredProducts
      ? (JSON.parse(existingStoredProducts) as ClothingItem[])
      : [];

    const updatedStoredProducts = [...parsedStoredProducts, product];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStoredProducts));
    setProducts([...clothingItems, ...updatedStoredProducts]);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Back to homepage
        </Link>

        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Brand panel
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Manage virtual try-on products
            </h1>

            <p className="mt-4 max-w-2xl text-slate-600">
              This prototype panel allows fashion brands to add demo clothing
              items and prepare them for TryMe Avatar virtual try-on previews.
            </p>
          </div>

          <Button asChild variant="outline">
            <Link href="/try-on">View Try-On Page</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Card>
            <CardHeader>
              <CardTitle>Add demo product</CardTitle>
              <p className="text-sm text-slate-500">
                Add a product to test how brand inventory can be managed.
              </p>
            </CardHeader>

            <CardContent>
              <ProductForm onAddProduct={handleAddProduct} />
            </CardContent>
          </Card>

          <div>
            <h2 className="mb-5 text-2xl font-bold text-slate-950">
              Product list
            </h2>

            <ProductTable products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}