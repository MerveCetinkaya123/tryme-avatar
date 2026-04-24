import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div>
            <h1 className="text-xl font-bold text-slate-900">TryMe Avatar</h1>
            <p className="text-sm text-slate-500">Virtual try-on platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="/measurements" className="hover:text-slate-900">
            Measurements
          </Link>
          <Link href="/avatar" className="hover:text-slate-900">
            Avatar
          </Link>
          <Link href="/try-on" className="hover:text-slate-900">
            Try-On
          </Link>
          <Link href="/login" className="hover:text-slate-900">
            Login
          </Link>
        </nav>

        <Button asChild>
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}