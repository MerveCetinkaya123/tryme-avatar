import Link from "next/link";

import { LoginForm } from "@/components/auth/LoginForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom_right,#f8fafc,#eef2ff,#f8fafc)] px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <section className="space-y-7">
            <Button asChild variant="ghost" className="px-0 text-slate-600">
              <Link href="/">Back to home</Link>
            </Button>

            <div className="space-y-5">
              <Badge variant="secondary">TryMe Avatar</Badge>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                A smarter virtual fitting experience for customers and brands.
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-600">
                Create a mini avatar with body measurements, preview clothing
                items, and manage brand products from a simple dashboard.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Customer
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Save measurements and create your avatar profile.
                </p>
              </div>

              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Try-On
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preview selected clothing items on your mini avatar.
                </p>
              </div>

              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Brand</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Add and manage products through the brand panel.
                </p>
              </div>
            </div>
          </section>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}