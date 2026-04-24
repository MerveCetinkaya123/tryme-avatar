import Link from "next/link";

import { AvatarPreview } from "@/components/avatar/AvatarPreview";

export default function AvatarPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Back to homepage
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Avatar preview
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Your mini avatar
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            This page shows the first version of the TryMe Avatar body preview.
            It uses manually entered measurements before moving to 3D and
            camera-based body analysis.
          </p>
        </div>

        <div className="mt-10">
          <AvatarPreview />
        </div>
      </div>
    </main>
  );
}