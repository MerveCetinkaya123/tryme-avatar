"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { loginUser } from "@/app/auth/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage(null);

    startTransition(() => {
      void loginUser({
        email,
        password,
      }).then((result) => {
        if (!result.success) {
          setErrorMessage(result.error);
          return;
        }

        localStorage.setItem(
          "tryme-current-user",
          JSON.stringify({
            email: result.email,
            role: result.role,
            name: result.name,
          })
        );

        if (result.role === "brand") {
          router.push("/brand-panel");
        } else {
          router.push("/measurements");
        }

        router.refresh();
      });
    });
  }

  return (
    <Card className="w-full border-slate-200 bg-white/95 shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base font-bold text-white">
            TA
          </div>

          <Badge variant="outline">Supabase login</Badge>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl text-slate-950">
            Welcome back
          </CardTitle>

          <CardDescription>
            Log in with your Supabase account and continue based on your role.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="merve@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isPending}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isPending}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Logging in..." : "Continue"}
          </Button>

          <Separator />

          <p className="text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-slate-950 underline underline-offset-4"
            >
              Create account
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}