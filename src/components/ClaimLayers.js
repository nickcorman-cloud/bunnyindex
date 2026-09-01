import EditorialBreak from '@/components/EditorialBreak';

/**
 * label-claim-stack — five vertical claim layers.
 * Row 1 solid ("Usually stops here."); row 5 "BunnyIndex goes here."
 * Lower rows lighter / dashed. No brand names.
 */
const LAYERS = [
  {
    label: 'Finished product',
    note: 'Usually stops here.',
    weight: 1,
  },
  {
    label: 'Ingredients',
    note: null,
    weight: 2,
  },
  {
    label: 'Suppliers',
    note: null,
    weight: 3,
  },
  {
    label: 'Where sold',
    note: null,
    weight: 4,
  },
  {
    label: 'Controlling parent',
    note: 'BunnyIndex goes here.',
    weight: 5,
  },
];

function layerStyle(weight) {
  if (weight === 1) {
    return {
      background: 'var(--terra-light)',
      border: '1px solid var(--terra)',
      opacity: 1,
    };
  }
  if (weight === 2) {
    return {
      background: 'var(--parchment)',
      border: '1px solid var(--border)',
      opacity: 0.95,
    };
  }
  if (weight === 3) {
    return {
      background: 'transparent',
      border: '1px solid var(--border)',
      opacity: 0.9,
    };
  }
  if (weight === 4) {
    return {
      background: 'transparent',
      border: '1px dashed var(--border)',
      opacity: 0.85,
    };
  }
  return {
    background: 'transparent',
    border: '1px dashed var(--terra)',
    opacity: 0.9,
  };
}

export default function ClaimLayers() {
  return (
    <EditorialBreak variant="diagram" className="claim-layers">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
        role="list"
        aria-label="Claim layers from finished product to controlling parent"
      >
        {LAYERS.map((layer) => {
          const box = layerStyle(layer.weight);
          const isTop = layer.weight === 1;
          const isBottom = layer.weight === 5;
          return (
            <div
              key={layer.label}
              role="listitem"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  ...box,
                  borderRadius: 'var(--r-sm)',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 48,
                  flex: '1 1 220px',
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: isTop || isBottom ? 18 : 17,
                    fontWeight: isTop || isBottom ? 600 : 400,
                    color: isBottom ? 'var(--terra)' : 'var(--ink)',
                    lineHeight: 1.2,
                  }}
                >
                  {layer.label}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: isTop || isBottom ? 'var(--terra)' : 'var(--muted)',
                  fontStyle: layer.note ? 'italic' : 'normal',
                  flex: '0 1 160px',
                  minWidth: 120,
                }}
              >
                {layer.note || '\u00a0'}
              </div>
            </div>
          );
        })}
      </div>
    </EditorialBreak>
  );
}
