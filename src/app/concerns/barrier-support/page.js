import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/concerns/barrier-support' },
  title: "Barrier Support, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free barrier support. Brands that meet the Bunny Index Standard — not a diagnosis.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Barrier Support"
      eyebrow="Concern"
      h1="Barrier Support, from brands that actually pass."
      kind="concern"
      dek="Barrier-support-tagged products from brands that meet all three rules \u2014 not from a label that stops at the bottle."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Barrier Support tag, with the standard already applied. It is not a diagnosis of a damaged barrier, and it is not a routine.",
            "Ceramides, squalane, and hyaluronic acid show up in a lot of these formulas. That is a tag overlap, not a ranking. If you want a single ingredient, use those ingredient pages.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            "Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.",
            "If a brand fails that bar, it does not make this page \u2014 even if the product is famous, even if the INCI list matches, even if the box has a bunny on it.",
                        <p style={pStyle}>
              The three rules: <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>The Standard</Link>.
            </p>,
          ],
        },
      ]}
      closing="Barrier Support is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
