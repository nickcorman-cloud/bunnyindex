import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/bakuchiol' },
  title: "Bakuchiol, from brands that actually pass. \u2014 BunnyIndex",
  description: "Cruelty-free bakuchiol. Brands that meet the Bunny Index Standard — not a retinol substitute ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Bakuchiol"
      eyebrow="Ingredient"
      h1="Bakuchiol, from brands that actually pass."
      dek="Bakuchiol from brands that meet all three rules \u2014 not a retinol stand-in we invented."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "Bakuchiol is a plant-derived ingredient used in leave-on skincare. This page is bakuchiol. It is not retinol. If you want retinol, use that ingredient page.",
            "This page is the catalog\u2019s Bakuchiol tag, with the standard already applied.",
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
      closing="Bakuchiol is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
