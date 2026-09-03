import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/azelaic-acid' },
  title: "Azelaic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Azelaic acid from brands that meet the Bunny Index Standard. Not a diagnosis.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Azelaic Acid"
      eyebrow="Ingredient"
      h1="Azelaic Acid, from brands that actually pass."
      dek="Azelaic acid from brands that meet all three rules \u2014 not a prescription stand-in."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Azelaic acid is used in leave-on skincare. It is not a diagnosis, and it is not every brightener.",
            "This page is the catalog\u2019s Azelaic Acid tag, with the standard already applied. It is not a routine.",
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
      closing="Azelaic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
