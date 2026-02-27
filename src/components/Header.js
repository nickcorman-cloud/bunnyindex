'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  const active = (href) => path === href || path.startsWith(href + '/');

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-b">bunny</span>
        <span className="logo-i">index</span>
      </Link>
      <nav className="nav">
        <Link href="/" className={`nav-btn${path === '/' ? ' active' : ''}`}>Home</Link>
        <Link href="/directory" className={`nav-btn${active('/directory') ? ' active' : ''}`}>Directory</Link>
        <Link href="/brands" className={`nav-btn${active('/brands') ? ' active' : ''}`}>Our Brands</Link>
          <Link href="/not-carried" className={` nav-btns${active('/not-carried') ? ' active' : ''}`}>Not Carried</Link>
        <Link href="/about" className={`nav-btn${active('/about') ? ' active' : ''}`}>About</Link>
        <Link href="/contact" className={`nav-btn${active('/contact') ? ' active' : ''}`}>Contact</Link>
        <Link href="/terms" className={`nav-btn${active('/terms') ? ' active' : ''}`} style={{fontSize:12,opacity:0.7}}>Terms</Link>
      </nav>
    </header>
  );
}
