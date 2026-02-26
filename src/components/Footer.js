import Link from 'next/link';

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
          <Link href="/terms" style={{color:'#6B5B52',textDecoration:'underline',textUnderlineOffset:2}}>Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
