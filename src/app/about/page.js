export const metadata = {
  title: 'About — BunnyIndex',
  description: 'BunnyIndex applies a higher cruelty-free standard: no animal testing at any stage, not sold in testing markets, not owned by companies that test.',
};

export default function AboutPage() {
  return (
    <section style={{ padding: '72px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 16 }}>
          About BunnyIndex
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08, margin: '0 0 12px' }}>
          A Higher Standard — And a Better Way to Find It
        </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          Hi, I’m Nick. I built BunnyIndex because I was tired of the same story again and again:
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          I’d read a label that said “cruelty-free,” feel hopeful, and then dig deeper — only to discover the brand was owned by a conglomerate that tests on animals somewhere else, or sells in markets that require animal testing. The label was there… but the standard wasn’t real.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          I wanted something better — a higher bar for compassion — and a directory where you could actually find products that truly meet that bar.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          So I built BunnyIndex.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 12px' }}>
          This isn’t just another list of brand names. It’s a searchable, curated resource built around clear, uncompromising criteria so you can:
        </p>
        <ul style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 56px', paddingLeft: 24 }}>
          <li>Search and find products that genuinely meet a higher cruelty-free standard.</li>
          <li>Explore brands and products that align with your values.</li>
          <li>Make ethical choices with confidence, not guesswork.</li>
        </ul>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          A Standard You Can Trust
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          “Cruelty-free” means different things to different people. Some brands only stop testing on their own finished products. Some stop at their factories. But too many still rely on loopholes or ambiguous claims — and that’s not good enough.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 28px' }}>
          At BunnyIndex, to be listed, a brand must meet all of the following:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, margin: '0 0 32px' }}>
          {[
            ['✔ No animal testing at any stage', 'Not on finished products. Not on ingredients. Not by suppliers. Not by third parties. Nothing.'],
            ['✔ Not sold in markets that require animal testing', "Historically, selling in mainland China required animal testing for imported cosmetics — so if a brand chose to be in those markets, it’s excluded here."],
            ['✔ Not owned by a parent company that tests on animals', "A brand might claim to be cruelty-free, but if its parent company funds animal testing, we don’t include it."],
          ].map(([title, body]) => (
            <div key={title}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{body}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 64px', lineHeight: 1.3 }}>
          No exceptions. No loopholes. Ever.
        </p>

        <div style={{ borderTop: '1px solid var(--border)', margin: '0 0 48px' }} />

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: 'var(--ink)', margin: '0 0 20px', lineHeight: 1.15 }}>
          Search. Discover. Decide.
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          Every brand and product here is searchable and verifiable. Whether you’re looking for cruelty-free skincare for a specific concern, ingredients you want to avoid, or brands that meet this higher standard, BunnyIndex helps you find what you need — quickly and confidently.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          This is more than a directory. It’s a tool for ethical shopping.
        </p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' }}>
          If you know a brand that deserves to be here — or one that shouldn’t — I’d love to hear from you.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic', color: 'var(--terra)', margin: 0, lineHeight: 1.3 }}>
          — Nick
        </p>
      </div>
    </section>
  );
          }
