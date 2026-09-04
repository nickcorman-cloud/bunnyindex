import Link from 'next/link';

/**
 * Compact three-rule cite for PDPs.
 * Creative lock: locked Standard cite strings.
 * Do not import RuleStack. Do not add under-lines from /standard.
 */
const RULES = [
  'No testing at any stage',
  'Not sold where testing is required',
  'Not owned by a company that tests',
];

export default function StandardCite({ showMissLine = true }) {
  return (
    <aside
      style={{
        marginTop: 28,
        padding: '20px 20px 18px',
        background: 'var(--parchment)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border)',
      }}
    >
      <Link
        href="/standard"
        style={{
          display: 'inline-block',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--terra)',
          textDecoration: 'none',
          marginBottom: 14,
        }}
      >
        The Bunny Index Standard
      </Link>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {RULES.map((label, i) => (
          <li
            key={label}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
              padding: '8px 0',
              borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--terra)',
                lineHeight: 1,
                minWidth: 18,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--ink)',
                lineHeight: 1.35,
              }}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>
      {showMissLine ? (
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 13,
            color: 'var(--muted)',
            lineHeight: 1.5,
            margin: '12px 0 0',
          }}
        >
          Miss one, and the brand is not here.
        </p>
      ) : null}
      <p style={{ margin: '12px 0 0' }}>
        <Link
          href="/standard"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--terra)',
            textDecoration: 'none',
          }}
        >
          The Standard →
        </Link>
      </p>
    </aside>
  );
}
