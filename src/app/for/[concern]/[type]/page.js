import Link from 'next/link';
import { notFound } from 'next/navigation';
import CatalogCard from '@/components/CatalogCard';
import CatalogEmpty from '@/components/CatalogEmpty';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import EditorialBreak from '@/components/EditorialBreak';
import { products } from '@/lib/constants';
import { catalogHref } from '@/lib/catalogQuery';

const CONCERN_SLUGS = {
  acne: 'Acne',
  'dry-skin': 'Dry Skin',
  hyperpigmentation: 'Hyperpigmentation',
  'barrier-support': 'Barrier Support',
  'oily-skin': 'Oily Skin',
  rosacea: 'Rosacea',
  'seborrheic-dermatitis': 'Seborrheic Dermatitis',
  'sensitive-skin': 'Sensitive Skin',
};

const TYPE_SLUGS = {
  moisturizer: 'Moisturizer',
  sunscreen: 'Sunscreen',
  cleanser: 'Cleanser',
  serum: 'Serum',
  'eye-cream': 'Eye Cream',
  mask: 'Mask',
  toner: 'Toner',
  'face-oil': 'Face Oil',
};

const MIN = 3;

const pStyle = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 16,
  color: 'var(--ink)',
  lineHeight: 1.75,
  margin: '0 0 20px',
};

function matchesFor(concernTag, typeTag) {
  return products
    .filter(
      (p) =>
        p.type === typeTag &&
        Array.isArray(p.concerns) &&
        p.concerns.includes(concernTag)
    )
    .sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
}

export function generateStaticParams() {
  const params = [];
  for (const [concern, concernTag] of Object.entries(CONCERN_SLUGS)) {
    for (const [type, typeTag] of Object.entries(TYPE_SLUGS)) {
      if (matchesFor(concernTag, typeTag).length >= MIN) {
        params.push({ concern, type });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const concernTag = CONCERN_SLUGS[params.concern];
  const typeTag = TYPE_SLUGS[params.type];
  if (!concernTag || !typeTag) return {};
  const title = `Cruelty-free ${typeTag} for ${concernTag}, from brands that actually pass. — BunnyIndex`;
  const description = `Cruelty-free ${typeTag.toLowerCase()} for ${concernTag.toLowerCase()}. Brands that meet the Bunny Index Standard — not a routine.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bunnyindex.com/for/${params.concern}/${params.type}`,
    },
  };
}

export default function ForComboPage({ params }) {
  const concernTag = CONCERN_SLUGS[params.concern];
  const typeTag = TYPE_SLUGS[params.type];
  if (!concernTag || !typeTag) notFound();

  const matches = matchesFor(concernTag, typeTag);
  if (matches.length < MIN) notFound();

  const h1 = `Cruelty-free ${typeTag} for ${concernTag}, from brands that actually pass.`;
  const dek = `${typeTag} tagged for ${concernTag}, from brands that meet all three rules — not a treatment plan.`;

  return (
    <EditorialShell wide>
      <div className="editorial-measure">
        <PageHeader eyebrow="Browse by" title={h1} dek={dek} />
        <p style={pStyle}>
          This page is the catalog intersection of {typeTag} and {concernTag}, with the Bunny Index Standard already applied. It is not a ranking, and it is not medical advice.
        </p>
        <p style={pStyle}>
          Every product here is from a brand that passes: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests. Miss one rule, and the brand is not here.
        </p>
        <p style={pStyle}>
          The three rules:{' '}
          <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
            The Standard
          </Link>
          .
        </p>
      </div>

      <EditorialBreak variant="band" eyebrow="Listed brands that pass.">
        <p style={{ ...pStyle, color: 'var(--muted)', margin: 0 }}>
          {matches.length} products from brands that pass.
        </p>
        <p style={{ ...pStyle, margin: '12px 0 0' }}>
          <Link
            href={catalogHref({ concerns: [concernTag], types: [typeTag] })}
            style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}
          >
            See {typeTag} for {concernTag} in the directory →
          </Link>
        </p>
      </EditorialBreak>

      {matches.length === 0 ? <CatalogEmpty tone="concern" /> : null}

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
        <p style={{ ...pStyle, margin: 0 }}>
          {typeTag} is the product type. {concernTag} is the claim tag. The standard is the company. We list both, or we list nothing.
        </p>
      </div>
    </EditorialShell>
  );
}
