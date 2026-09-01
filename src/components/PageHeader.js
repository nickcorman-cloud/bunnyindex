export default function PageHeader({
  eyebrow = null,
  title,
  dek = null,
  align = 'left',
  actions = null,
  measure = 760,
  titleSize = 'page',
}) {
  const isHome = titleSize === 'home';
  const isCenter = align === 'center';

  return (
    <div
      style={{
        maxWidth: measure,
        margin: isCenter ? '0 auto' : undefined,
        textAlign: isCenter ? 'center' : 'left',
      }}
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
      <h1
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: isHome ? 'clamp(36px, 8vw, 56px)' : 'clamp(32px, 5vw, 42px)',
          fontWeight: 600,
          color: 'var(--ink)',
          lineHeight: isHome ? 1.05 : 1.1,
          margin: isHome ? '0 0 24px' : '0 0 16px',
        }}
      >
        {title}
      </h1>
      {dek ? (
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 22,
            fontStyle: 'italic',
            color: 'var(--muted)',
            maxWidth: 620,
            lineHeight: 1.5,
            margin: isCenter ? '0 auto 32px' : '0 0 32px',
          }}
        >
          {dek}
        </div>
      ) : null}
      {actions ? (
        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: isCenter ? 'center' : 'flex-start',
          }}
        >
          {actions}
        </div>
      ) : null}
    </div>
  );
}
