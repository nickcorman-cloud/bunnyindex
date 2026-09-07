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

const INGREDIENT_SLUGS = {
  niacinamide: "Niacinamide",
  retinol: "Retinol",
  "vitamin-c": "Vitamin C",
  squalane: "Squalane",
  "hyaluronic-acid": "Hyaluronic Acid",
  spf: "SPF",
  ceramides: "Ceramides",
  "glycolic-acid": "Glycolic Acid",
  "lactic-acid": "Lactic Acid",
  "salicylic-acid": "Salicylic Acid",
  "tranexamic-acid": "Tranexamic Acid",
  "azelaic-acid": "Azelaic Acid",
  peptides: "Peptides",
  bakuchiol: "Bakuchiol",
};

const MIN = 3;

const pStyle = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 16,
  color: 'var(--ink)',
  lineHeight: 1.75,
  margin: '0 0 20px',
};

function matchesFor(ingredientTag, concernTag) {
  return products
    .filter(
      (p) =>
        Array.isArray(p.ingredients) &&
        p.ingredients.includes(ingredientTag) &&
        Array.isArray(p.concerns) &&
        p.concerns.includes(concernTag)
    )
    .sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
}

export function generateStaticParams() {
  const params = [];
  for (const [ingredient, ingredientTag] of Object.entries(INGREDIENT_SLUGS)) {
    for (const [concern, concernTag] of Object.entries(CONCERN_SLUGS)) {
      if (matchesFor(ingredientTag, concernTag).length >= MIN) {
        params.push({ ingredient, concern });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const concernTag = CONCERN_SLUGS[params.concern];
  const ingredientTag = INGREDIENT_SLUGS[params.ingredient];
  if (!concernTag || !ingredientTag) return {};
  const title = `Cruelty-free ${ingredientTag} for ${concernTag}, from brands that actually pass.`;
  const description = `${ingredientTag} tagged for ${concernTag}, from brands that meet all three rules — not a treatment plan.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bunnyindex.com/ingredients/${params.ingredient}/for/${params.concern}`,
    },
  };
}

export default function IngredientForConcernPage({ params }) {
  const concernTag = CONCERN_SLUGS[params.concern];
  const ingredientTag = INGREDIENT_SLUGS[params.ingredient];
  if (!concernTag || !ingredientTag) notFound();

  const matches = matchesFor(ingredientTag, concernTag);
  if (matches.length < MIN) notFound();

  const h1 = `Cruelty-free ${ingredientTag} for ${concernTag}, from brands that actually pass.`;
  const dek = `${ingredientTag} tagged for ${concernTag}, from brands that meet all three rules — not a treatment plan.`;

  return (
    <EditorialShell wide>
      <div className="editorial-measure">
        <PageHeader eyebrow="Ingredient × concern" title={h1} dek={dek} />
        <p style={pStyle}>
          This page is the catalog intersection of {ingredientTag} and {concernTag}, with the Bunny Index Standard already applied. It is not a ranking, and it is not medical advice.
        </p>
        <p style={pStyle}>
          Who appears here? Products tagged with both {ingredientTag} and {concernTag}, from brands that pass all three rules: no animal testing at any stage, not sold where testing is required, and not owned by a parent that tests.
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
            href={catalogHref({ ingredients: [ingredientTag], concerns: [concernTag] })}
            style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}
          >
            See {ingredientTag} for {concernTag} in the directory →
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
          {ingredientTag} for {concernTag} is the filter. The standard is the company. We list both, or we list nothing.
        </p>
      </div>
    </EditorialShell>
  );
}
