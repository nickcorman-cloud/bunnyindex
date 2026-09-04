import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/niacinamide' },
  title: "Niacinamide, from brands that actually pass. — BunnyIndex",
  description: "Cruelty-free niacinamide. Brands that meet all three rules — not a label that stops at the bottle.",
};

export default function NiacinamidePage() {
  return (
    <IngredientPage
      tag="Niacinamide"
      eyebrow="Ingredient"
      h1="Niacinamide, from brands that actually pass."
      dek="Vitamin B3, from brands that meet all three rules — not from a label that stops at the bottle."
      sections={[
        {
          heading: 'What it does',
          paragraphs: [
            "Niacinamide is a form of vitamin B3 used in leave-on skincare. It is water-soluble. It is not an acid peel, and it is not a bleach.",
            "What it is used for is narrower than the marketing: it can help the barrier (including how skin makes ceramides), it can reduce visible excess oil, and it can even out the look of tone and the look of pores. Some people flush or irritate at higher percentages. That is a formula question, not a cruelty-free question.",
            "This page is not a routine. It is a filter with the standard already applied.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            "Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.",
            "If a brand fails that bar, it does not make this page — even if the serum is famous, even if the INCI list starts with niacinamide, even if the box has a bunny on it.",
            <p style={pStyle}>
              The three rules: <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>The Standard</Link>.
            </p>,
          ],
        },
      ]}
      closing="Niacinamide is the ingredient. The standard is the company. We list both, or we list nothing."
    />
  );
}
