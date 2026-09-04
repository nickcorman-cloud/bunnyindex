import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/vitamin-c' },
  title: "Vitamin C, from brands that actually pass. — BunnyIndex",
  description: "Cruelty-free vitamin C. Brands that meet all three rules — not from a bright carton.",
};

export default function VitaminCPage() {
  return (
    <IngredientPage
      tag="Vitamin C"
      eyebrow="Ingredient"
      h1="Vitamin C, from brands that actually pass."
      dek="Ascorbic acid and its cousins, from brands that meet all three rules — not from a bright carton."
      sections={[
        {
          heading: 'What it does',
          paragraphs: [
            "Vitamin C in skincare is an antioxidant. The form you will see most often discussed is L-ascorbic acid. Other INCI names are derivatives that convert more slowly, or not as far, once they are on skin.",
            "What it is used for: it can help the look of dark spots and uneven tone, and some forms are used because they support collagen. L-ascorbic acid is also the form that oxidizes in air and light if the formula and the packaging don’t hold it. That is chemistry, not a morality play.",
            "This page does not rank derivatives. It does not pretend every “vitamin C” on a label is the same molecule. It groups products tagged for vitamin C, after the brand has already passed the standard.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            "Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.",
            "If a brand fails that bar, it does not make this page — even if the percentage is high, even if the ingredient list is ascorbic acid first, even if the box says cruelty-free.",
            <p style={pStyle}>
              The three rules: <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>The Standard</Link>.
            </p>,
          ],
        },
      ]}
      closing="Vitamin C is the ingredient. The standard is the company. We list both, or we list nothing."
    />
  );
}
