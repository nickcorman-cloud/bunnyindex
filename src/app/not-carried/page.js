export const metadata = {
    title: "Brands We Don't Carry — BunnyIndex",
    description: "Some of the most popular skincare brands don't qualify for BunnyIndex. Here's why — and which parent companies are behind them.",
};

const NOT_CARRIED = [
  {
        name: 'The Ordinary / DECIEM',
        reason: 'Acquired by Estée Lauder in 2021. Estée Lauder conducts animal testing where required by law, including in mainland China.',
        acquiredBy: 'Estée Lauder',
        year: 2021,
  },
  {
        name: 'Drunk Elephant',
        reason: 'Acquired by Shiseido in 2019. Shiseido conducts animal testing where required by law.',
        acquiredBy: 'Shiseido',
        year: 2019,
  },
  {
        name: 'Tatcha',
        reason: 'Acquired by Unilever in 2019. Unilever sells in markets that require animal testing.',
        acquiredBy: 'Unilever',
        year: 2019,
  },
  {
        name: "Paula's Choice",
        reason: 'Acquired by Unilever in 2021. Unilever sells in markets that require animal testing.',
        acquiredBy: 'Unilever',
        year: 2021,
  },
  {
        name: 'Youth to the People',
        reason: "Acquired by L'Oréal in 2021. L'Oréal conducts animal testing where required by law.",
        acquiredBy: "L'Oréal",
        year: 2021,
  },
  {
        name: 'Aesop',
        reason: "Acquired by L'Oréal in 2023. L'Oréal conducts animal testing where required by law.",
        acquiredBy: "L'Oréal",
        year: 2023,
  },
  {
        name: 'Farmacy Beauty',
        reason: 'Acquired by Unilever in 2021. Unilever sells in markets that require animal testing.',
        acquiredBy: 'Unilever',
        year: 2021,
  },
  {
        name: 'First Aid Beauty',
        reason: "Acquired by Procter & Gamble in 2019. P&G conducts animal testing where required by law.",
        acquiredBy: 'Procter & Gamble',
        year: 2019,
  },
  {
        name: 'CeraVe',
        reason: "Acquired by L'Oréal in 2017. L'Oréal conducts animal testing where required by law.",
        acquiredBy: "L'Oréal",
        year: 2017,
  },
  ];

export default function NotCarriedPage() {
    const grouped = NOT_CARRIED.reduce((acc, brand) => {
          if (!acc[brand.acquiredBy]) acc[brand.acquiredBy] = [];
          acc[brand.acquiredBy].push(brand);
          return acc;
    }, {});

  return (
        <section style={{ padding: '64px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 12 }}>
          Our standards
            </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 600, color: 'var(--ink)', margin: '0 0 12px', lineHeight: 1.1 }}>
          Brands We Don't Carry
            </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--muted)', maxWidth: 620, lineHeight: 1.65, margin: '0 0 16px' }}>
          Some of the most popular skincare brands in the world don't qualify for BunnyIndex — not because their products are bad, but because of who owns them.
            </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--muted)', maxWidth: 620, lineHeight: 1.65, margin: '0 0 56px' }}>
          BunnyIndex requires that every brand meets three criteria: no animal testing at any stage, no sales in markets that require it, and no ownership by a parent company that does. Many beloved indie brands were acquired by large conglomerates that test where the law demands — which disqualifies them under our standards. Here's the list.
            </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
{NOT_CARRIED.map(brand => (
              <div key={brand.name} style={{ background: 'var(--white)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: 'var(--ink)' }}>{brand.name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: 'var(--white)', background: 'var(--terra)', borderRadius: 20, padding: '3px 12px', whiteSpace: 'nowrap' }}>
{brand.acquiredBy} · {brand.year}
</div>
  </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{brand.reason}</p>
  </div>
          ))}
</div>

        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 580 }}>
            This list is maintained as brands change hands. If you believe a brand has been miscategorized or if ownership has changed, <a href="/contact" style={{ color: 'var(--terra)', textDecoration: 'none' }}>let us know</a>.
              </p>
              </div>
              </div>
              </section>
  );
}
