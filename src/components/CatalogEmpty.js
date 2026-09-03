import Link from 'next/link';

/** Creative lock — type only, no bunny shrug, no named fails. */
export const EMPTY = {
  filters: {
    title: 'Nothing in the directory matches that.',
    body: 'Try a brand, a product, or an ingredient — or read the three rules.',
  },
  query: {
    title: 'Search brands, products, and ingredients.',
    body: null,
  },
  strip: {
    title: 'No products listed yet.',
    body: 'The bar is on The Standard.',
  },
  brands: {
    title: 'No brands listed yet.',
    body: null,
  },
  ingredient: {
    title: 'No products listed for this ingredient yet.',
    body: null,
  },
  concern: {
    title: 'No products listed for this concern yet.',
    body: null,
  },
  type: {
    title: 'No products listed for this type yet.',
    body: null,
  },
};

export default function CatalogEmpty({ tone = 'filters', onClear = null }) {
  const copy = EMPTY[tone] || EMPTY.filters;
  return (
    <div className="empty" style={{ padding: '48px 16px', textAlign: 'center' }}>
      <div
        className="empty-title"
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 22,
          fontWeight: 600,
          color: 'var(--ink)',
          marginBottom: copy.body ? 8 : 0,
        }}
      >
        {copy.title}
      </div>
      {copy.body ? (
        <div className="empty-sub" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20 }}>
          {copy.body}
        </div>
      ) : (
        <div style={{ height: 20 }} />
      )}
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        {onClear ? (
          <button
            type="button"
            onClick={onClear}
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--terra)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Clear filters
          </button>
        ) : null}
        {tone === 'filters' || tone === 'query' ? (
          <Link href="/standard" style={{ fontSize: 13, fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>
            Read the three rules →
          </Link>
        ) : null}
        {tone === 'strip' ? (
          <Link href="/standard" style={{ fontSize: 13, fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>
            The Standard →
          </Link>
        ) : null}
      </div>
    </div>
  );
}
