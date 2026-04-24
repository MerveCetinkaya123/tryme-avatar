import Link from "next/link";

import { LoginForm } from "@/components/auth/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/" className="mb-4 text-sm text-slate-500 hover:text-slate-900">
            ← Back to homepage
          </Link>
          <CardTitle className="text-2xl">Login to TryMe Avatar</CardTitle>
          <p className="text-sm text-slate-500">
            Continue as a customer or brand account.
          </p>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}