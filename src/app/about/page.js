export const metadata = {
  title: 'About — BunnyIndex',
  description: 'A true cruelty-free skincare directory. No exceptions. Ever. Learn about our standards and why independent ownership matters.',
};

export default function AboutPage() {
  return (
    <section style={{padding:'72px 0 0',background:'var(--cream)'}}>
      <div style={{maxWidth:680,margin:'0 auto',padding:'0 24px'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:16}}>About BunnyIndex</div>

        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:48,fontWeight:600,color:'var(--ink)',lineHeight:1.08,margin:'0 0 16px'}}>A true cruelty-free skincare directory.</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,fontStyle:'italic',color:'var(--terra)',margin:'0 0 40px',lineHeight:1.3}}>No exceptions. Ever.</p>

        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 20px'}}>Hi, I'm Nick. I built BunnyIndex because I kept running into the same wall — I'd find a <strong>"cruelty-free"</strong> brand, dig a little deeper, and discover it was owned by a conglomerate that tests on animals everywhere it's required by law. The label was real. The commitment wasn't.</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 48px'}}>I wanted a directory I could actually trust. So I built one.</p>

        <div style={{borderTop:'1px solid var(--border)',margin:'0 0 48px'}} />

        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:'var(--ink)',margin:'0 0 20px',lineHeight:1.15}}>Think of your independent bookstore.</h2>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 20px'}}>You know the one. It's not a chain. The person behind the counter chose every book on those shelves — not because a corporate algorithm told them to, but because <strong>they actually care</strong>. That care shows up in every decision they make.</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 20px'}}>The brands on BunnyIndex are built the same way. They didn't choose to be cruelty-free because a market demanded it. They chose it because <strong>they believe no animal should suffer for a skincare product</strong> — and they've organized their entire business around that belief.</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 48px'}}>That's not a marketing position. <strong>It's compassion, operating as a business.</strong></p>

        <div style={{background:'var(--parchment)',border:'1px solid var(--border)',borderRadius:'var(--r-md)',padding:'36px 40px',margin:'0 0 48px'}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:'var(--ink)',margin:'0 0 16px',lineHeight:1.2}}>The highest level of compassion.</h2>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,color:'var(--ink)',lineHeight:1.75,margin:'0 0 16px'}}>There are different ways to be <strong>"cruelty-free."</strong> Some brands stop at their own products. Some stop at their own factories. <strong>The brands here go further</strong> — they've made a decision that no animal should suffer for their business, at any point in the chain, in any market, under any legal framework.</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,color:'var(--ink)',lineHeight:1.75,margin:0}}>That's not a certification requirement. <strong>It's a choice.</strong> And it's the clearest expression of what it means to actually care.</p>
        </div>

        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:600,color:'var(--ink)',margin:'0 0 20px',lineHeight:1.15}}>The criteria.</h2>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 24px'}}>To be listed on BunnyIndex, a brand must meet <strong>all three</strong> of the following:</p>
        <div style={{display:'flex',flexDirection:'column',gap:16,margin:'0 0 48px'}}>
          {[
            ['No animal testing at any stage','Not on finished products, not on ingredients, not by third-party manufacturers acting on their behalf.'],
            ['No sales in markets that require it','Selling in mainland China historically required animal testing for imported cosmetics. Brands that choose that market are excluded — regardless of whether they\'ve found a workaround.'],
            ['No parent company that tests','A brand can be genuinely cruelty-free and still be owned by a conglomerate that isn\'t. We don\'t accept that arrangement. Every brand here is independently operated.'],
          ].map(([title, body]) => (
            <div key={title} style={{display:'flex',gap:20,alignItems:'flex-start'}}>
              <div style={{flexShrink:0,width:24,height:24,borderRadius:'50%',background:'var(--terra)',display:'flex',alignItems:'center',justifyContent:'center',marginTop:2}}>
                <span style={{color:'var(--white)',fontSize:12,fontWeight:700}}>✓</span>
              </div>
              <div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:4}}>{title}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:'var(--muted)',lineHeight:1.65}}>{body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{borderTop:'1px solid var(--border)',padding:'40px 0 80px'}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,color:'var(--ink)',lineHeight:1.75,margin:'0 0 8px'}}>BunnyIndex is a one-person project. I research, verify, and curate every brand myself. If you know a brand that belongs here — or one that doesn't — I'd love to hear from you.</p>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontStyle:'italic',color:'var(--terra)',marginTop:24}}>— Nick</div>
        </div>
      </div>
    </section>
  );
}
