import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/glycolic-acid' },
  title: "Glycolic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free glycolic acid. Brands that meet the Bunny Index Standard — not an acid ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Glycolic Acid"
      eyebrow="Ingredient"
      h1="Glycolic Acid, from brands that actually pass."
      dek="An AHA from brands that meet all three rules \u2014 not every acid on a label."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Glycolic acid is an alpha hydroxy acid. It exfoliates the surface. It is not lactic acid, and it is not a peel kit.",
            "This page is the catalog\u2019s Glycolic Acid tag, with the standard already applied. It is not every AHA.",
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
      closing="Glycolic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
