import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products, slugify, findProductBySlug, buyLabel, BRAND_PROFILES } from '@/lib/constants';

// Pre-generate all 503 product pages at build time
export async function generateStaticParams() {
  return products.map(p => ({ slug: slugify(p.brand, p.name) }));
}

// Dynamic metadata per product
export async function generateMetadata({ params }) {
  const product = findProductBySlug(params.slug);
  if (!product) return { title: 'Product not found — BunnyIndex' };
  const ingredientList = product.ingredients?.join(', ');
  const description = product.description || `${product.brand} ${product.name} — cruelty-free ${product.type?.toLowerCase() || 'skincare'}${ingredientList ? ` with ${ingredientList}` : ''}. Verified cruelty-free, independently owned, never sold in markets that require animal testing.`;
  return {
    title: `${product.brand} ${product.name} — BunnyIndex`,
    description,
    openGraph: {
      title: `${product.brand} ${product.name}`,
      description,
      images: product.imageUrl ? [{ url: product.imageUrl }] : [],
      type: 'website',
    },
  };
}

function RelatedCard({ product }) {
  return (
    <Link href={`/products/${slugify(product.brand, product.name)}`} style={{textDecoration:'none'}}>
      <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:'var(--r-md)',overflow:'hidden',transition:'all 0.18s ease'}}>
        <div style={{aspectRatio:'1/1',background:'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          {product.imageUrl
            ? <img src={product.imageUrl} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" />
            : <div style={{textAlign:'center',padding:12}}>
                <div style={{fontSize:24}}>🐰</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:'var(--muted)',marginTop:4}}>{product.brand}</div>
              </div>
          }
        </div>
        <div style={{padding:'12px 14px 14px'}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--terra)',marginBottom:3}}>{product.brand}</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,fontWeight:600,color:'var(--ink)',lineHeight:1.2,marginBottom:8}}>{product.name}</div>
          <div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>${product.price}</div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductPage({ params }) {
  const product = findProductBySlug(params.slug);
  if (!product) notFound();

  const brandProfile = BRAND_PROFILES.find(b => b.name === product.brand);
  const brandSlug = slugify(product.brand, product.name).split('-').slice(0, product.brand.split(' ').length).join('-');

  // Related: same brand first, then same type, deduplicated, max 4
  const sameBrand = products.filter(p => p.brand === product.brand && p.id !== product.id);
  const sameType = products.filter(p => p.type === product.type && p.brand !== product.brand && p.id !== product.id);
  const related = [...sameBrand.slice(0, 2), ...sameType.slice(0, 2)].slice(0, 4);

  // Structured data for Google rich results
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.brand} ${product.name}`,
    description: product.description,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      url: product.buyUrl,
      availability: 'https://schema.org/InStock',
    },
    ...(product.imageUrl && { image: product.imageUrl }),
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews || 1,
      }
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',gap:8,alignItems:'center',fontSize:13,color:'var(--muted)',flexWrap:'wrap'}}>
          <Link href="/" style={{color:'var(--muted)',textDecoration:'none'}}>Home</Link>
          <span>›</span>
          <Link href="/directory" style={{color:'var(--muted)',textDecoration:'none'}}>Directory</Link>
          <span>›</span>
          <Link href={`/directory?brand=${encodeURIComponent(product.brand)}`} style={{color:'var(--muted)',textDecoration:'none'}}>{product.brand}</Link>
          <span>›</span>
          <span style={{color:'var(--ink)'}}>{product.name}</span>
        </div>
      </div>

      {/* Main content — product-layout class handles 1-col on mobile via globals.css */}
      <div className="product-layout product-page-padding" style={{maxWidth:1100,margin:'0 auto',padding:'48px 32px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
        {/* Left: image */}
        <div>
          <div style={{aspectRatio:'1/1',borderRadius:'var(--r-md)',background:'var(--parchment)',border:'1px solid var(--border)',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {product.imageUrl
              ? <img src={product.imageUrl} alt={`${product.brand} ${product.name}`} style={{width:'100%',height:'100%',objectFit:'cover'}} />
              : <div style={{textAlign:'center',padding:40}}>
                  <div style={{fontSize:64,marginBottom:16}}>🐰</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--muted)'}}>{product.brand}</div>
                </div>
            }
          </div>
        </div>

        {/* Right: details */}
        <div>
          {/* Brand + type */}
          <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
            <Link href={`/directory?brand=${encodeURIComponent(product.brand)}`} style={{fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--terra)',textDecoration:'none'}}>
              {product.brand}
            </Link>
            <span style={{color:'var(--border)'}}>·</span>
            <span style={{fontSize:11,color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{product.type}</span>
          </div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:40,fontWeight:600,color:'var(--ink)',lineHeight:1.08,margin:'0 0 8px'}}>{product.name}</h1>
          <div style={{fontSize:24,fontWeight:500,color:'var(--ink)',margin:'0 0 20px'}}>${product.price}</div>

          {/* Rating */}
          {product.rating > 0 && (
            <div style={{display:'flex',gap:8,alignItems:'center',margin:'0 0 20px'}}>
              <div style={{display:'flex',gap:2}}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{fontSize:14,color: i <= Math.round(product.rating) ? '#E8A030' : '#DDD'}}>★</span>
                ))}
              </div>
              <span style={{fontSize:13,color:'var(--muted)'}}>{product.rating} ({product.reviews?.toLocaleString()} reviews)</span>
            </div>
          )}

          {/* Description */}
          {product.description && (
            <p style={{fontSize:16,color:'var(--ink-muted)',lineHeight:1.7,margin:'0 0 28px'}}>{product.description}</p>
          )}

          {/* Ingredients */}
          {product.ingredients?.length > 0 && (
            <div style={{margin:'0 0 20px'}}>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink)',marginBottom:8}}>Key Ingredients</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {product.ingredients.map(i => (
                  <Link key={i} href={`/directory?ingredient=${encodeURIComponent(i)}`} style={{background:'var(--terra-light)',color:'var(--terra)',borderRadius:20,padding:'4px 12px',fontSize:13,fontWeight:500,textDecoration:'none'}}>
                    {i}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Concerns */}
          {product.concerns?.length > 0 && (
            <div style={{margin:'0 0 20px'}}>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink)',marginBottom:8}}>Good For</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {product.concerns.map(c => (
                  <span key={c} style={{background:'#EEF4EE',color:'#4A7A50',borderRadius:20,padding:'4px 12px',fontSize:13,fontWeight:500}}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* Properties */}
          <div style={{display:'flex',flexWrap:'wrap',gap:6,margin:'0 0 28px'}}>
            {product.fragranceFree && <span style={{background:'var(--parchment)',color:'var(--ink-muted)',borderRadius:20,padding:'4px 12px',fontSize:12,border:'1px solid var(--border)'}}>Fragrance-Free</span>}
            {product.oilFree && <span style={{background:'var(--parchment)',color:'var(--ink-muted)',borderRadius:20,padding:'4px 12px',fontSize:12,border:'1px solid var(--border)'}}>Oil-Free</span>}
            {product.nonComedogenic && <span style={{background:'var(--parchment)',color:'var(--ink-muted)',borderRadius:20,padding:'4px 12px',fontSize:12,border:'1px solid var(--border)'}}>Non-Comedogenic</span>}
            </div>

          {/* Buy button */}
          <a href={product.buyUrl} target="_blank" rel="noopener noreferrer sponsored" style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--terra)',color:'var(--white)',border:'none',borderRadius:'var(--r-sm)',padding:'14px 24px',fontSize:15,fontWeight:600,cursor:'pointer',textDecoration:'none',marginBottom:12}}>
            {buyLabel(product.buyUrl)}
          </a>
          <p style={{fontSize:11,color:'var(--muted)',margin:0}}>Affiliate link — we may earn a small commission at no extra cost to you.</p>

          {/* Cruelty-free badge */}
          <div style={{marginTop:28,padding:'16px 20px',background:'var(--parchment)',borderRadius:'var(--r-sm)',border:'1px solid var(--border)',display:'flex',gap:12,alignItems:'flex-start'}}>
            <span style={{fontSize:20}}>🐰</span>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:'var(--ink)',marginBottom:2}}>Verified cruelty-free</div>
              <div style={{fontSize:12,color:'var(--muted)',lineHeight:1.5}}>No animal testing. Not sold in markets that require it. Independently owned — not a subsidiary of a company that tests.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand section */}
      {brandProfile && (
        <div className="product-section-padding" style={{background:'var(--parchment)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'48px 32px'}}>
          <div style={{maxWidth:1100,margin:'0 auto'}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>About the brand</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:600,color:'var(--ink)',marginBottom:12}}>{brandProfile.name}</div>
            <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.7,maxWidth:700,margin:'0 0 16px'}}>{brandProfile.blurb}</p>
            <Link href={`/directory?brand=${encodeURIComponent(product.brand)}`} style={{fontSize:13,color:'var(--terra)',fontWeight:600,textDecoration:'none'}}>
              See all {sameBrand.length + 1} {product.brand} products →
            </Link>
          </div>
        </div>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <div className="product-page-padding" style={{maxWidth:1100,margin:'0 auto',padding:'48px 32px'}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:'var(--ink)',marginBottom:24}}>You might also like</div>
          <div className="related-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {related.map(p => <RelatedCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </>
  );
}
