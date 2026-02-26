import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — BunnyIndex',
  description: 'Terms of Service for BunnyIndex. Informational purposes only. No liability for product reactions.',
};

const sections = [
  {
    heading: '1. Informational purposes only',
    body: <><strong>BunnyIndex is a product discovery and research tool</strong>, not a medical or dermatological service. Nothing on this site — including product descriptions, ingredient tags, skin concern categories, or brand information — constitutes medical advice. <strong>Always consult a qualified healthcare professional or dermatologist before using a new skincare product</strong>, especially if you have a skin condition, allergy, or sensitivity.</>
  },
  {
    heading: '2. No liability for product reactions or injury',
    body: <>BunnyIndex lists products for informational purposes only. We do not manufacture, distribute, test, or sell any products featured on this site. <strong>We are not responsible for any adverse reactions, allergic responses, skin irritation, injury, or harm</strong> that may result from using a product you discovered through BunnyIndex. All purchases are made directly with the brand or retailer, and any product-related issues — including returns, defects, or injuries — are solely between you and that brand or retailer. <strong>Patch test all new products before use.</strong></>
  },
  {
    heading: '3. Accuracy of listings',
    body: <>We make every effort to ensure that product and brand information on BunnyIndex is accurate and up to date. However, <strong>we cannot guarantee the accuracy, completeness, or currency of any listing</strong>. Brand ownership, formulations, cruelty-free certifications, and ingredient lists can change without notice. Always verify cruelty-free status and ingredients directly with the brand before purchasing, particularly if you have specific ethical requirements or sensitivities.</>
  },
  {
    heading: '4. Affiliate links & compensation',
    body: <>BunnyIndex participates in affiliate programs, including the <strong>Amazon Associates Program</strong> and the <strong>Commission Junction (CJ) network</strong>. This means we may earn a small commission if you click a link on this site and make a purchase — at no additional cost to you. Affiliate relationships do not influence which brands or products are listed, or how they are described. Our listings are based solely on our cruelty-free criteria, not on commercial arrangements.</>
  },
  {
    heading: '5. No endorsement',
    body: <>Listing a product on BunnyIndex does not constitute an endorsement, guarantee, or warranty of that product's quality, safety, or efficacy. <strong>We do not personally test every product listed.</strong> Product descriptions, ratings, and reviews are based on publicly available information and user-reported data and should not be taken as personal recommendations.</>
  },
  {
    heading: '6. Third-party websites',
    body: <>BunnyIndex contains links to third-party brand and retailer websites. <strong>We have no control over the content, privacy practices, or terms of those sites</strong> and are not responsible for anything that occurs after you leave BunnyIndex. Visiting those sites is at your own risk and subject to their own terms of service and privacy policies.</>
  },
  {
    heading: '7. Intellectual property',
    body: <>The BunnyIndex name, logo, design, and original written content are the intellectual property of BunnyIndex and may not be reproduced, copied, or distributed without permission. Product names, brand names, and trademarks belong to their respective owners and are referenced on this site for identification purposes only.</>
  },
  {
    heading: '8. Changes to these terms',
    body: <>We may update these Terms of Service at any time. Changes will be reflected by the "Last updated" date at the top of this page. <strong>Continued use of BunnyIndex after any changes constitutes your acceptance of the updated terms.</strong></>
  },
  {
    heading: '9. Contact',
    body: <><Link href="/contact" style={{color:'var(--terra)'}}>Contact us</Link> if you have questions about these terms.</>
  },
];

export default function TermsPage() {
  return (
    <section style={{padding:'72px 0 80px',background:'var(--cream)'}}>
      <div style={{maxWidth:680,margin:'0 auto',padding:'0 24px'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--terra)',marginBottom:16}}>Legal</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:44,fontWeight:600,color:'var(--ink)',lineHeight:1.08,margin:'0 0 12px'}}>Terms of Service</h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'var(--muted)',margin:'0 0 56px'}}>Last updated: February 2026</p>

        {sections.map(({heading, body}) => (
          <div key={heading} style={{marginBottom:40}}>
            <h2 style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:700,color:'var(--ink)',margin:'0 0 10px'}}>{heading}</h2>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:'var(--ink)',lineHeight:1.75,margin:0}}>{body}</p>
          </div>
        ))}

        <div style={{borderTop:'1px solid var(--border)',paddingTop:32,marginTop:16}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:'var(--muted)',lineHeight:1.65}}>BunnyIndex is an independent project. By using this website, you agree to these terms. If you do not agree, please discontinue use of the site.</p>
        </div>
      </div>
    </section>
  );
}
