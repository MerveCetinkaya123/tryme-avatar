"use server";

import { createClient } from "@/lib/supabase/server";

type UserRole = "customer" | "brand";

type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
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