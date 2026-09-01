import EditorialBreak from '@/components/EditorialBreak';

/**
 * standard-three-rules — three equal rules, typographic diagram.
 * No emoji, no brand names, no maps.
 */
const RULES = [
  {
    n: '1',
    label: 'Any stage',
    under: 'Product, ingredients, suppliers, third parties',
  },
  {
    n: '2',
    label: 'Markets',
    under: 'Not sold where testing is required',
  },
  {
    n: '3',
    label: 'Ownership',
    under: 'Not owned by a parent that tests',
  },
];

export default function RuleStack() {
  return (
    <EditorialBreak variant="diagram" className="rule-stack">
      <div
        className="rule-stack-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--cream)',
        }}
      >
        {RULES.map((rule, i) => (
          <div
            key={rule.n}
            style={{
              flex: '1 1 160px',
              padding: '28px 20px 26px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minWidth: 0,
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 28,
                fontWeight: 600,
                color: 'var(--terra)',
                lineHeight: 1,
              }}
            >
              {rule.n}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.2,
              }}
            >
              {rule.label}
            </div>
            <div
              style={{
                width: 28,
                height: 1,
                background: 'var(--terra)',
                opacity: 0.7,
              }}
              aria-hidden="true"
            />
            <div
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 13,
                color: 'var(--muted)',
                lineHeight: 1.5,
              }}
            >
              {rule.under}
            </div>
          </div>
        ))}
      </div>
    </EditorialBreak>
  );
}
