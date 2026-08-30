import { Suspense } from 'react';
import DirectoryClient from './DirectoryClient';
import { products } from '@/lib/constants';

export async function generateMetadata() {
    return {
        title: 'Browse Products — BunnyIndex',
        description: `Browse ${products.length} cruelty-free skincare products. Filter by ingredient, skin concern, brand, and more.`,
    };
}

export default function DirectoryPage() {
    return (
          <Suspense fallback={<div style={{padding:64,textAlign:'center',color:'var(--muted)'}}>Loading directory...</div>}>
      <DirectoryClient />
  </Suspense>
  );
}
