'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = (href) => path === href || path.startsWith(href + '/');
  const close = () => setMenuOpen(false);
  return (
    <header className="header">
      <Link href="/" className="logo" onClick={close}>
        <span className="logo-b">bunny</span>
        <span className="logo-i">index</span>
      </Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <Link href="/" className={`nav-btn${path === '/' ? ' active' : ''}`} onClick={close}>Home</Link>
        <Link href="/directory" className={`nav-btn${active('/directory') ? ' active' : ''}`} onClick={close}>Directory</Link>
        <Link href="/brands" className={`nav-btn${active('/brands') ? ' active' : ''}`} onClick={close}>Our Brands</Link>
        <Link href="/not-carried" className={`nav-btn${active('/not-carried') ? ' active' : ''}`} onClick={close}>Not Included</Link>
        <Link href="/about" className={`nav-btn${active('/about') ? ' active' : ''}`} onClick={close}>About</Link>
        <Link href="/newsletter" className={`nav-btn${active('/newsletter') ? ' active' : ''}`} onClick={close}>Newsletter</Link>
        <Link href="/contact" className={`nav-btn${active('/contact') ? ' active' : ''}`} onClick={close}>Contact</Link>
        <Link href="/terms" className={`nav-btn${active('/terms') ? ' active' : ''}`} style={{fontSize:12,opacity:0.7}} onClick={close}>Terms</Link>
      </nav>
    </header>
  );
}
