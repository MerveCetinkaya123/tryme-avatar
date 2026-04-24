"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { MiniAvatar } from "@/components/avatar/MiniAvatar";
import { Button } from "@/components/ui/button";
import { calculateAvatarProportions } from "@/lib/helpers/avatarCalculator";
import type { BodyMeasurement } from "@/types/measurement";

const STORAGE_KEY = "tryme-body-measurements";

export function AvatarPreview() {
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);

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
          No measurements found
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          To create your mini avatar, first enter your body measurements. The
          avatar preview will be generated based on your saved data.
        </p>

        <Button asChild className="mt-6">
          <Link href="/measurements">Enter Measurements</Link>
        </Button>
      </div>
    );
  }

  const proportions = calculateAvatarProportions(measurements);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <MiniAvatar proportions={proportions} />
      </div>

      <div className="rounded-3xl border bg-white p-8">
        <h2 className="text-2xl font-bold text-slate-950">
          Your Avatar Profile
        </h2>

        <p className="mt-3 text-slate-600">
          This preview is generated from your saved body measurements. In the
          next stages, we will use this structure for clothing try-on and size
          recommendation.
        </p>

        <div className="mt-8 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-500">Height</p>
            <p className="text-lg font-semibold">{measurements.height} cm</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-500">Weight</p>
            <p className="text-lg font-semibold">{measurements.weight} kg</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-500">Chest</p>
            <p className="text-lg font-semibold">{measurements.chest} cm</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-500">Waist</p>
            <p className="text-lg font-semibold">{measurements.waist} cm</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-500">Hip</p>
            <p className="text-lg font-semibold">{measurements.hip} cm</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
           <p className="text-slate-500">Shoulder Circumference</p>
            <p className="text-lg font-semibold">
              {measurements.shoulder} cm
            </p>
          </div>
        </div>

       <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <Button asChild>
    <Link href="/try-on">Try Clothes</Link>
  </Button>

  <Button asChild variant="outline">
    <Link href="/measurements">Update Measurements</Link>
  </Button>

  <Button asChild variant="outline">
    <Link href="/">Back to Homepage</Link>
  </Button>
</div>
      </div>
    </div>
  );
}