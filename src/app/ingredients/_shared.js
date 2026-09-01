import Link from 'next/link';
import FeatCard from '@/components/FeatCard';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import EditorialBreak from '@/components/EditorialBreak';
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
    <EditorialShell wide>
      <div className="editorial-measure">
        <PageHeader eyebrow={eyebrow} title={h1} dek={dek} />
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

      <EditorialBreak variant="band" eyebrow="Listed brands that pass.">
        {matches.length > 0 ? (
          <p style={{ ...pStyle, color: 'var(--muted)', margin: 0 }}>
            {matches.length} products from brands that pass.
          </p>
        ) : (
          <p style={{ ...pStyle, color: 'var(--muted)', margin: 0 }}>
            No products listed for this ingredient yet.
          </p>
        )}
      </EditorialBreak>

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

      <div className="editorial-measure">
        <p style={{ ...pStyle, margin: 0 }}>{closing}</p>
      </div>
    </EditorialShell>
  );
}

export default IngredientPage;
