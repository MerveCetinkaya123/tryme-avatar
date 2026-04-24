"use client";

import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MeasurementSummary } from "@/components/measurements/MeasurementSummary";
import type { BodyMeasurement } from "@/types/measurement";

const STORAGE_KEY = "tryme-body-measurements";

export function MeasurementForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [shoulder, setShoulder] = useState("");

  const [savedMeasurements, setSavedMeasurements] =
    useState<BodyMeasurement | null>(null);

  useEffect(() => {
    const storedMeasurements = localStorage.getItem(STORAGE_KEY);

    if (storedMeasurements) {
      const parsedMeasurements = JSON.parse(
        storedMeasurements
      ) as BodyMeasurement;

      setSavedMeasurements(parsedMeasurements);
      setHeight(String(parsedMeasurements.height));
      setWeight(String(parsedMeasurements.weight));
      setChest(String(parsedMeasurements.chest));
      setWaist(String(parsedMeasurements.waist));
      setHip(String(parsedMeasurements.hip));
      setShoulder(String(parsedMeasurements.shoulder));
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const bodyMeasurements: BodyMeasurement = {
      height: Number(height),
      weight: Number(weight),
      chest: Number(chest),
      waist: Number(waist),
      hip: Number(hip),
      shoulder: Number(shoulder),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(bodyMeasurements));
    setSavedMeasurements(bodyMeasurements);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="height">Height / Boy</Label>
            <Input
              id="height"
              type="number"
              placeholder="164"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight / Kilo</Label>
            <Input
              id="weight"
              type="number"
              placeholder="66"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chest">Chest / Göğüs</Label>
            <Input
              id="chest"
              type="number"
              placeholder="90"
              value={chest}
              onChange={(event) => setChest(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="waist">Waist / Bel</Label>
            <Input
              id="waist"
              type="number"
              placeholder="70"
              value={waist}
              onChange={(event) => setWaist(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hip">Hip / Kalça</Label>
            <Input
              id="hip"
              type="number"
              placeholder="96"
              value={hip}
              onChange={(event) => setHip(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shoulder">Shoulder / Omuz</Label>
            <Input
              id="shoulder"
              type="number"
              placeholder="38"
              value={shoulder}
              onChange={(event) => setShoulder(event.target.value)}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Save Measurements
        </Button>
      </form>

      <MeasurementSummary measurements={savedMeasurements} />
    </div>
  );
}