import Link from 'next/link';

/**
 * Lane 2 — homepage / directory SSR hub door.
 * Type only. No counts. No RuleStack.
 * Swap Eye Cream in when /types/eye-cream ships.
 */

const ROWS = [
  {
    label: 'Concern',
    items: [
      { name: 'Dry Skin', href: '/concerns/dry-skin' },
      { name: 'Acne', href: '/concerns/acne' },
      { name: 'Hyperpigmentation', href: '/concerns/hyperpigmentation' },
      { name: 'Sensitive Skin', href: '/concerns/sensitive-skin' },
    ],
  },
  {
    label: 'Ingredient',
    items: [
      { name: 'Hyaluronic Acid', href: '/ingredients/hyaluronic-acid' },
      { name: 'Niacinamide', href: '/ingredients/niacinamide' },
      { name: 'Vitamin C', href: '/ingredients/vitamin-c' },
      { name: 'Retinol', href: '/ingredients/retinol' },
    ],
  },
  {
    label: 'Type',
    items: [
      { name: 'Serum', href: '/types/serum' },
      { name: 'Moisturizer', href: '/types/moisturizer' },
      { name: 'Cleanser', href: '/types/cleanser' },
      { name: 'Eye Cream', href: '/types/eye-cream' },
    ],
  },
];

const chip = {
  display: 'inline-block',
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--terra)',
  background: 'var(--terra-light)',
  borderRadius: 20,
  padding: '6px 12px',
  textDecoration: 'none',
  marginRight: 8,
  marginBottom: 8,
};

export default function HubDoor() {
  return (
    <section style={{ margin: '40px 0 8px' }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 16,
        }}
      >
        Browse by
      </div>
      {ROWS.map((row) => (
        <div key={row.label} style={{ marginBottom: 14 }}>
          <div
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: 8,
            }}
          >
            {row.label}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {row.items.map((item) => (
              <Link key={item.href} href={item.href} style={chip}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
