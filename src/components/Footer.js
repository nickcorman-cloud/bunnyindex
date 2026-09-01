import Link from 'next/link';

const linkStyle = {color:'#6B5B52',textDecoration:'underline',textUnderlineOffset:2};

const FOOTER_LINKS = [
  { href: '/directory', label: 'Directory' },
  { href: '/brands', label: 'Brands' },
  { href: '/standard', label: 'Standard' },
  { href: '/not-carried', label: 'Not carried' },
  { href: '/the-label', label: 'The label' },
  { href: '/about', label: 'About' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{display:'flex',alignItems:'baseline',gap:2}}>
          <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:'#FAF6F1'}}>bunny</span>
          <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,fontStyle:'italic',color:'#B85C38'}}>index</span>
        </div>
        <p className="footer-copy">
          © 2026 BunnyIndex · The cruelty-free ingredient directory ·{' '}
          {FOOTER_LINKS.map((item, i) => (
            <span key={item.href}>
              {i > 0 ? ' · ' : null}
              <Link href={item.href} style={linkStyle}>{item.label}</Link>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
