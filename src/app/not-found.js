import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:32,textAlign:'center'}}>
      <div style={{fontSize:48,marginBottom:16}}>🐰</div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:600,color:'var(--ink)',marginBottom:8}}>Page not found</h1>
      <p style={{fontSize:15,color:'var(--muted)',marginBottom:24}}>This product may have moved or been removed from the directory.</p>
      <Link href="/directory" style={{background:'var(--terra)',color:'var(--white)',padding:'10px 20px',borderRadius:'var(--r-sm)',textDecoration:'none',fontWeight:600,fontSize:14}}>
        Back to Directory →
      </Link>
    </div>
  );
}
