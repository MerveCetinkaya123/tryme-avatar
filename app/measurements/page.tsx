import Link from "next/link";

import { MeasurementForm } from "@/components/measurements/MeasurementForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MeasurementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Back to homepage
        </Link>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-2xl">Body Measurements</CardTitle>
            <p className="text-sm text-slate-500">
              Enter your measurements to prepare your mini avatar profile.
            </p>
          </CardHeader>

          <CardContent>
            <MeasurementForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}