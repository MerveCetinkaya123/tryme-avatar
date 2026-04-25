"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ProductForm } from "@/components/brand/ProductForm";
import { ProductTable } from "@/components/brand/ProductTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

  const customProductCount = Math.max(products.length - clothingItems.length, 0);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <Button asChild variant="ghost" className="px-0 text-slate-600">
          <Link href="/">Back to home</Link>
        </Button>

        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="secondary">Brand Dashboard</Badge>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Manage your TryMe Avatar products
              </h1>

              <p className="text-base text-slate-600">
                Add clothing products, review your product list, and prepare
                brand-side items for the customer try-on experience.
              </p>
            </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[360px]">
  <Card className="min-w-[160px]">
    <CardHeader className="pb-2">
      <CardDescription>Total products</CardDescription>
      <CardTitle className="text-3xl">{products.length}</CardTitle>
    </CardHeader>
  </Card>

  <Card className="min-w-[160px]">
    <CardHeader className="pb-2">
      <CardDescription>Brand products</CardDescription>
      <CardTitle className="text-3xl">{customProductCount}</CardTitle>
    </CardHeader>
  </Card>
</div>
          </div>
        </section>

        <Separator />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Add new product</CardTitle>
              <CardDescription>
                Create a demo clothing item for the brand panel.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ProductForm onAddProduct={handleAddProduct} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product inventory</CardTitle>
              <CardDescription>
                View default demo items and products added by the brand.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ProductTable products={products} />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}