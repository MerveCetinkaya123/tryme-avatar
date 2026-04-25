# Supabase Backend Integration Plan

## Goal

The goal of this step is to plan how TryMe Avatar will gradually move from localStorage-based demo data to a Supabase-powered backend.

The current demo flow should continue working while Supabase integration is added step by step.

## Why Supabase?

Supabase is suitable for TryMe Avatar because it provides:

- PostgreSQL database
- Authentication
- Storage for product images
- API access for frontend integration
- Environment variable based configuration
- Easy integration with Next.js

## Current Data Flow

The project currently uses localStorage for demo data such as:

- user role selection
- body measurements
- brand products
- selected clothing item
- avatar preview data

This is suitable for MVP testing, but not enough for a real SaaS product.

## Future Supabase Data Flow

The project will gradually move these data types to Supabase:

1. Brand products
2. Customer body measurements
3. User profiles and roles
4. Product images
5. Try-on history or saved outfits

## Proposed Database Tables

### 1. profiles

Stores user profile and role information.

Fields:

- id
- full_name
- email
- role
- created_at

Roles:

- customer
- brand

### 2. body_measurements

Stores customer body measurement data.

Fields:

- id
- user_id
- height
- weight
- chest
- waist
- hips
- shoulder_circumference
- created_at
- updated_at

### 3. brand_products

Stores products added by brands.

Fields:

- id
- brand_id
- name
- category
- description
- color_hex
- available_sizes
- image_url
- created_at
- updated_at

Categories:

- top
- bottom
- dress

Sizes:

- XS
- S
- M
- L
- XL

### 4. try_on_sessions

Optional future table for saving customer try-on activity.

Fields:

- id
- user_id
- product_id
- recommended_size
- created_at

## First Backend Integration Target

The first real backend feature should be:

Brand Panel products should be saved to Supabase instead of only localStorage.

Reason:

- It is simple enough for the first backend step.
- It is useful for the business model.
- It connects directly to the brand dashboard.
- Later, customer Try-On page can fetch these products from Supabase.

## Integration Steps

### Step 1: Create Supabase project

Create a new Supabase project for TryMe Avatar.

### Step 2: Add environment variables

Create `.env.local` and add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=