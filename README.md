# BunnyIndex — Next.js

The cruelty-free ingredient directory. Migrated from single-file React to Next.js App Router.

## Project structure

```
src/
  app/
    layout.js          ← Root layout (header, footer, metadata)
    page.js            ← Home page
    globals.css        ← All global styles
    directory/
      page.js          ← Directory page (server wrapper)
      DirectoryClient.js ← Filter/grid logic (client component)
    brands/page.js     ← Our Brands page
    about/page.js      ← About page
    contact/page.js    ← Contact page
    terms/page.js      ← Terms of Service
  components/
    Header.js          ← Sticky nav (client, uses usePathname)
    Footer.js          ← Footer with Terms link
    FeatCard.js        ← Featured product card (client, handles img errors)
  lib/
    constants.js       ← All filter data, brand profiles, helpers
  data/
    products.js        ← 503 products (auto-generated)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push to GitHub
2. Import repo at vercel.com
3. Vercel auto-detects Next.js — no config needed
4. Add custom domain in Vercel dashboard → bunnyindex.com

## URL structure

| Page | URL |
|------|-----|
| Home | `bunnyindex.com/` |
| Directory | `bunnyindex.com/directory` |
| Filtered directory | `bunnyindex.com/directory?brand=Glow+Recipe` |
| Our Brands | `bunnyindex.com/brands` |
| About | `bunnyindex.com/about` |
| Contact | `bunnyindex.com/contact` |
| Terms | `bunnyindex.com/terms` |

## Next steps (when ready)

1. **Supabase** — Move product data from `src/data/products.js` to a real database
2. **Individual product pages** — `bunnyindex.com/products/[slug]` for SEO
3. **Algolia** — Replace client-side filtering with instant search
