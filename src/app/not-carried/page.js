import Link from 'next/link';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Not carried — BunnyIndex',
  description: 'The other half of the directory. Brands that failed one of the three rules, and why they are not listed.',
};

const ALSO_NOT_CARRIED = [
  {
    name: 'The Ordinary / DECIEM',
    year: 2021,
    acquiredBy: 'Estée Lauder',
    reason: 'Rule 3 — Estée Lauder is a testing parent.',
  },
  {
    name: 'Drunk Elephant',
    year: 2019,
    acquiredBy: 'Shiseido',
    reason: 'Rule 3 — Shiseido is a testing parent.',
  },
  {
    name: 'Tatcha',
    year: 2019,
    acquiredBy: 'Unilever',
    reason: 'Rule 3 — Unilever is a testing parent.',
  },
  {
    name: "Paula's Choice",
    year: 2021,
    acquiredBy: 'Unilever',
    reason: 'Rule 3 — Unilever is a testing parent.',
  },
  {
    name: 'Youth to the People',
    year: 2021,
    acquiredBy: "L’Oréal",
    reason: "Rule 3 — L’Oréal is a testing parent.",
  },
  {
    name: 'Tata Harper',
    year: 2022,
    acquiredBy: 'Amorepacific',
    reason: 'Rule 3 — Amorepacific is a testing parent.',
  },
  {
    name: 'Aesop',
    year: 2023,
    acquiredBy: "L’Oréal",
    reason: "Rule 3 — L’Oréal is a testing parent.",
  },
  {
    name: 'Farmacy Beauty',
    year: 2021,
    acquiredBy: 'Unilever',
    reason: 'Rule 3 — Unilever is a testing parent.',
  },
  {
    name: 'First Aid Beauty',
    year: 2019,
    acquiredBy: 'Procter & Gamble',
    reason: 'Rule 3 — Procter & Gamble is a testing parent.',
  },
  {
    name: 'CeraVe',
    year: 2017,
    acquiredBy: "L’Oréal",
    reason: "Rule 3 — L’Oréal is a testing parent.",
  },
  {
    name: 'ILIA Beauty',
    year: 2022,
    acquiredBy: 'Clarins',
    reason: 'Rule 3 — Clarins is a testing parent.',
  },
];

const linkStyle = { color: 'var(--terra)', textDecoration: 'none' };
const p = { fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px', maxWidth: 620 };
const card = { background: 'var(--white)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 6 };

export default function NotCarriedPage() {
  const also = [...ALSO_NOT_CARRIED].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <EditorialShell>
      <PageHeader
        eyebrow="Not carried"
        title="Who isn’t here, and why."
      />
        <p style={p}>This is the other half of the directory.</p>
        <p style={p}>
          If you only see who passed, there is no cost. The cost is the brands that don’t make it — often the ones with the widest shelves.
        </p>
        <p style={p}>
          A brand is not listed because it failed one of the three rules — testing at some stage, selling where testing is required, or a controlling parent that tests. This is not a judgment of the formula. It is the standard, applied.
        </p>
        <p style={{ ...p, margin: '0 0 48px' }}>
          The full bar is on <Link href="/standard" style={linkStyle}>The Standard</Link>.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.2 }}>
          Not carried
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {also.map((brand) => (
            <div key={brand.name} style={card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>{brand.name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'var(--muted)' }}>acquired {brand.year}</div>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{brand.reason}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 580, margin: 0 }}>
            Determinations use publicly available ownership and market activity. If a listing is wrong,{' '}
            <Link href="/contact" style={linkStyle}>contact us</Link>.
          </p>
        </div>
    </EditorialShell>
  );
}
