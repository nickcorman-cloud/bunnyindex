import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/concerns/sensitive-skin' },
  title: "Sensitive Skin, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free sensitive-skin products. Brands that meet the Bunny Index Standard — not a diagnosis.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Sensitive Skin"
      eyebrow="Concern"
      h1="Sensitive Skin, from brands that actually pass."
      kind="concern"
      dek="Sensitive-skin-tagged products from brands that meet all three rules \u2014 not from a label that stops at the bottle."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Sensitive Skin tag, with the standard already applied. It is not a diagnosis, and it is not a fragrance-free ranking.",
            "If you want a single ingredient, use those ingredient pages. This page is the concern tag.",
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
      closing="Sensitive Skin is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
