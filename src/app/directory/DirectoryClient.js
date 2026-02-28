'use client';
import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  products, BRAND_NAMES, INGREDIENT_GROUPS, CONCERNS, TYPES, buyLabel, slugify
} from '@/lib/constants';

const PAGE_SIZE = 24;

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{marginBottom:16}}>
          <Link href={`/products/${slugify(product.brand, product.name)}`}
            style={{fontSize:12,color:'var(--muted)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:4}}>
            ↗ View full page
          </Link>
        </div>
        {product.imageUrl && (
          <div style={{width:'100%',aspectRatio:'1/1',borderRadius:'var(--r-sm)',overflow:'hidden',marginBottom:20,background:'var(--parchment)'}}>
            <img src={product.imageUrl} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover'}} referrerPolicy="no-referrer" />
          </div>
        )}
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--terra)',marginBottom:4}}>{product.brand}</div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:600,color:'var(--ink)',marginBottom:4,lineHeight:1.2}}>{product.name}</div>
        <div style={{fontSize:18,fontWeight:500,color:'var(--ink)',marginBottom:12}}>${product.price}</div>
        {product.description && <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.65,marginBottom:16}}>{product.description}</p>}
        {product.ingredients?.length > 0 && (
          <div style={{marginBottom:16}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--ink-muted)',marginBottom:8}}>Key Ingredients</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
              {product.ingredients.map(i => <span key={i} className="card-tag">{i}</span>)}
            </div>
          </div>
        )}
        {product.concerns?.length > 0 && (
          <div style={{marginBottom:16}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--ink-muted)',marginBottom:8}}>Good For</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
              {product.concerns.map(c => <span key={c} style={{background:'#EEF4EE',color:'#4A7A50',borderRadius:20,padding:'2px 8px',fontSize:11,fontWeight:500}}>{c}</span>)}
            </div>
          </div>
        )}
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
          {product.fragranceFree && <span style={{fontSize:11,color:'var(--muted)',background:'var(--parchment)',borderRadius:20,padding:'2px 8px'}}>Fragrance-Free</span>}
          {product.oilFree && <span style={{fontSize:11,color:'var(--muted)',background:'var(--parchment)',borderRadius:20,padding:'2px 8px'}}>Oil-Free</span>}
          div>
        <a href={product.buyUrl} className="btn-buy" target="_blank" rel="noopener noreferrer"
                          onClick={() => window.fathom?.trackEvent?.('buy: ' + product.brand)}>
          {buyLabel(product.buyUrl)}
        </a>
      </div>
    </div>
  );
}

function SidebarChips({ label, options, selected, onToggle, onClear }) {
  return (
    <div className="sb-section">
      <div className="sb-title">
        {label}
        {selected.length > 0 && <button className="sb-clear" onClick={onClear}>clear</button>}
      </div>
      <div className="sb-chips">
        {options.map(opt => (
          <button key={opt} className={`sb-chip${selected.includes(opt) ? ' active' : ''}`} onClick={() => onToggle(opt)}>
            <span className="sb-check">{selected.includes(opt) && '✓'}</span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DirectoryClient() {
  const searchParams = useSearchParams();

  const [selIngredients, setSelIngredients] = useState([]);
  const [selConcerns, setSelConcerns] = useState([]);
  const [selBrands, setSelBrands] = useState(() => {
    const brand = searchParams.get('brand');
    return brand ? [brand] : [];
  });
  const [selTypes, setSelTypes] = useState([]);
  const [oilFree, setOilFree] = useState(false);
  const [fragFree, setFragFree] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(1);

  const toggle = (arr, setArr, val) => setArr(prev =>
    prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]
  );
  const hasFilters = selIngredients.length || selConcerns.length || selBrands.length || selTypes.length || oilFree || fragFree;
  const clearAll = () => {
    setSelIngredients([]); setSelConcerns([]); setSelBrands([]); setSelTypes([]);
    setOilFree(false); setFragFree(false); setPage(1);
  };

  const filtered = useMemo(() => {
    let r = products;
    if (selIngredients.length) r = r.filter(p => selIngredients.every(i => p.ingredients.includes(i)));
    if (selConcerns.length) r = r.filter(p => selConcerns.every(c => p.concerns.includes(c)));
    if (selBrands.length) r = r.filter(p => selBrands.includes(p.brand));
    if (selTypes.length) r = r.filter(p => selTypes.includes(p.type));
    if (oilFree) r = r.filter(p => p.oilFree);
    if (fragFree) r = r.filter(p => p.fragranceFree);
    return [...r].sort((a, b) =>
      sortBy === 'popular' ? (b.reviews || 0) - (a.reviews || 0) :
      sortBy === 'rating' ? (b.rating || 0) - (a.rating || 0) :
      sortBy === 'price-lo' ? a.price - b.price : b.price - a.price
    );
  }, [selIngredients, selConcerns, selBrands, selTypes, oilFree, fragFree, sortBy]);

  const prevFilterKey = useRef('');
  const filterKey = [selIngredients.join(), selConcerns.join(), selBrands.join(), selTypes.join(), oilFree, fragFree, sortBy].join('|');
  if (filterKey !== prevFilterKey.current) { prevFilterKey.current = filterKey; if (page !== 1) setPage(1); }

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="dir-header">
        <div className="dir-header-inner">
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:'var(--ink)'}}>Browse Products</div>
          <span className="result-count">{filtered.length} of {products.length}</span>
        </div>
      </div>

      <div className="dir-body">
        {/* Sidebar */}
        <aside className="sidebar">
          {hasFilters && <button className="sb-clear" style={{marginBottom:12,fontSize:12}} onClick={clearAll}>✕ Clear all filters</button>}

          <div className="sb-section">
            <div className="sb-title" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              Ingredients
              {selIngredients.length > 0 && <button className="sb-clear" onClick={() => setSelIngredients([])}>clear</button>}
            </div>
            {INGREDIENT_GROUPS.map(group => (
              <div key={group.label} style={{marginBottom:10}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-muted)',marginBottom:5,marginTop:4}}>{group.label}</div>
                <div className="sb-chips" style={{marginBottom:0}}>
                  {group.items.map(ing => (
                    <button key={ing} className={`sb-chip${selIngredients.includes(ing) ? ' active' : ''}`} onClick={() => toggle(selIngredients, setSelIngredients, ing)}>
                      <span className="sb-check">{selIngredients.includes(ing) && '✓'}</span>
                      {ing}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SidebarChips label="Skin Concerns" options={CONCERNS} selected={selConcerns}
            onToggle={v => toggle(selConcerns, setSelConcerns, v)} onClear={() => setSelConcerns([])} />
          <SidebarChips label="Product Type" options={TYPES} selected={selTypes}
            onToggle={v => toggle(selTypes, setSelTypes, v)} onClear={() => setSelTypes([])} />
          <SidebarChips label="Brand" options={BRAND_NAMES} selected={selBrands}
            onToggle={v => toggle(selBrands, setSelBrands, v)} onClear={() => setSelBrands([])} />

          <div className="sb-section">
            <div className="sb-title">Properties</div>
            <div className="sb-chips">
              {[['Fragrance-free', fragFree, () => setFragFree(v => !v)],
                ['Oil-free', oilFree, () => setOilFree(v => !v)]].map(([label, active, fn]) => (
                <button key={label} className={`sb-toggle${active ? ' active' : ''}`} onClick={fn}>
                  <span className="sb-pill" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="grid-area">
          <div className="sort-bar">
            <div style={{display:'flex',gap:4}}>
              {[['popular','Most reviewed'],['rating','Top rated'],['price-lo','Price ↑'],['price-hi','Price ↓']].map(([val, label]) => (
                <button key={val} className={`sort-btn${sortBy === val ? ' active' : ''}`} onClick={() => setSortBy(val)}>{label}</button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">🐰</div>
              <div className="empty-title">No products found</div>
              <div className="empty-sub">Try adjusting your filters</div>
            </div>
          ) : (
            <>
              <div className="product-grid">
                {paginated.map(product => (
                  <div key={product.id} className="card" onClick={() => setSelectedProduct(product)}>
                    <div className="card-img">
                      {product.imageUrl
                        ? <img src={product.imageUrl} alt={product.name} loading="lazy" referrerPolicy="no-referrer" />
                        : <div className="card-img-placeholder"><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:'var(--muted)',marginTop:4}}>{product.brand}</div></div>
                      }
                    </div>
                    <div className="card-eyebrow">{product.brand}</div>
                    <Link href={`/products/${slugify(product.brand, product.name)}`}
                      onClick={e => e.stopPropagation()}
                      style={{textDecoration:'none'}}>
                      <div className="card-name" style={{textDecoration:'none'}}>{product.name}</div>
                    </Link>
                    {product.ingredients?.length > 0 && (
                      <div className="card-tags">
                        {product.ingredients.slice(0, 2).map(i => <span key={i} className="card-tag">{i}</span>)}
                      </div>
                    )}
                    <div className="card-footer">
                      <span className="card-price">${product.price}</span>
                      <a href={product.buyUrl} className="card-buy" target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}>
                        {buyLabel(product.buyUrl)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button className="page-btn" onClick={() => { setPage(p => p - 1); window.scrollTo(0,0); }} disabled={page === 1}>←</button>
                  {Array.from({length: totalPages}, (_, i) => i + 1)
                    .filter(n => n === 1 || n === totalPages || Math.abs(n - page) <= 1)
                    .reduce((acc, n, i, arr) => {
                      if (i > 0 && n - arr[i-1] > 1) acc.push('…');
                      acc.push(n);
                      return acc;
                    }, [])
                    .map((n, i) => n === '…'
                      ? <span key={`e${i}`} className="page-ellipsis">…</span>
                      : <button key={n} className={`page-btn${page === n ? ' active' : ''}`} onClick={() => { setPage(n); window.scrollTo(0,0); }}>{n}</button>
                    )}
                  <button className="page-btn" onClick={() => { setPage(p => p + 1); window.scrollTo(0,0); }} disabled={page === totalPages}>→</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}
