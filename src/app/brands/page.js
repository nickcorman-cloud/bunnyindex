import Link from 'next/link';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import { products, BRAND_PROFILES } from '@/lib/constants';
import { YES_BRAND_PATHS } from '@/data/determinations-wave1';

const brandCount = [...new Set(products.map((p) => p.brand))].length;
const brandsTitle = 'Which Skincare Brands Are Actually Cruelty-Free? — BunnyIndex';
const brandsDesc = `Brands that meet the Bunny Index Standard: no animal testing at any stage, no sales in markets that require it, no ownership by testing parents. ${brandCount} brands listed.`;

export const metadata = {
  title: brandsTitle,
  description: brandsDesc,
  alternates: { canonical: 'https://www.bunnyindex.com/brands' },
  openGraph: { title: brandsTitle, description: brandsDesc },
};

export default function BrandsPage() {
  const sorted = [...BRAND_PROFILES]
    .filter(brand => products.some(p => p.brand === brand.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <EditorialShell wide>
      <div className="editorial-measure">
        <PageHeader
          eyebrow="The directory"
          title="Which skincare brands are actually cruelty-free?"
          dek="Brands that pass all three rules. If one is missing, contact us."
        />
      </div>
        <div className="brands-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(400px,1fr))',gap:32}}>
          {sorted.map(brand => {
            return (
              <div key={brand.name} style={{background:'var(--white)',borderRadius:'var(--r-md)',border:'1px solid var(--border)',padding:'28px 28px 24px',display:'flex',flexDirection:'column',gap:10}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
                  {YES_BRAND_PATHS[brand.name] ? (
                    <Link href={YES_BRAND_PATHS[brand.name]} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:'var(--ink)',lineHeight:1.1,textDecoration:'none'}}>
                      {brand.name}
                    </Link>
                  ) : (
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:'var(--ink)',lineHeight:1.1}}>{brand.name}</div>
                  )}
                  <Link href={`/directory?brand=${encodeURIComponent(brand.name)}`} style={{flexShrink:0,background:'none',border:'1px solid var(--border)',borderRadius:20,padding:'4px 12px',fontFamily:"'DM Sans',sans-serif",fontSize:12,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
                    see products →
                  </Link>
                </div>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'var(--muted)',lineHeight:1.65,margin:0}}>{brand.blurb}</p>
              </div>
            );
          })}
        </div>
    </EditorialShell>
  );
}
