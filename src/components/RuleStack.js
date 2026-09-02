import EditorialBreak from '@/components/EditorialBreak';

/**
 * standard-three-rules — three equal rules, typographic diagram.
 * No emoji, no brand names, no maps.
 */
const RULES = [
  {
    n: '1',
    label: 'No testing at any stage',
    under: 'Not the finished product. Not the ingredients. Not a supplier.',
  },
  {
    n: '2',
    label: 'Not sold where testing is required',
    under: 'If a market requires animal tests to sell there, the brand is out.',
  },
  {
    n: '3',
    label: 'Not owned by a company that tests',
    under: 'The label on a subsidiary is not the parent’s policy.',
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
