export const metadata = {
  title: "Brands Not Included — BunnyIndex",
  description: "Some of the most popular skincare brands don't qualify for BunnyIndex. Here's why — and which parent companies are behind them.",
};

const NOT_CARRIED = [
  {
    name: 'The Ordinary / DECIEM',
    reason: 'Acquired by Estée Lauder in 2021. Estée Lauder is not cruelty-free — it tests on animals in markets where it is legally required, including mainland China.',
    acquiredBy: 'Estée Lauder',
    year: 2021,
  },
  {
    name: 'Drunk Elephant',
    reason: 'Acquired by Shiseido in 2019. Shiseido is not cruelty-free — it sells in markets that require animal testing and has never held cruelty-free certification.',
    acquiredBy: 'Shiseido',
    year: 2019,
  },
  {
    name: 'Tatcha',
    reason: 'Acquired by Unilever in 2019. Unilever is not cruelty-free — it tests on animals in markets where it is legally required and does not hold cruelty-free status.',
    acquiredBy: 'Unilever',
    year: 2019,
  },
  {
    name: "Paula's Choice",
    reason: 'Acquired by Unilever in 2021. Unilever is not cruelty-free — it tests on animals in markets where it is legally required and does not hold cruelty-free status.',
    acquiredBy: 'Unilever',
    year: 2021,
  },
  {
    name: 'Youth to the People',
    reason: "Acquired by L'Oréal in 2021. L'Oréal is not cruelty-free — it sells in markets that require animal testing and has never held cruelty-free certification.",
    acquiredBy: "L'Oréal",
    year: 2021,
  },
  {
    name: 'Aesop',
    reason: "Acquired by L'Oréal in 2023. L'Oréal is not cruelty-free — it sells in markets that require animal testing and has never held cruelty-free certification.",
    acquiredBy: "L'Oréal",
    year: 2023,
  },
  {
    name: 'Farmacy Beauty',
    reason: 'Acquired by Unilever in 2021. Unilever is not cruelty-free — it tests on animals in markets where it is legally required and does not hold cruelty-free status.',
    acquiredBy: 'Unilever',
    year: 2021,
  },
  {
    name: 'First Aid Beauty',
    reason: "Acquired by Procter & Gamble in 2019. P&G is not cruelty-free — it tests on animals in markets where it is legally required and does not hold cruelty-free status.",
    acquiredBy: 'Procter & Gamble',
    year: 2019,
  },
  {
    name: 'CeraVe',
    reason: "Acquired by L'Oréal in 2017. L'Oréal is not cruelty-free — it sells in markets that require animal testing and has never held cruelty-free certification.",
    acquiredBy: "L'Oréal",
    year: 2017,
  },
];

export default function NotCarriedPage() {
  const sorted = [...NOT_CARRIED].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section style={{ padding: '64px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 600, color: 'var(--ink)', margin: '0 0 40px', lineHeight: 1.1 }}>
          Why Some Brands Aren't Included
        </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          One night while shopping for skincare, I kept discovering incredible brands — thoughtful formulas, strong missions, beautiful packaging.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          But after digging a little deeper, I found that many had been acquired by larger parent companies that test on animals elsewhere in their portfolios.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          On the surface, these brands may call themselves cruelty-free. And in many cases, they're doing meaningful work.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          But ownership matters.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          When a brand is owned by a company that profits from animal testing, I don't consider that fully aligned with the standard I want to support.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          So I set a higher bar.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', maxWidth: 620, lineHeight: 1.75, margin: '0 0 20px' }}>
          The brands listed below aren't included on Bunny Index because they don't meet the full standard — whether due to required-testing markets or ownership by companies that test.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontStyle: 'italic', color: 'var(--terra)', maxWidth: 620, lineHeight: 1.65, margin: '0 0 56px' }}>
          This isn't a judgment of quality.<br />It's a line I've chosen to draw.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sorted.map(brand => (
            <div key={brand.name} style={{ background: 'var(--white)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>{brand.name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'var(--muted)' }}>acquired {brand.year}</div>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{brand.reason}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 580 }}>
            All determinations are based on publicly available ownership structures and market activity. If you believe a listing is inaccurate, please{' '}
            <a href="/contact" style={{ color: 'var(--terra)', textDecoration: 'none' }}>contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
            }
