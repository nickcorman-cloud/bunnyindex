import Link from 'next/link';
import { products } from '@/lib/constants';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import RuleStack from '@/components/RuleStack';
import CatalogCard from '@/components/CatalogCard';
import { brandDirectoryHref } from '@/data/determinations-wave1';

const FOOTER = [
  { href: '/standard', label: 'The Standard' },
  { href: '/the-label', label: 'The label' },
  { href: '/directory', label: 'Directory' },
  { href: '/not-carried', label: 'Who isn’t here' },
  { href: '/brands', label: 'Our Brands' },
];

const pStyle = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 16,
  color: 'var(--ink)',
  lineHeight: 1.75,
  margin: '0 0 20px',
};
const muted = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 15,
  color: 'var(--ink-muted)',
  lineHeight: 1.7,
  margin: '12px 0 0',
  maxWidth: 640,
};
const h2 = {
  fontFamily: "'Cormorant Garamond',serif",
  fontSize: 26,
  fontWeight: 600,
  color: 'var(--ink)',
  margin: '36px 0 16px',
  lineHeight: 1.2,
};
const inlineLink = {
  color: 'var(--terra)',
  textDecoration: 'underline',
  textUnderlineOffset: 2,
};

function hrefOf(raw) {
  if (!raw || raw.startsWith('http')) return raw;
  try {
    const u = new URL(raw, 'https://www.bunnyindex.com');
    return `${u.pathname}${u.search}${u.hash}`;
  } catch {
    return raw;
  }
}

function Rich({ text, style = pStyle }) {
  if (!text) return null;
  const blocks = text.split('\n\n');
  return (
    <>
      {blocks.map((block) => {
        const parts = [];
        const re = /\[([^\]]+)\]\(([^)]+)\)/g;
        let last = 0;
        let m;
        let k = 0;
        while ((m = re.exec(block))) {
          if (m.index > last) parts.push(block.slice(last, m.index));
          parts.push(
            <Link key={`${m.index}-${k++}`} href={hrefOf(m[2])} style={inlineLink}>
              {m[1]}
            </Link>
          );
          last = m.index + m[0].length;
        }
        if (last < block.length) parts.push(block.slice(last));
        return (
          <p key={block.slice(0, 40)} style={style}>
            {parts}
          </p>
        );
      })}
    </>
  );
}

export default function DeterminationPage({ rec }) {
  const isYes = rec.determination === 'yes';
  const brandProducts = isYes
    ? products.filter((p) => p.brand === rec.directoryBrandParam)
    : [];
  const shown = brandProducts.slice(0, 6);
  const dirHref = rec.directoryBrandParam
    ? brandDirectoryHref(rec.directoryBrandParam)
    : '/directory';

  return (
    <EditorialShell>
      <div className="editorial-measure">
        <PageHeader eyebrow={rec.eyebrow} title={rec.h1} />

        <div
          style={{
            margin: '0 0 32px',
            padding: '20px 24px',
            background: isYes ? 'var(--terra-light)' : 'var(--parchment)',
            border: isYes ? '1px solid rgba(184,92,56,0.18)' : '1px solid var(--border)',
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--ink)',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {rec.answerLead}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              color: 'var(--ink-muted)',
              lineHeight: 1.6,
              margin: '8px 0 0',
            }}
          >
            {rec.answerRest}
          </p>
        </div>

        {rec.lede.map((para) => (
          <Rich key={para.slice(0, 48)} text={para} />
        ))}

        <div style={{ margin: '8px 0 8px' }}>
          <RuleStack />
        </div>
        {rec.rulesAfter ? <Rich text={rec.rulesAfter} /> : null}
        {rec.failLine ? <Rich text={rec.failLine} /> : null}

        {isYes ? (
          <section>
            <h2 style={h2}>In the directory</h2>
            <p style={muted}>{rec.directoryIntro}</p>
            {shown.length > 0 ? (
              <div
                className="product-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: 20,
                  marginTop: 24,
                }}
              >
                {shown.map((p) => (
                  <CatalogCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p style={{ ...muted, padding: '16px 0 0' }}>
                No live SKUs for this brand in the catalog yet. The determination still stands.
              </p>
            )}
            <p style={{ margin: '24px 0 0' }}>
              <Link
                href={dirHref}
                style={{
                  color: 'var(--terra)',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                {rec.directoryCta}
              </Link>
            </p>
          </section>
        ) : (
          <section>
            <h2 style={h2}>What to use instead</h2>
            {rec.insteadIntro ? <p style={muted}>{rec.insteadIntro}</p> : null}
            <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, borderTop: '1px solid var(--border)' }}>
              {rec.insteadLinks.map((item) => (
                <li
                  key={item.href}
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid var(--border)',
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  <Link href={hrefOf(item.href)} style={{ ...inlineLink, fontWeight: 500, color: 'var(--ink)' }}>
                    {item.label}
                  </Link>
                  {item.note ? (
                    <span style={{ color: 'var(--ink-muted)' }}> — {item.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
            <p style={{ ...muted, fontSize: 13 }}>
              No buy buttons on this page. The directory is where listed products live.
            </p>
          </section>
        )}

        <section>
          <h2 style={h2}>FAQ</h2>
          <dl style={{ margin: 0 }}>
            {rec.faqs.map((faq) => (
              <div key={faq.q} style={{ margin: '0 0 28px' }}>
                <dt
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    lineHeight: 1.25,
                  }}
                >
                  {faq.q}
                </dt>
                <dd style={{ margin: '8px 0 0' }}>
                  <Rich text={faq.a} style={muted} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <nav
          aria-label="Related"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 20px',
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid var(--border)',
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 13,
            color: 'var(--muted)',
          }}
        >
          {FOOTER.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </EditorialShell>
  );
}
