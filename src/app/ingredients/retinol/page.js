import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/retinol' },
  title: "Retinol, from brands that actually pass. — BunnyIndex",
  description: "Cruelty-free retinol. Brands that meet all three rules — not a claim that ends at the finished product.",
};

export default function RetinolPage() {
  return (
    <IngredientPage
      tag="Retinol"
      eyebrow="Ingredient"
      h1="Retinol, from brands that actually pass."
      dek="Vitamin A, from brands that meet all three rules — not from a claim that ends at the finished product."
      sections={[
        {
          heading: 'What it does',
          paragraphs: [
            "Retinol is a vitamin A ingredient used in over-the-counter skincare. Skin converts it, in steps, toward retinoic acid. It speeds how fast the surface turns over. People use it for texture, fine lines, and breakouts.",
            "It can irritate. It can make skin more reactive to the sun.",
            "This page is retinol. It is not every retinoid. It is not prescription tretinoin. A different vitamin A does not belong in this grid because the marketing borrowed the word.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            "Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.",
            "If a brand fails that bar, it does not make this page — even if the night cream is a bestseller, even if the ingredient is retinol, even if a certification logo is on the carton.",
            <p style={pStyle}>
              The three rules: <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>The Standard</Link>.
            </p>,
          ],
        },
      ]}
      closing="Retinol is the ingredient. The standard is the company. We list both, or we list nothing."
    />
  );
}
