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
import { supabase } from "@/lib/supabase/client";
import type {
  ClothingCategory,
  ClothingItem,
  ClothingSize,
} from "@/types/clothing";

type SupabaseBrandProduct = {
  id: string;
  name: string;
  category: ClothingCategory;
  description: string;
  color_hex: string;
  available_sizes: ClothingSize[];
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

function mapSupabaseProduct(product: SupabaseBrandProduct): ClothingItem {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    colorHex: product.color_hex,
    availableSizes: product.available_sizes,
  };
}

export default function BrandPanelPage() {
  const [products, setProducts] = useState<ClothingItem[]>(clothingItems);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrandProducts() {
      setIsLoading(true);
      setErrorMessage(null);

      const { data, error } = await supabase
        .from("brand_products")
        .select(
          "id, name, category, description, color_hex, available_sizes, image_url, created_at, updated_at"
        )
        .order("created_at", { ascending: false });

      if (error) {
        setErrorMessage("Brand products could not be loaded from Supabase.");
        setProducts(clothingItems);
        setIsLoading(false);
        return;
      }

      const supabaseProducts = (data ?? []).map((product) =>
        mapSupabaseProduct(product as SupabaseBrandProduct)
      );

      setProducts([...clothingItems, ...supabaseProducts]);
      setIsLoading(false);
    }

    fetchBrandProducts();
  }, []);

  async function handleAddProduct(product: ClothingItem) {
    setErrorMessage(null);

    const { data, error } = await supabase
      .from("brand_products")
      .insert({
        name: product.name,
        category: product.category,
        description: product.description,
        color_hex: product.colorHex,
        available_sizes: product.availableSizes,
        image_url: null,
      })
      .select(
        "id, name, category, description, color_hex, available_sizes, image_url, created_at, updated_at"
      )
      .single();

    if (error) {
      setErrorMessage("Product could not be saved to Supabase.");
      return;
    }

    const newProduct = mapSupabaseProduct(data as SupabaseBrandProduct);
    setProducts((currentProducts) => [...currentProducts, newProduct]);
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
                  <CardDescription>Supabase products</CardDescription>
                  <CardTitle className="text-3xl">
                    {customProductCount}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Add new product</CardTitle>
              <CardDescription>
                Create a clothing item and save it to Supabase.
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
                View default demo items and products loaded from Supabase.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isLoading ? (
                <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-slate-500">
                  Loading products from Supabase...
                </div>
              ) : (
                <ProductTable products={products} />
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}