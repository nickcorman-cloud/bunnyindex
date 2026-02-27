export const metadata = {
  title: 'About — BunnyIndex',
  description: 'The Bunny Index Standard — a higher cruelty-free standard. Clear rules. No exceptions.',
};

export default function AboutPage() {
  return (
    <section style={{ padding: '72px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 16 }}>
          The Bunny Index Standard
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08, margin: '0 0 12px' }}>
          A Higher Cruelty-Free Standard.
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 400, fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 56px', lineHeight: 1.3 }}>
          Clear rules. No exceptions.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          Why I Built This
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          I started Bunny Index because I wanted a strict standard — and a simple way to find skincare products that truly meet it.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          Too often, "cruelty-free" comes with fine print. A brand may avoid testing itself but sell in markets that require it, or operate cleanly while its parent company tests through other brands.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          The label sounds clear. The structure behind it often isn't.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 56px' }}>
          So I built the standard I wanted to shop by.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.15 }}>
          The Standard
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 28px' }}>
          Every brand listed on Bunny Index must meet all three criteria:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, margin: '0 0 32px' }}>
          {[
            ['No Animal Testing', 'At any stage, including ingredients and third-party testing.'],
            ['No Required-Testing Markets', 'Not sold anywhere animal testing is mandated.'],
            ['No Testing Parent Companies', 'Not owned by a company that conducts animal testing in any part of its business.'],
          ].map(([title, body]) => (
            <div key={title}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{body}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 4px', fontWeight: 600 }}>
          All three. Always.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 56px' }}>
          Zero loopholes.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          The Parent Company Question
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          There are genuinely great skincare brands that don't test on animals.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          But if they're owned by a parent company that tests elsewhere in its portfolio, I don't consider that fully cruelty-free.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          When you buy a product, you're supporting the company that owns it. If that company profits from animal testing anywhere in its operations, that matters.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 56px', fontWeight: 600 }}>
          Bunny Index draws the line at ownership.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          How the Standard Is Applied
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          The criteria apply continuously.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 8px' }}>
          If a brand is acquired by a company that tests, it no longer qualifies.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 40px' }}>
          If a brand enters a required-testing market, it no longer qualifies.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 64px' }}>
          Cruelty-free should mean exactly that.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          How This Site Is Supported
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          If you buy a product through a link on Bunny Index, I may earn a small affiliate commission. It doesn't cost you anything extra.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          Brands are never selected based on commission rates or affiliate programs. Inclusion is based solely on whether a brand meets the Bunny Index Standard.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
          Affiliate revenue helps keep the site running and allows me to continue expanding the directory.
        </p>
      </div>
    </section>
  );
}
