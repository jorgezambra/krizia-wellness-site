# Krizia Passariello Wellness

A modern, minimalistic wellness website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🎨 Design

- **Inspired by:** BeWellByKelly.com - Architectural minimalism with futuristic motion
- **Color Palette:** 
  - Porcelain White (#FAFAF8)
  - Bio-Teal (#4DB6AC)
  - Muted Gold (#C7B58B)
  - Graphite Gray (#1A1A1A)
  - Stone (#E8E6E1)
  - Ash (#6E6E6E)
- **Typography:**
  - Headings: Playfair Display
  - Body: Inter

## 🚀 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Database:** Supabase (optional)
- **Payments:** Stripe (optional)
- **Icons:** Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. (Optional) Set up Supabase:
Create the following tables in your Supabase project:

**bookings table:**
```sql
create table bookings (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  service text not null,
  date text not null,
  time text not null,
  notes text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

**contact_messages table:**
```sql
create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Pages

- **Home** (`/`) - Hero section with featured services
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Krizia's bio and credentials
- **Booking** (`/booking`) - Book consultations and services
- **Blog** (`/blog`) - Wellness insights and articles
- **Contact** (`/contact`) - Contact form and information

## 🎯 Features

- ✅ Responsive navigation with mobile menu
- ✅ Animated hero sections
- ✅ Service cards with pricing
- ✅ Booking form system
- ✅ Contact form
- ✅ Blog layout (ready for CMS integration)
- ✅ SEO optimized with metadata
- ✅ Framer Motion animations
- ✅ Custom Tailwind theme

## 🔧 Optional Integrations

### Supabase Integration
To enable bookings and contact form submissions:
1. Install Supabase: `npm install @supabase/supabase-js`
2. Set up environment variables
3. Create database tables (see Installation section)
4. The integration is already coded in `src/lib/supabase.ts`

### Stripe Integration
To enable payments:
1. Install Stripe: `npm install stripe`
2. Set up Stripe account and get API keys
3. Add keys to `.env.local`
4. The integration is ready in `src/lib/stripe.ts`

### Sanity CMS (for Blog)
To add a headless CMS for blog posts:
1. Install Sanity: `npm install @sanity/client`
2. Set up a Sanity project
3. Add Sanity project ID and dataset to `.env.local`
4. Create blog post schema in Sanity Studio

## 🎨 Customization

### Colors
Update colors in `src/app/globals.css`:
```css
:root {
  --porcelain: #FAFAF8;
  --graphite: #1A1A1A;
  --bio-teal: #4DB6AC;
  /* ... */
}
```

### Fonts
Fonts are loaded via Google Fonts in `globals.css`. To change fonts, update the import URL and CSS variables.

## 📱 Mobile Responsive

All pages are fully responsive with:
- Mobile-first design
- Responsive navigation menu
- Optimized layouts for all screen sizes
- Touch-friendly buttons and forms

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
vercel deploy
```

Or deploy to any Next.js compatible hosting:
- Netlify
- Railway
- AWS Amplify

## 📝 License

© 2025 Krizia Passariello Wellness. All rights reserved.

## 🤝 Support

For questions or support, contact: hello@kriziapassariello.com
