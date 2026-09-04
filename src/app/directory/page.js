import { Suspense } from 'react';
import DirectoryClient from './DirectoryClient';
import HubDoor from '@/components/HubDoor';
import { products } from '@/lib/constants';

export async function generateMetadata() {
  const n = products.length;
  const title = `Cruelty-Free Skincare by Ingredient — ${n} Products | BunnyIndex`;
  const description = `Search ${n} products that meet the Bunny Index Standard — no testing at any stage, no required-testing markets, no testing-parent ownership. Filter by niacinamide, hyaluronic acid, retinol, vitamin C, and brand.`;
  return {
    title,
    description,
    alternates: { canonical: 'https://www.bunnyindex.com/directory' },
    openGraph: { title, description },
  };
}

/** Pass A2 — SSR HubDoor above filters. Do not edit DirectoryClient. */
export default function DirectoryPage() {
  return (
    <>
      <div className="dir-header">
        <div className="dir-header-inner">
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>
            Browse cruelty-free skincare by ingredient, brand, and concern
          </h1>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px 8px' }}>
        <HubDoor />
      </div>
      <Suspense fallback={<div style={{ padding: 64, textAlign: 'center', color: 'var(--muted)' }}>Loading directory...</div>}>
        <DirectoryClient />
      </Suspense>
    </>
  );
}
