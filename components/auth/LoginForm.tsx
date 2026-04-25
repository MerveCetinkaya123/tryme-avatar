"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

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
    "Continue to measurements, avatar preview and virtual try-on pages.",
  brand: "Continue to the brand dashboard and manage Supabase products.",
};

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const demoUser = {
      email: email.trim(),
      role,
      name: email.split("@")[0],
    };

    localStorage.setItem("tryme-current-user", JSON.stringify(demoUser));

    if (role === "customer") {
      router.push("/measurements");
    } else {
      router.push("/brand-panel");
    }
  }

  return (
    <Card className="w-full border-slate-200 bg-white/95 shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base font-bold text-white">
            TA
          </div>

          <Badge variant="outline">Demo login</Badge>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl text-slate-950">
            Welcome back
          </CardTitle>

          <CardDescription>
            Choose your role and continue with the current demo flow.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="merve@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Login type</Label>

            <Select
              value={role}
              onValueChange={(value) => setRole(value as UserRole)}
            >
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select login type" />
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

          <Button type="submit" className="w-full">
            Continue
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