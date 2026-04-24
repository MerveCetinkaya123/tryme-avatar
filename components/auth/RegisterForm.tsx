"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserRole = "customer" | "brand";

export function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      fullName,
      email,
      password,
      role,
    };

    localStorage.setItem("tryme-registered-user", JSON.stringify(newUser));

    router.push("/login");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Merve Çetinkaya"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
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
          minLength={6}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Account type</Label>
        <select
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value as UserRole)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="customer">Customer</option>
          <option value="brand">Brand</option>
        </select>
      </div>

      <Button type="submit" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-slate-950 underline">
          Login
        </Link>
      </p>
    </form>
  );
}