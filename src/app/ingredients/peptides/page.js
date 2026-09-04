import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/peptides' },
  title: "Peptides, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free peptides. Brands that meet the Bunny Index Standard — not a collagen promise.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Peptides"
      eyebrow="Ingredient"
      h1="Peptides, from brands that actually pass."
      dek="Peptide-tagged products from brands that meet all three rules \u2014 not a collagen claim."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Peptides are short chains of amino acids used in leave-on skincare. This page does not rank them, and it does not promise collagen.",
            "This page is the catalog\u2019s Peptides tag, with the standard already applied. It is not every protein on a label.",
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
      closing="Peptides is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
