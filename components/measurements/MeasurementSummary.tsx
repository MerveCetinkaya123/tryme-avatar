import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { BodyMeasurement } from "@/types/measurement";

type MeasurementSummaryProps = {
  measurements: BodyMeasurement | null;
};

export function MeasurementSummary({ measurements }: MeasurementSummaryProps) {
  if (!measurements) {
    return (
      <div className="rounded-2xl border border-dashed p-6 text-sm text-slate-500">
        No measurement data saved yet. Fill the form to create your mini avatar
        profile.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-slate-50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Saved Body Measurements
      </h3>

      <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <p>Height: {measurements.height} cm</p>
        <p>Weight: {measurements.weight} kg</p>
        <p>Chest: {measurements.chest} cm</p>
        <p>Waist: {measurements.waist} cm</p>
        <p>Hip: {measurements.hip} cm</p>
        <p>Shoulder Circumference: {measurements.shoulder} cm</p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/avatar">View My Avatar</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/try-on">Go to Try-On</Link>
        </Button>
      </div>
    </div>
  );
}