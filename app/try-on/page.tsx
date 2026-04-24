import Link from "next/link";

import { TryOnPreview } from "@/components/clothing/TryOnPreview";

export default function TryOnPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Back to homepage
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Virtual try-on
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Try clothing on your mini avatar
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Select a clothing item and preview how it appears on your
            measurement-based mini avatar.
          </p>
        </div>

        <div className="mt-10">
          <TryOnPreview />
        </div>
      </div>
    </main>
  );
}