"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ClothingList } from "@/components/clothing/ClothingList";
import { Button } from "@/components/ui/button";
import { clothingItems } from "@/lib/data/clothingData";
import { calculateAvatarProportions } from "@/lib/helpers/avatarCalculator";
import type { ClothingItem } from "@/types/clothing";
import type { BodyMeasurement } from "@/types/measurement";
import { getRecommendedSize } from "@/lib/helpers/sizeRecommendation";
const STORAGE_KEY = "tryme-body-measurements";

export function TryOnPreview() {
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [selectedItem, setSelectedItem] = useState<ClothingItem>(
    clothingItems[0]
  );

  useEffect(() => {
    const storedMeasurements = localStorage.getItem(STORAGE_KEY);

    if (storedMeasurements) {
      const parsedMeasurements = JSON.parse(
        storedMeasurements
      ) as BodyMeasurement;

      setMeasurements(parsedMeasurements);
    }
  }, []);

  if (!measurements) {
    return (
      <div className="rounded-3xl border border-dashed bg-white p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-950">
          Measurements are required
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Please enter your body measurements before using the virtual try-on
          preview.
        </p>

        <Button asChild className="mt-6">
          <Link href="/measurements">Enter Measurements</Link>
        </Button>
      </div>
    );
  }

  const proportions = calculateAvatarProportions(measurements);
  const recommendedSize = getRecommendedSize(
  measurements,
  selectedItem.category
);

  const showTop =
    selectedItem.category === "top" || selectedItem.category === "dress";
  const showBottom =
    selectedItem.category === "bottom" || selectedItem.category === "dress";

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex min-h-[480px] items-center justify-center rounded-3xl bg-slate-100 p-8">
            <div className="flex flex-col items-center">
              <div className="mb-3 h-20 w-20 rounded-full bg-slate-300 shadow-sm" />

              <div className="relative flex flex-col items-center">
                <div
                  className="rounded-t-[70px] shadow-sm"
                  style={{
                    width: `${proportions.shoulderWidth}px`,
                    height: `${proportions.bodyHeight * 0.36}px`,
                    backgroundColor: showTop
                      ? selectedItem.colorHex
                      : "#94a3b8",
                  }}
                />

                <div
                  style={{
                    width: `${proportions.waistWidth}px`,
                    height: `${proportions.bodyHeight * 0.22}px`,
                    backgroundColor: showTop
                      ? selectedItem.colorHex
                      : "#64748b",
                  }}
                />

                <div
                  className="rounded-b-[50px] shadow-sm"
                  style={{
                    width: `${proportions.hipWidth}px`,
                    height: `${proportions.bodyHeight * 0.2}px`,
                    backgroundColor:
                      selectedItem.category === "dress"
                        ? selectedItem.colorHex
                        : "#94a3b8",
                  }}
                />

                <div className="mt-2 flex gap-4">
                  <div
                    className="rounded-b-full"
                    style={{
                      width: "32px",
                      height: `${proportions.legHeight}px`,
                      backgroundColor: showBottom
                        ? selectedItem.colorHex
                        : "#cbd5e1",
                    }}
                  />
                  <div
                    className="rounded-b-full"
                    style={{
                      width: "32px",
                      height: `${proportions.legHeight}px`,
                      backgroundColor: showBottom
                        ? selectedItem.colorHex
                        : "#cbd5e1",
                    }}
                  />
                </div>
              </div>

              <p className="mt-6 text-sm font-medium text-slate-600">
                Virtual try-on preview
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Selected item
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            {selectedItem.name}
          </h2>

          <p className="mt-4 text-slate-600">{selectedItem.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Category</p>
              <p className="text-lg font-semibold capitalize text-slate-950">
                {selectedItem.category}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Recommended size</p>
              <p className="text-lg font-semibold text-slate-950">
                {recommendedSize}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
              <p className="text-sm text-slate-500">Available sizes</p>
              <p className="text-lg font-semibold text-slate-950">
                {selectedItem.availableSizes.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/avatar">View Avatar</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/measurements">Update Measurements</Link>
            </Button>
          </div>
        </div>
      </div>

      <section>
        <h2 className="mb-5 text-2xl font-bold text-slate-950">
          Choose a clothing item
        </h2>

        <ClothingList
          items={clothingItems}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />
      </section>
    </div>
  );
}