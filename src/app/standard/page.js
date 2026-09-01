import Image from 'next/image';
import Link from 'next/link';
import EditorialShell from '@/components/EditorialShell';
import PageHeader from '@/components/PageHeader';
import RuleStack from '@/components/RuleStack';
import EditorialBreak from '@/components/EditorialBreak';

export const metadata = {
  title: 'Three rules. No asterisk. — BunnyIndex',
  description: 'A brand can print cruelty-free on the bottle and still fail.',
};

const linkStyle = { color: 'var(--terra)', textDecoration: 'none' };
const p = { fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 20px' };
const h2 = { fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 600, color: 'var(--ink)', margin: '36px 0 16px', lineHeight: 1.2 };

export default function StandardPage() {
  return (
    <EditorialShell>
      <PageHeader
        eyebrow="The Bunny Index Standard"
        title="Three rules. No asterisk."
        dek="A brand can print cruelty-free on the bottle and still fail."
      />

        <p style={p}>
          Cruelty-free is not a regulated phrase in skincare. It is a sentence a brand chooses. The carton can say it while ingredients are tested, while the brand sells where tests are required, or while a parent company tests and the subsidiary keeps the nicer label.
        </p>
        <p style={p}>
          BunnyIndex is a directory, not a certification program. We do not sell a mark. To be listed, a brand has to pass all three rules below. Miss one, and it is not here. There is no partial listing, and no asterisk for a famous name.
        </p>

        <RuleStack />

        <EditorialBreak
          variant="figure"
          caption={
            <Link href="/the-label" style={linkStyle}>
              The carton is not the company.
            </Link>
          }
        >
          <Image
            src="/editorial/standard-label-close.png"
            alt="Matte carton with printed text reading cruelty-free, window light"
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: 'cover' }}
          />
        </EditorialBreak>

        <h2 style={h2}>1. No animal testing at any stage</h2>
        <p style={p}>Not the finished product. Not the ingredients. Not the suppliers. Not a third party asked to do it.</p>
        <p style={p}>
          A claim that stops at the bottle is not enough. If anyone in the chain tests — the formula, the raw materials, a contract lab — the brand fails this rule.
        </p>

        <h2 style={h2}>2. Not sold where testing is required</h2>
        <p style={p}>Some markets still require animal tests for cosmetics. Selling there is not a distribution detail. It is a test.</p>
        <p style={p}>
          If a brand is sold where testing is required, it is not in this directory. We do not publish a running map of those markets on this page. The rule is the rule.
        </p>

        <h2 style={h2}>3. Not owned by a parent that tests</h2>
        <p style={p}>
          A brand can police its own supply chain and still fail if a controlling parent tests — L’Oréal, Unilever, Estée Lauder, P&amp;G, Shiseido, and companies like them.
        </p>
        <p style={p}>
          The subsidiary’s label is not the group’s policy. Rule 3 is about who can set that policy. A testing parent is a fail. A parent that does not test is not the same thing; this rule is not a ban on having a parent at all, and it is not a prize for staying founder-owned forever.
        </p>

        <h2 style={h2}>What fails</h2>
        <p style={p}>The fail people miss is ownership.</p>
        <p style={p}>
          The bottle still says cruelty-free. The brand site can still read like an independent studio. The controlling parent still tests on animals when legally required, or as policy. That brand does not get a listing here. It fails rule 3.
        </p>
        <p style={p}>
          Who we don’t carry — and when a listing changes — lives on <Link href="/not-carried" style={linkStyle}>Who isn’t here</Link>.
        </p>

        <h2 style={h2}>What does not automatically fail</h2>
        <p style={p}>A minority investor is not a parent.</p>
        <p style={p}>
          If a fund or a company holds a stake that does not confer control, that is not an automatic fail. We look at who can actually set policy. A controlling parent that tests fails. A non-controlling stake does not, on its own.
        </p>
        <p style={p}>
          We do not keep a public gallery of close calls. If control is unclear, the brand stays off the list until it isn’t.
        </p>

        <h2 style={h2}>How this is different from a badge</h2>
        <p style={p}>
          A badge is a program. Programs have applications, scopes, fees, and cutoff dates. Some of that work is real.
        </p>
        <p style={p}>It is not this list.</p>
        <p style={p}>
          A logo on a carton does not tell you who owns the brand. It often does not tell you whether the group tests. It may not tell you whether the brand sells where tests are required.
        </p>
        <p style={p}>
          We do not treat a mark as a pass. A brand can hold a well-known certification and still fail rule 3. A brand can pass all three rules and never have paid for a sticker.
        </p>
        <p style={p}>
          BunnyIndex does not certify. We keep a directory. The bunny in the corner of this site is a reminder of the bar — not a logo a brand can apply for.
        </p>
        <p style={p}>The three rules, again:</p>
        <ol style={{ ...p, paddingLeft: 24 }}>
          <li>No animal testing at any stage — finished product, ingredients, suppliers, third parties.</li>
          <li>Not sold where testing is required.</li>
          <li>Not owned by a parent that tests.</li>
        </ol>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 40px', lineHeight: 1.3 }}>
          No asterisk.
        </p>
        <p style={{ ...p, margin: 0 }}>
          <Link href="/the-label" style={linkStyle}>How the claim actually works →</Link>
        </p>
    </EditorialShell>
  );
}
