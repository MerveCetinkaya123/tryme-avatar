import Link from "next/link";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
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
                Create your account and start your virtual fitting journey.
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-600">
                Register as a customer to create your mini avatar, or join as a
                brand to manage clothing products for the try-on experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Create profile
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Save your basic account information for the demo flow.
                </p>
              </div>

              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Choose role
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Continue as a customer or brand based on your use case.
                </p>
              </div>

              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Continue demo
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the current localStorage flow before Supabase Auth.
                </p>
              </div>
            </div>
          </section>

          <RegisterForm />
        </div>
      </div>
    </main>
  );
}