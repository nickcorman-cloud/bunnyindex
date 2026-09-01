'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const PRIMARY = [
  { href: '/directory', label: 'Directory' },
  { href: '/standard', label: 'The Standard', matches: ['/the-label', '/not-carried'] },
  { href: '/about', label: 'About', matches: ['/newsletter', '/contact'] },
];

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = (item) => {
    if (path === item.href || path.startsWith(item.href + '/')) return true;
    return (item.matches || []).some((m) => path === m || path.startsWith(m + '/'));
  };
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
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        {PRIMARY.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-btn${active(item) ? ' active' : ''}`}
            onClick={close}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
