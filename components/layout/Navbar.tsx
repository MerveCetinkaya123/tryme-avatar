import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">TryMe Avatar</h1>
          <p className="text-sm text-slate-500">Virtual try-on platform</p>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-900">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-slate-900">
            How it works
          </a>
          <a href="#brand-panel" className="hover:text-slate-900">
            Brand Panel
          </a>
        </nav>

        <Button>Get Started</Button>
      </div>
    </header>
  );
}