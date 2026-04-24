import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Body Measurements",
    description:
      "Users enter their height, weight, waist, hip, chest and shoulder measurements manually.",
  },
  {
    title: "Mini Avatar Preview",
    description:
      "The system creates a simple avatar preview based on the user's body proportions.",
  },
  {
    title: "Virtual Try-On",
    description:
      "Users can select clothing items and preview them on their personalized avatar.",
  },
  {
    title: "Size Recommendation",
    description:
      "The platform suggests the most suitable clothing size based on body measurements.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Smart virtual fitting experience
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Try clothes on your own mini avatar before buying online.
          </h2>

          <p className="mb-8 max-w-xl text-lg text-slate-600">
            TryMe Avatar helps users make better size decisions by combining
            body measurements, avatar preview and clothing recommendations for
            online fashion shopping.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
           <Button asChild size="lg">
  <Link href="/measurements">Create My Avatar</Link>
</Button>

<Button asChild size="lg" variant="outline">
  <Link href="/try-on">Explore Try-On Demo</Link>
</Button>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="mx-auto flex h-[420px] max-w-sm flex-col items-center justify-center rounded-3xl bg-slate-100">
            <div className="mb-4 h-24 w-24 rounded-full bg-slate-300" />
            <div className="h-44 w-32 rounded-t-full bg-slate-400" />
            <div className="mt-2 flex gap-4">
              <div className="h-28 w-10 rounded-full bg-slate-300" />
              <div className="h-28 w-10 rounded-full bg-slate-300" />
            </div>
            <p className="mt-6 text-sm font-medium text-slate-600">
              Mini Avatar Preview
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-slate-950">
            MVP Features
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            The first version focuses on manual measurements, avatar preview,
            clothing try-on and size recommendation before moving to 3D camera
            features.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <h4 className="mb-3 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h4>
                <p className="text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="brand-panel"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="rounded-3xl bg-slate-950 p-10 text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            For fashion brands
          </p>
          <h3 className="mb-4 text-3xl font-bold">
            A virtual try-on solution for online clothing stores.
          </h3>
          <p className="max-w-3xl text-slate-300">
            TryMe Avatar can be positioned as a SaaS platform for brands that
            want to reduce size uncertainty, improve customer confidence and
            offer a more interactive shopping experience.
          </p>
        </div>
      </section>
    </main>
  );
}