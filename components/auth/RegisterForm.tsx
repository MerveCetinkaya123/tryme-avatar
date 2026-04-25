"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { registerUser } from "@/app/auth/actions";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type UserRole = "customer" | "brand";

const roleDescriptions: Record<UserRole, string> = {
  customer:
    "Create a customer account for measurements, avatar preview and try-on pages.",
  brand:
    "Create a brand account for product management and Supabase product flow.",
};

export function RegisterForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage(null);

    startTransition(() => {
      void registerUser({
        fullName,
        email,
        password,
        role,
      }).then((result) => {
        

        router.push("/login");
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

          <Badge variant="outline">Supabase register</Badge>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl text-slate-950">
            Create account
          </CardTitle>

          <CardDescription>
            Create your account with Supabase Auth and continue with the TryMe
            Avatar flow.
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
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Merve Cetinkaya"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              disabled={isPending}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isPending}
              minLength={6}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Account type</Label>

            <Select
              value={role}
              onValueChange={(value) => setRole(value as UserRole)}
              disabled={isPending}
            >
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
              </SelectContent>
            </Select>

            <p className="text-xs leading-5 text-slate-500">
              {roleDescriptions[role]}
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating account..." : "Create account"}
          </Button>

          <Separator />

          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-slate-950 underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}