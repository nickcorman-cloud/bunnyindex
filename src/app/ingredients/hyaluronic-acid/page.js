import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/hyaluronic-acid' },
  title: "Hyaluronic Acid, from brands that actually pass. \u2014 BunnyIndex",
  description: "Hyaluronic acid from brands that meet the Bunny Index Standard. Not a hydration routine.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Hyaluronic Acid"
      eyebrow="Ingredient"
      h1="Hyaluronic Acid, from brands that actually pass."
      dek="A water-binding ingredient from brands that meet all three rules \u2014 not from a plump-skin story."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Hyaluronic acid is a humectant. It holds water. It is not an oil, and it is not a peel.",
            "This page is the catalog\u2019s Hyaluronic Acid tag, with the standard already applied. It is not every humectant, and it is not a routine. Glycerin, ceramides, and squalane are other filters.",
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
      closing="Hyaluronic Acid is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
