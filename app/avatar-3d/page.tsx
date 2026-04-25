import Link from "next/link";

import { AvatarCanvas } from "@/components/avatar-3d/AvatarCanvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Avatar3DPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom_right,#f8fafc,#eef2ff,#f8fafc)] px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <Button asChild variant="ghost" className="px-0 text-slate-600">
          <Link href="/">Back to home</Link>
        </Button>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="secondary">3D Avatar Foundation</Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Professional 3D avatar experience for TryMe Avatar.
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-600">
                This page introduces the first 3D avatar foundation. The current
                model is a professional placeholder that will later be replaced
                with a realistic GLB avatar and connected to body measurements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Measurement ready</CardTitle>
                  <CardDescription>
                    The 3D scene is prepared for future body proportion logic.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Model ready</CardTitle>
                  <CardDescription>
                    The structure is ready for realistic GLB avatar integration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <Card className="border-slate-200 bg-white/90 shadow-sm">
            <CardHeader>
              <CardTitle>Interactive 3D Avatar Preview</CardTitle>
              <CardDescription>
                Rotate the avatar with your mouse and inspect the 3D foundation.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <AvatarCanvas />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}