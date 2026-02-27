import Link from 'next/link';
import { products } from '@/lib/constants';
import { FEATURED_IDS } from '@/data/products';
import FeatCard from '@/components/FeatCard';

export const metadata = {
  title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
  description: 'A true cruelty-free skincare directory. No testing at any stage. No sales in markets that require it. No ownership by companies that do.',
};

export default function Home() {
  const featured = FEATURED_IDS.map(id => products.find(p => p.id === id)).filter(Boolean);
  const brandCount = [...new Set(products.map(p => p.brand))].length;
  return (
    <>
      <section style={{background:'var(--cream)'}} className="home-hero-section">
        <div className="home-hero-grid" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:16}}>The Bunny Index Standard.</div>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:56,fontWeight:600,lineHeight:1.05,color:'var(--ink)',marginBottom:24}}>
              A Higher Cruelty-Free Standard.
            </h1>
            <p style={{fontSize:16,color:'var(--ink-muted)',lineHeight:1.65,marginBottom:8,maxWidth:480}}>
              To qualify for Bunny Index, a product must meet all three criteria:
            </p>
            <ul style={{fontSize:16,color:'var(--ink-muted)',lineHeight:1.8,marginBottom:8,maxWidth:480,paddingLeft:20}}>
              <li>No animal testing at any stage</li>
              <li>Not sold in markets where testing is required</li>
              <li>No ownership by companies that test on animals</li>
            </ul>
            <p style={{fontSize:16,color:'var(--ink-muted)',lineHeight:1.65,marginBottom:32,maxWidth:480}}>
              Zero exceptions.
            </p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/directory" style={{background:'var(--terra)',color:'var(--white)',padding:'12px 24px',borderRadius:'var(--r-sm)',fontWeight:600,fontSize:15,textDecoration:'none',display:'inline-block'}}>
                Browse the directory →
              </Link>
              <Link href="/about" style={{background:'none',border:'1.5px solid var(--border)',color:'var(--ink)',padding:'12px 24px',borderRadius:'var(--r-sm)',fontWeight:500,fontSize:15,textDecoration:'none',display:'inline-block'}}>
                Our standards
              </Link>
            </div>
            <div style={{marginTop:40}}>
              <img src="/bunnies.jpg" alt="Bunnies in a field of flowers" style={{width:'100%',maxWidth:480,borderRadius:12,display:'block'}} />
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {featured.map(p => <FeatCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
      <section style={{background:'var(--ink)'}} className="home-stats-section">
        <div className="home-stats-grid" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32}}>
          {[
            {icon:'🐰',title:'Never tested on animals',body:'Zero animal testing at any stage, including supplier ingredients.'},
            {icon:'🚫',title:'No China market sales',body:'We exclude brands that sell in markets requiring animal testing.'},
            {icon:'🏛',title:'Independent ownership',body:"No subsidiaries of L'Oréal, Unilever, Estée Lauder, or P&G."},
            {icon:'🔬',title:'Ingredient searchable',body:'Every product tagged by active ingredients and skin concerns.'},
          ].map(({icon,title,body}) => (
            <div key={title}>
              <div style={{fontSize:28,marginBottom:12}}>{icon}</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:'var(--cream)',marginBottom:8}}>{title}</div>
              <p style={{fontSize:13,color:'#8B7B72',lineHeight:1.6}}>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'64px 32px',textAlign:'center',background:'var(--cream)'}}>
        <Link href="/directory" style={{display:'inline-flex',alignItems:'center',gap:8,background:'none',border:'1.5px solid var(--border)',color:'var(--ink)',padding:'14px 32px',borderRadius:'var(--r-sm)',fontSize:15,fontWeight:500,textDecoration:'none'}}>
          See all {products.length} products →
        </Link>
      </section>
    </>
  );
}
