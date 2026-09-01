'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const PRIMARY = [
  { href: '/directory', label: 'Directory' },
  { href: '/standard', label: 'The Standard', matches: ['/the-label', '/not-carried'] },
  { href: '/about', label: 'About', matches: ['/newsletter', '/contact'] },
];

const SECONDARY = [
  { href: '/brands', label: 'Brands' },
  { href: '/not-carried', label: 'Not carried' },
  { href: '/the-label', label: 'The label' },
];

function isActive(path, item) {
  if (path === item.href || path.startsWith(item.href + '/')) return true;
  return (item.matches || []).some((m) => path === m || path.startsWith(m + '/'));
}

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <Link href="/" className="logo" onClick={close}>
        <span className="logo-b">bunny</span>
        <span className="logo-i">index</span>
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>
      <nav className={`nav${menuOpen ? ' open' : ''}`} aria-label="Primary">
        <div className="nav-primary">
          {PRIMARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-btn${isActive(path, item) ? ' active' : ''}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-secondary" aria-label="Also">
          {SECONDARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-sub${isActive(path, item) ? ' active' : ''}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
