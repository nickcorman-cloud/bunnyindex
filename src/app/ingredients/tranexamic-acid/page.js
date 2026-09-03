import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/tranexamic-acid' },
  title: "Tranexamic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Tranexamic acid from brands that meet the Bunny Index Standard. Not a brightening ranking.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Tranexamic Acid"
      eyebrow="Ingredient"
      h1="Tranexamic Acid, from brands that actually pass."
      dek="A tone-tagged ingredient from brands that meet all three rules \u2014 not a bleach."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Tranexamic acid is used in leave-on skincare for the look of dark spots. It is not hydroquinone, and it is not a ranking of brighteners.",
            "This page is the catalog\u2019s Tranexamic Acid tag, with the standard already applied. It is not every brightener.",
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
      closing="Tranexamic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
