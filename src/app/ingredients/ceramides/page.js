import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/ceramides' },
  title: "Ceramides, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free ceramides. Brands that meet the Bunny Index Standard — not a barrier routine.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Ceramides"
      eyebrow="Ingredient"
      h1="Ceramides, from brands that actually pass."
      dek="Skin-similar lipids from brands that meet all three rules \u2014 not a repair story."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Ceramides are lipids skin already makes. They sit in the barrier. They are not a humectant, and they are not a peel.",
            "This page is the catalog\u2019s Ceramides tag, with the standard already applied. It is not every lipid, and it is not a routine.",
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
      closing="Ceramides is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
