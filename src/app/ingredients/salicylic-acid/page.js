import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/salicylic-acid' },
  title: "Salicylic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free salicylic acid. Brands that meet the Bunny Index Standard — not an acne plan.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Salicylic Acid"
      eyebrow="Ingredient"
      h1="Salicylic Acid, from brands that actually pass."
      dek="A BHA from brands that meet all three rules \u2014 not a treatment plan."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Salicylic acid is a beta hydroxy acid. It is oil-soluble. It is not benzoyl peroxide, and it is not a diagnosis.",
            "This page is the catalog\u2019s Salicylic Acid tag, with the standard already applied. It is not every acne tag.",
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
      closing="Salicylic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
