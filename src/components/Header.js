'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const PRIMARY = [
  { href: '/directory', label: 'Directory' },
  { href: '/brands', label: 'Brands' },
  { href: '/standard', label: 'Standard' },
  { href: '/not-carried', label: 'Not carried' },
];

const MORE = [
  { href: '/the-label', label: 'The label' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const active = (href) => path === href || path.startsWith(href + '/');
  const moreActive = MORE.some((item) => active(item.href));
  const close = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  useEffect(() => {
    if (!moreOpen) return undefined;
    const onDoc = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setMoreOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [moreOpen]);

  return (
    <header className="header">
      <Link href="/" className="logo" onClick={close}>
        <span className="logo-b">bunny</span>
        <span className="logo-i">index</span>
      </Link>
      <button
        className="menu-toggle"
        onClick={() => {
          setMenuOpen((v) => !v);
          setMoreOpen(false);
        }}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        {PRIMARY.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-btn${active(item.href) ? ' active' : ''}`}
            onClick={close}
          >
            {item.label}
          </Link>
        ))}
        <div className={`nav-more${moreOpen ? ' open' : ''}`} ref={moreRef}>
          <button
            type="button"
            className={`nav-btn${moreActive || moreOpen ? ' active' : ''}`}
            aria-expanded={moreOpen}
            aria-haspopup="true"
            onClick={() => setMoreOpen((v) => !v)}
          >
            More
          </button>
          <div className="nav-more-panel" hidden={!moreOpen}>
            {MORE.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-btn${active(item.href) ? ' active' : ''}`}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
