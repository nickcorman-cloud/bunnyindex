import Script from 'next/script';

export const metadata = {
  title: 'Newsletter — BunnyIndex',
  description: 'Subscribe to the BunnyIndex newsletter for cruelty-free beauty updates, new brand spotlights, and ingredient deep-dives.',
};

export default function NewsletterPage() {
  return (
    <>
      <Script src="https://subscribe-forms.beehiiv.com/embed.js" strategy="afterInteractive" />
      <section style={{background:'var(--cream)',minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'80px 32px'}}>
        <div style={{maxWidth:640,width:'100%',textAlign:'center'}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--ink-muted)',marginBottom:16}}>
            The Bunny Index
          </div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:52,fontWeight:600,lineHeight:1.1,color:'var(--ink)',marginBottom:20}}>
            Stay in the Loop
          </h1>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink-muted)',lineHeight:1.6,marginBottom:40,maxWidth:480,margin:'0 auto 40px'}}>
            New cruelty-free finds, brand updates, and ingredient deep-dives — straight to your inbox.
          </p>
          <iframe
            src="https://subscribe-forms.beehiiv.com/a1650cbd-b16a-44f9-a8e3-593f83af76a9"
            className="beehiiv-embed"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{width:'100%',maxWidth:560,height:291,margin:'0 auto',display:'block',borderRadius:0,backgroundColor:'transparent',boxShadow:'none'}}
          />
        </div>
      </section>
    </>
  );
}
