import Link from 'next/link';
import { notFound } from 'next/navigation';
import CatalogCard from '@/components/CatalogCard';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import { products } from '@/lib/constants';
import { catalogHref } from '@/lib/catalogQuery';
import { ALTERNATIVES, ALTERNATIVE_JOBS, getAlternative } from '@/data/alternatives';

const pStyle = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 16,
  color: 'var(--ink)',
  lineHeight: 1.75,
  margin: '0 0 16px',
};

function pickAlternatives(slug) {
  const job = ALTERNATIVE_JOBS[slug] || {};
  const types = job.types || [];
  const concerns = job.concerns || [];
  const ingredients = job.ingredients || [];

  let matches = products.filter((p) => {
    const typeOk = !types.length || types.includes(p.type);
    const concernOk =
      !concerns.length ||
      (Array.isArray(p.concerns) && concerns.some((c) => p.concerns.includes(c)));
    const ingOk =
      !ingredients.length ||
      (Array.isArray(p.ingredients) && ingredients.some((i) => p.ingredients.includes(i)));
    const checks = [];
    if (types.length) checks.push(typeOk);
    if (concerns.length) checks.push(concernOk);
    if (ingredients.length) checks.push(ingOk);
    return checks.length ? checks.some(Boolean) : true;
  });

  const seen = new Set();
  const out = [];
  for (const p of matches.sort((a, b) => a.brand.localeCompare(b.brand))) {
    if (seen.has(p.brand)) continue;
    seen.add(p.brand);
    out.push(p);
    if (out.length >= 12) break;
  }
  if (out.length < 6) {
    for (const p of products) {
      if (seen.has(p.brand)) continue;
      seen.add(p.brand);
      out.push(p);
      if (out.length >= 12) break;
    }
  }
  return out;
}

export function generateStaticParams() {
  return ALTERNATIVES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const rec = getAlternative(params.slug);
  if (!rec) return {};
  return {
    title: `Cruelty-free alternatives to ${rec.name} — BunnyIndex`,
    description: `${rec.name} is not in the directory. Brands that pass the Bunny Index Standard, for a similar job.`,
    alternates: {
      canonical: `https://www.bunnyindex.com/alternatives-to/${rec.slug}`,
    },
  };
}

export default function AlternativesPage({ params }) {
  const rec = getAlternative(params.slug);
  if (!rec) notFound();

  const cards = pickAlternatives(rec.slug);
  const job = ALTERNATIVE_JOBS[rec.slug] || {};
  const dirHref = catalogHref({
    types: job.types || [],
    concerns: job.concerns || [],
    ingredients: job.ingredients || [],
  });

  return (
    <EditorialShell wide>
      <div className="editorial-measure">
        <PageHeader
          eyebrow="Not carried"
          title={`Cruelty-free alternatives to ${rec.name}`}
          dek={`${rec.name} is not in the directory. Brands that pass, matched by type or concern.`}
        />
        <p style={pStyle}>
          <strong>{rec.name} is not in the directory.</strong> {rec.name} is owned by {rec.parent}. A
          testing parent is a fail under rule 3. We are not grading the formula.
        </p>
        <p style={pStyle}>
          <Link
            href={`/is-${rec.isSlug}-cruelty-free`}
            style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}
          >
            Is {rec.isBrand} cruelty-free? →
          </Link>
        </p>
        <p style={{ ...pStyle, color: 'var(--muted)' }}>Brands that pass, for a similar job.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20,
          margin: '8px 0 40px',
        }}
      >
        {cards.map((product) => (
          <CatalogCard key={product.id ?? `${product.brand}-${product.name}`} product={product} />
        ))}
      </div>

      <div className="editorial-measure">
        <p style={pStyle}>
          <Link href={dirHref} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
            Browse the directory →
          </Link>
        </p>
        <p style={{ ...pStyle, fontSize: 14, color: 'var(--muted)', margin: 0 }}>
          <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
            The Standard
          </Link>
          {' · '}
          <Link href="/the-label" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
            The label
          </Link>
          {' · '}
          <Link href="/not-carried" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
            Who isn’t here
          </Link>
          {' · '}
          <Link href="/directory" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
            Directory
          </Link>
        </p>
      </div>
    </EditorialShell>
  );
}
