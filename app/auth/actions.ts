"use server";

import { createClient } from "@/lib/supabase/server";

type UserRole = "customer" | "brand";

type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
};

type LoginInput = {
  email: string;
  password: string;
};

type AuthActionResult =
  | {
      success: true;
      role: UserRole;
      email: string;
      name: string;
    }
  | {
      success: false;
      error: string;
    };

export async function registerUser(input: RegisterInput) {
  const supabase = await createClient();

  const fullName = input.fullName.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;
  const role = input.role;

  if (!fullName || !email || !password) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      error: "Password must be at least 6 characters.",
    };
  }

  if (role !== "customer" && role !== "brand") {
    return {
      success: false,
      error: "Please select a valid account type.",
    };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
    },
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function loginUser(input: LoginInput): Promise<AuthActionResult> {
  const supabase = await createClient();

  const email = input.email.trim().toLowerCase();
  const password = input.password;

  if (!email || !password) {
    return {
      success: false,
      error: "Please enter your email and password.",
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return {
      success: false,
      error: error?.message ?? "Login failed. Please try again.",
    };
  }

  const metadata = data.user.user_metadata;
  const role = metadata.role === "brand" ? "brand" : "customer";
  const name =
    typeof metadata.full_name === "string" && metadata.full_name.length > 0
      ? metadata.full_name
      : email.split("@")[0];

  return {
    success: true,
    role,
    email,
    name,
  };
}