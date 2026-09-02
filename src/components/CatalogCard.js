'use client';
import { useState } from 'react';
import Link from 'next/link';
import { buyLabel, slugify, findAmazonBuyUrl, isAmazonBuyUrl, otherBuyLinks } from '@/lib/constants';
import { catalogHref } from '@/lib/catalogQuery';

/**
 * Shared catalog card — home, directory, ingredient grids, PDP related.
 * Amazon secondary matches directory chips (#12/#13).
 */
export default function CatalogCard({
  product,
  showTags = true,
  onOpen = null,
}) {
  const [imgErr, setImgErr] = useState(false);
  const amazonUrl = findAmazonBuyUrl(product);
  const showAmazon = amazonUrl && !isAmazonBuyUrl(product.buyUrl);
  const extras = otherBuyLinks(product);
  const href = `/products/${slugify(product.brand, product.name)}`;

  return (
    <div
      className="card"
      onClick={onOpen ? () => onOpen(product) : undefined}
      style={onOpen ? { cursor: 'pointer' } : undefined}
    >
      <div className="card-img">
        {product.imageUrl && !imgErr ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="card-img-placeholder">
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
              {product.brand}
            </div>
          </div>
        )}
      </div>
      <div className="card-eyebrow">{product.brand}</div>
      <Link href={href} onClick={(e) => e.stopPropagation()} style={{ textDecoration: 'none' }}>
        <div className="card-name">{product.name}</div>
      </Link>
      {showTags && product.ingredients?.length > 0 && (
        <div className="card-tags">
          {product.ingredients.slice(0, 2).map((i) => (
            <Link
              key={i}
              href={catalogHref({ ingredients: [i] })}
              className="card-tag"
              onClick={(e) => e.stopPropagation()}
              style={{ textDecoration: 'none' }}
            >
              {i}
            </Link>
          ))}
        </div>
      )}
      <div className="card-footer">
        <span className="card-price">${product.price}</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <a
            href={product.buyUrl}
            className="card-buy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              window.fathom?.trackEvent?.('buy: ' + product.brand);
            }}
          >
            {buyLabel(product.buyUrl)}
          </a>
          {showAmazon && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(e) => e.stopPropagation()}
              style={{ fontSize: 13, color: 'var(--terra)', fontWeight: 600, textDecoration: 'none', opacity: 0.9 }}
            >
              Amazon →
            </a>
          )}
          {onOpen && extras.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(product);
              }}
              style={{
                fontSize: 13,
                color: 'var(--terra)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontWeight: 500,
                opacity: 0.75,
              }}
            >
              Other stores
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
