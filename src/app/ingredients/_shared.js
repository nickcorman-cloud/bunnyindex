import Image from 'next/image';
import Link from 'next/link';
import CatalogCard from '@/components/CatalogCard';
import CatalogEmpty from '@/components/CatalogEmpty';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import EditorialBreak from '@/components/EditorialBreak';
import { products } from '@/lib/constants';
import { catalogHref } from '@/lib/catalogQuery';

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

/** P1 hero stills — keyed by IngredientPage tag */
const INGREDIENT_STILLS = {
  Niacinamide: {
    src: '/editorial/ingredient-niacinamide.png',
    alt: 'White crystalline powder in a clear glass dish on paper, window light',
  },
  Retinol: {
    src: '/editorial/ingredient-retinol.png',
    alt: 'Pale oil in a clear glass dish on a lab bench, window light',
  },
  'Vitamin C': {
    src: '/editorial/ingredient-vitamin-c.png',
    alt: 'White powder in a clear glass dish on a lab bench, window light',
  },
  Squalane: {
    src: '/editorial/ingredient-squalane.png',
    alt: 'Clear oil in a clear glass dish on a lab bench, window light',
  },
};

export function IngredientPage({ tag, eyebrow, h1, dek, sections, closing, kind = 'ingredient' }) {
  const field = kind === 'concern' ? 'concerns' : 'ingredients';
  const matches = products
    .filter((p) => Array.isArray(p[field]) && p[field].includes(tag))
    .sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));

  const still = INGREDIENT_STILLS[tag];

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

      {still ? (
        <EditorialBreak variant="figure">
          <Image
            src={still.src}
            alt={still.alt}
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            style={{ objectFit: 'cover' }}
          />
        </EditorialBreak>
      ) : null}

      <EditorialBreak variant="band" eyebrow="Listed brands that pass.">
        {matches.length > 0 ? (
          <p style={{ ...pStyle, color: 'var(--muted)', margin: 0 }}>
            {matches.length} products from brands that pass.
          </p>
        ) : (
          <p style={{ ...pStyle, color: 'var(--muted)', margin: 0 }}>
            {kind === 'concern'
              ? 'No products listed for this concern yet.'
              : 'No products listed for this ingredient yet.'}
          </p>
        )}
        <p style={{ ...pStyle, margin: '12px 0 0' }}>
          <Link href={catalogHref(kind === 'concern' ? { concerns: [tag] } : { ingredients: [tag] })} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
            See all {tag} in the directory →
          </Link>
        </p>
      </EditorialBreak>

      {matches.length === 0 ? <CatalogEmpty tone={kind === 'concern' ? 'concern' : 'ingredient'} /> : null}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20,
          margin: '0 0 48px',
        }}
      >
        {matches.map((product) => (
          <CatalogCard key={product.id ?? `${product.brand}-${product.name}`} product={product} />
        ))}
      </div>

      <div className="editorial-measure">
        <p style={{ ...pStyle, margin: 0 }}>{closing}</p>
      </div>
    </EditorialShell>
  );
}

export default IngredientPage;
