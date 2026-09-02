import Link from 'next/link';
import { products } from '@/lib/constants';
import { FEATURED_IDS } from '@/data/products';
import CatalogCard from '@/components/CatalogCard';
import CatalogEmpty from '@/components/CatalogEmpty';
import RuleStack from '@/components/RuleStack';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'BunnyIndex — The Cruelty-Free Ingredient Directory',
  description:
    'A directory of skincare that passes three rules — no testing at any stage, not sold where testing is required, not owned by a testing parent. Search brands, products, and ingredients.',
};

const ctaPrimary = {
  background: 'var(--terra)',
  color: 'var(--white)',
  padding: '12px 24px',
  borderRadius: 'var(--r-sm)',
  fontWeight: 600,
  fontSize: 15,
  textDecoration: 'none',
  display: 'inline-block',
};
const ctaGhost = {
  background: 'none',
  border: '1.5px solid var(--border)',
  color: 'var(--ink)',
  padding: '12px 24px',
  borderRadius: 'var(--r-sm)',
  fontWeight: 500,
  fontSize: 15,
  textDecoration: 'none',
  display: 'inline-block',
};

export default function Home() {
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <section style={{ background: 'var(--cream)' }} className="home-hero-section">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 32px' }}>
          <PageHeader
            eyebrow="The Bunny Index Standard"
            title="The label is not enough."
            dek="A directory of skincare that passes three rules — no testing at any stage, not sold where testing is required, not owned by a testing parent. Search brands, products, and ingredients. Miss one rule, and it is not here."
            actions={
              <>
                <Link href="/directory" style={ctaPrimary}>
                  Search the directory →
                </Link>
                <Link href="/standard" style={ctaGhost}>
                  Read the three rules →
                </Link>
              </>
            }
          />
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: '0 32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RuleStack />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', margin: '0 0 8px' }}>
            <Link href="/not-carried" style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
              Who isn’t here →
            </Link>
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 32px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: 20,
            }}
          >
            In the directory
          </div>
          {featured.length ? (
            <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
              {featured.map((p) => (
                <CatalogCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <CatalogEmpty tone="strip" />
          )}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 40 }}>
            <Link href="/directory" style={ctaGhost}>
              See all {products.length} products →
            </Link>
            <Link href="/brands" style={ctaGhost}>
              Browse brands →
            </Link>
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 18,
              fontStyle: 'italic',
              color: 'var(--muted)',
              textAlign: 'center',
              margin: '28px 0 0',
            }}
          >
            Cruelty-free is not a regulated phrase. We keep a directory, not a badge you can buy.
          </p>
        </div>
      </section>
    </>
  );
}
