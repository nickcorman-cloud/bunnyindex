import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/concerns/oily-skin' },
  title: "Oily Skin, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free oily-skin products. Brands that meet the Bunny Index Standard — not a diagnosis.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Oily Skin"
      eyebrow="Concern"
      h1="Oily Skin, from brands that actually pass."
      kind="concern"
      dek="Oily-skin-tagged products from brands that meet all three rules \u2014 not from a label that stops at the bottle."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Oily Skin tag, with the standard already applied. It is not a diagnosis, and it is not a routine.",
            "Niacinamide and salicylic acid show up in a lot of these formulas. That is a tag overlap, not a ranking.",
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
      closing="Oily Skin is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
