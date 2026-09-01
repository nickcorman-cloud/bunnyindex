import Link from 'next/link';

export const metadata = {
  title: 'What changed. — BunnyIndex',
  description: 'The dated record of the directory: brands added, brands removed, and why.',
};

const linkStyle = { color: 'var(--terra)', textDecoration: 'none' };
const p = { fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' };

export default function UpdatesPage() {
  return (
    <section style={{ padding: '64px 0 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 16 }}>
          The record
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, margin: '0 0 24px' }}>
          What changed.
        </h1>
        <p style={p}>
          This is the dated record of the directory: brands added, brands removed, and why. It is not a newsletter, and it is not a recap of how we feel about it.
        </p>
        <p style={p}>
          A removal is a rule applied. An add is a brand that passed all three. Product rows belong in the directory, not in this log.
        </p>
        <p style={{ ...p, margin: '0 0 48px' }}>
          The bar itself: <Link href="/standard" style={linkStyle}>The Standard</Link>. Who is out, in full: <Link href="/not-carried" style={linkStyle}>Who isn’t here</Link>.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 600, color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.2 }}>
          30 August 2026
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>
          Removed: Tata Harper
        </p>
        <p style={{ ...p, margin: 0 }}>
          Tata Harper is no longer listed. Amorepacific has owned the brand since 2022, and the parent tests on animals when legally required. BunnyIndex does not carry brands owned by a testing parent.
        </p>
      </div>
    </section>
  );
}
