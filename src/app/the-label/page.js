import Link from 'next/link';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import ClaimLayers from '@/components/ClaimLayers';

export const metadata = {
  title: 'The label is not the company. — BunnyIndex',
  description: 'Most cruelty-free claims stop at the finished product. Some stop at the factory. Almost none include the parent. We do.',
};

const linkStyle = { color: 'var(--terra)', textDecoration: 'none' };
const p = { fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' };
const h2 = { fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 600, color: 'var(--ink)', margin: '36px 0 16px', lineHeight: 1.2 };

export default function TheLabelPage() {
  return (
    <EditorialShell>
      <PageHeader
        eyebrow="The claim"
        title="The label is not the company."
        dek="Most cruelty-free claims stop at the finished product. Some stop at the factory. Almost none include the parent. We do."
      />

        <p style={p}>
          The carton can be telling the truth about the bottle and still be silent about the company. “Cruelty-free” is a line of type. It is not an org chart, a supplier list, or a map of where the brand is sold.
        </p>
        <p style={p}>This page is how that line usually works — and where it stops.</p>

        <ClaimLayers />

        {/* Optional P1 hero/still photo slot (label-claim-close) — empty for v1
        <EditorialBreak variant="figure" />
        */}

        <h2 style={h2}>The finished product</h2>
        <p style={p}>This is the easiest claim, and the one you can read without turning the box over.</p>
        <p style={p}>
          “We don’t test this product on animals.” Maybe they don’t. The finished formula is the last step. It is also the smallest part of the chain. A claim that ends here has not said anything yet about the ingredients, the people who made those ingredients, or the company that owns the brand.
        </p>
        <p style={p}>Most labels stop here.</p>

        <h2 style={h2}>The ingredients</h2>
        <p style={p}>
          A product is a mixture. The active, the preservative, the solvent, the fragrance — each one arrived from somewhere.
        </p>
        <p style={p}>
          If an ingredient is tested for this brand, or accepted because a test was required, the finished-product sentence can still print. Rule 1 does not stop at the tank. It includes the ingredients in the tank.
        </p>
        <p style={p}>Some claims never mention this layer. BunnyIndex does.</p>

        <h2 style={h2}>The suppliers — and anyone asked to test</h2>
        <p style={p}>
          Someone else made the raw materials. A brand that “doesn’t test” can still buy from a supplier that does, or that will, when asked.
        </p>
        <p style={p}>
          Third parties count. If the brand commissions a test, that is the brand’s test. If a supplier tests on the brand’s behalf, that is still in the chain. “Not in our building” is not a standard.
        </p>
        <p style={p}>Some claims stop at the factory. The factory is not the supply chain.</p>

        <h2 style={h2}>Where it is sold</h2>
        <p style={p}>
          If a market requires animal tests for cosmetics, selling there is not a paperwork problem. It is a test.
        </p>
        <p style={p}>
          A brand can keep a cruelty-free policy in one place and still put the product into a market where tests are required. The label in your hand will not mention that.
        </p>
        <p style={p}>
          We do not name those markets on this page. The rule is simple: not sold where testing is required. If the brand takes that trade, it is not in the directory.
        </p>

        <h2 style={h2}>The parent</h2>
        <p style={p}>This is the layer the carton almost never mentions.</p>
        <p style={p}>
          A subsidiary can have a cruelty-free policy, a dedicated lab, a nice about page. A controlling parent can still test — when legally required, or as policy. Research, registration, and revenue still belong to the group.
        </p>
        <p style={p}>
          Most claims never include the parent. Almost no badge is a substitute for reading who owns the brand. That is rule 3.
        </p>
        <p style={p}>
          A minority investor is not the same thing as a controlling parent. We do not treat every stake as a fail. We do treat a testing parent as one. The line is control, not a vibe about “selling out.”
        </p>

        <h2 style={h2}>What BunnyIndex actually does</h2>
        <p style={p}>We are not a certifier. We do not sell a bunny you can print.</p>
        <p style={p}>To be listed, a brand has to pass all three:</p>
        <ol style={{ ...p, paddingLeft: 24 }}>
          <li>No animal testing at any stage — finished product, ingredients, suppliers, third parties.</li>
          <li>Not sold where testing is required.</li>
          <li>Not owned by a parent that tests.</li>
        </ol>
        <p style={p}>The sentence on the box can be true as far as it goes. We care how far it goes.</p>
        <p style={{ ...p, margin: '0 0 12px' }}>
          <Link href="/standard" style={linkStyle}>The Standard →</Link>
        </p>
        <p style={{ ...p, margin: 0 }}>
          <Link href="/not-carried" style={linkStyle}>Who isn’t here →</Link>
        </p>
    </EditorialShell>
  );
}
