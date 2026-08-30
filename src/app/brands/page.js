import Link from 'next/link';
import { products, BRAND_PROFILES } from '@/lib/constants';

export const metadata = {
  title: 'Our Brands — BunnyIndex',
  description: 'Meet the independently cruelty-free brands featured on BunnyIndex. No parent company exceptions, no markets that require animal testing.',
};

export default function BrandsPage() {
  const sorted = [...BRAND_PROFILES]
    .filter(brand => products.some(p => p.brand === brand.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section style={{padding:'64px 0 80px',background:'var(--cream)'}}>
      <div style={{maxWidth:900,margin:'0 auto',padding:'0 24px'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:12}}>The directory</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:600,color:'var(--ink)',margin:'0 0 20px',lineHeight:1.1}}>Our Brands</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontStyle:'italic',color:'var(--ink)',maxWidth:620,lineHeight:1.5,margin:'0 0 16px'}}>
          This is just the beginning.
        </p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,color:'var(--muted)',maxWidth:580,lineHeight:1.7,margin:'0 0 12px'}}>
          Below is a curated sample of brands that meet the Bunny Index Standard. There are many more out there — and I'm continually researching and expanding the list.
        </p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,color:'var(--muted)',maxWidth:580,lineHeight:1.7,margin:'0 0 56px'}}>
          If you know of a brand that belongs here, please{' '}
          <a href="/contact" style={{color:'var(--terra)',textDecoration:'none'}}>contact me</a>.
        </p>
        <div className="brands-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(400px,1fr))',gap:32}}>
          {sorted.map(brand => {
            return (
              <div key={brand.name} style={{background:'var(--white)',borderRadius:'var(--r-md)',border:'1px solid var(--border)',padding:'28px 28px 24px',display:'flex',flexDirection:'column',gap:10}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:'var(--ink)',lineHeight:1.1}}>{brand.name}</div>
                  <Link href={`/directory?brand=${encodeURIComponent(brand.name)}`} style={{flexShrink:0,background:'none',border:'1px solid var(--border)',borderRadius:20,padding:'4px 12px',fontFamily:"'DM Sans',sans-serif",fontSize:12,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
                    see products →
                  </Link>
                </div>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'var(--muted)',lineHeight:1.65,margin:0}}>{brand.blurb}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
