import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/lactic-acid' },
  title: "Lactic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free lactic acid. Brands that meet the Bunny Index Standard — not an acid ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Lactic Acid"
      eyebrow="Ingredient"
      h1="Lactic Acid, from brands that actually pass."
      dek="An AHA from brands that meet all three rules \u2014 not a stand-in for glycolic."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Lactic acid is an alpha hydroxy acid. It exfoliates. It is not glycolic acid, and it is not a diagnosis.",
            "This page is the catalog\u2019s Lactic Acid tag, with the standard already applied. It is not every AHA.",
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
      closing="Lactic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
