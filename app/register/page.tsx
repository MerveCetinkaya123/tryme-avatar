import Link from "next/link";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/" className="mb-4 text-sm text-slate-500 hover:text-slate-900">
            ← Back to homepage
          </Link>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <p className="text-sm text-slate-500">
            Start building your avatar or manage your brand products.
          </p>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
}