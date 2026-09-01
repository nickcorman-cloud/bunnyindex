import Link from 'next/link';
import FeatCard from '@/components/FeatCard';
import { products, slugify } from '@/lib/constants';

export const pStyle = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 16,
  color: 'var(--ink)',
  lineHeight: 1.75,
  margin: '0 0 20px',
};

const h2Style = {
  fontFamily: "'Cormorant Garamond',serif",
  fontSize: 26,
  fontWeight: 600,
  color: 'var(--ink)',
  margin: '36px 0 16px',
  lineHeight: 1.2,
};

export function IngredientPage({ tag, eyebrow, h1, dek, sections, closing }) {
  const matches = products
    .filter((p) => Array.isArray(p.ingredients) && p.ingredients.includes(tag))
    .sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));

  return (
    <section style={{ padding: '64px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 16 }}>
            {eyebrow}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, margin: '0 0 16px' }}>
            {h1}
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic', color: 'var(--muted)', maxWidth: 620, lineHeight: 1.5, margin: '0 0 32px' }}>
            {dek}
          </p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 style={h2Style}>{section.heading}</h2>
              {section.paragraphs.map((para, i) =>
                typeof para === 'string' ? (
                  <p key={i} style={pStyle}>{para}</p>
                ) : (
                  <div key={i}>{para}</div>
                )
              )}
            </div>
          ))}
        </div>

        {matches.length > 0 ? (
          <p style={{ ...pStyle, color: 'var(--muted)', margin: '32px 0 20px' }}>
            {matches.length} products from brands that pass.
          </p>
        ) : null}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 20,
            margin: '0 0 48px',
          }}
        >
          {matches.map((product) => (
            <Link
              key={product.id ?? `${product.brand}-${product.name}`}
              href={`/products/${slugify(product.brand, product.name)}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <FeatCard product={product} />
            </Link>
          ))}
        </div>

        <div style={{ maxWidth: 760 }}>
          <p style={{ ...pStyle, margin: 0 }}>{closing}</p>
        </div>
      </div>
    </section>
  );
}

export default IngredientPage;
