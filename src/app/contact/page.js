export const metadata = {
  title: 'Contact — BunnyIndex',
  description: 'Get in touch with BunnyIndex. Submit a brand, ask a question, or say hello.',
};

export default function ContactPage() {
  return (
    <section style={{minHeight:'calc(100vh - 64px - 80px)',padding:'64px 32px',background:'var(--cream)'}}>
      <div style={{maxWidth:640,margin:'0 auto'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:12}}>Get in touch</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:600,color:'var(--ink)',margin:'0 0 12px'}}>Say hello.</h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,color:'var(--muted)',lineHeight:1.6,margin:'0 0 32px'}}>Submitting a brand, press inquiry, or just a question — I'd love to hear from you.</p>
        <div style={{borderRadius:'var(--r-md)',overflow:'hidden',border:'1px solid var(--border)',background:'var(--white)',marginTop:8}}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdi4pJyVj1S5n3r7RTejBkK_eWlBkU3ORR8_tMqH4eHe4sqJg/viewform?embedded=true"
            width="100%" height="640" frameBorder="0" title="Contact BunnyIndex"
            style={{display:'block'}}>
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
