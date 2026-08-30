import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — BunnyIndex',
  description: 'How BunnyIndex handles analytics, newsletter signups, and affiliate links.',
};

const sections = [
  {
    heading: '1. What this policy covers',
    body: <>BunnyIndex is an informational product directory. <strong>We do not offer user accounts</strong>, and this policy describes the limited ways the site handles analytics, newsletter signups, and affiliate links.</>,
  },
  {
    heading: '2. Analytics',
    body: <>We use <strong>Fathom Analytics</strong> (site ID EBICVQTX) for privacy-friendly usage counts. We do not run Google Analytics, and we do not use analytics to build advertising profiles.</>,
  },
  {
    heading: '3. Newsletter',
    body: <>The newsletter is hosted by <strong>Beehiiv</strong>. We only receive your email if you subscribe. Beehiiv stores and sends those emails under its own privacy policy.</>,
  },
  {
    heading: '4. Affiliate links',
    body: <>BunnyIndex participates in affiliate programs, including <strong>Awin, Impact, Amazon Associates, and Commission Junction (CJ)</strong>. A click on a buy link may set a cookie on those networks so they can credit a purchase. Affiliate relationships do not decide which brands appear — the cruelty-free standard does.</>,
  },
  {
    heading: '5. What we do not collect',
    body: <>We do not create accounts, and <strong>we do not sell personal data</strong>. If you never subscribe and never click an affiliate link, the identifiable information we hold is essentially none beyond ordinary web-server and Fathom counts.</>,
  },
  {
    heading: '6. Third-party websites',
    body: <>Product pages link out to brand and retailer sites. <strong>Those sites have their own privacy policies</strong>. We are not responsible for what happens after you leave BunnyIndex.</>,
  },
  {
    heading: '7. Changes',
    body: <>We may update this policy. Changes will be reflected by the "Last updated" date at the top of this page.</>,
  },
  {
    heading: '8. Contact',
    body: <><Link href="/contact" style={{color:'var(--terra)'}}>Contact us</Link> if you have questions about this policy.</>,
  },
];

export default function PrivacyPage() {
  return (
    <section style={{padding:'72px 0 80px',background:'var(--cream)'}}>
      <div style={{maxWidth:680,margin:'0 auto',padding:'0 24px'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:16}}>Legal</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:44,fontWeight:600,color:'var(--ink)',lineHeight:1.08,margin:'0 0 12px'}}>Privacy Policy</h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'var(--muted)',margin:'0 0 56px'}}>Last updated: August 2026</p>

        {sections.map(({heading, body}) => (
          <div key={heading} style={{marginBottom:40}}>
            <h2 style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:700,color:'var(--ink)',margin:'0 0 10px'}}>{heading}</h2>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:'var(--ink)',lineHeight:1.75,margin:0}}>{body}</p>
          </div>
        ))}

        <div style={{borderTop:'1px solid var(--border)',paddingTop:32,marginTop:16}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:'var(--muted)',lineHeight:1.65}}>BunnyIndex is an independent project. This page describes how the site handles analytics, email, and affiliate clicks — not a user-account product.</p>
        </div>
      </div>
    </section>
  );
}
