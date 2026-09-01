/**
 * Editorial visual break — typographic / diagrammatic first.
 * Variants: figure | band | diagram
 * Photos are P1; optional empty figure placeholders OK for v1.
 */
export default function EditorialBreak({
  variant = 'diagram',
  children = null,
  caption = null,
  eyebrow = null,
  className = '',
}) {
  const base = {
    margin: '36px 0 40px',
  };

  if (variant === 'band') {
    return (
      <div
        className={`editorial-break editorial-break--band ${className}`.trim()}
        style={{
          ...base,
          borderTop: '1px solid var(--border)',
          paddingTop: 20,
        }}
        role="presentation"
      >
        {eyebrow ? (
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: children ? 12 : 0,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        {children}
      </div>
    );
  }

  if (variant === 'figure') {
    return (
      <figure
        className={`editorial-break editorial-break--figure ${className}`.trim()}
        style={{
          ...base,
          margin: '40px 0',
          padding: 0,
        }}
      >
        {/* Photo slot (P1) — leave empty or commented until stills land.
            Example: <div style={{ aspectRatio: '16/9', background: 'var(--parchment)', border: '1px solid var(--border)' }} aria-hidden /> */}
        <div
          style={{
            aspectRatio: '16 / 9',
            background: 'var(--parchment)',
            border: '1px dashed var(--border)',
            borderRadius: 'var(--r-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-hidden="true"
        >
          {children || (
            <span
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                color: 'var(--muted)',
                letterSpacing: '0.04em',
              }}
            >
              {/* empty photo placeholder */}
            </span>
          )}
        </div>
        {caption ? (
          <figcaption
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 13,
              color: 'var(--muted)',
              marginTop: 12,
              lineHeight: 1.5,
            }}
          >
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // diagram (default)
  return (
    <div
      className={`editorial-break editorial-break--diagram ${className}`.trim()}
      style={{
        ...base,
        background: 'var(--cream)',
      }}
      role="group"
    >
      {eyebrow ? (
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 13,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            marginBottom: 16,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      {children}
      {caption ? (
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 13,
            color: 'var(--muted)',
            margin: '16px 0 0',
            lineHeight: 1.5,
          }}
        >
          {caption}
        </p>
      ) : null}
    </div>
  );
}
