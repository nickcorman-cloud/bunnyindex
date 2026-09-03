import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/ingredients/spf' },
  title: "SPF, from brands that actually pass. \u2014 BunnyIndex",
  description: "SPF products from brands that meet the Bunny Index Standard. Not a mineral-vs-chemical ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="SPF"
      eyebrow="Ingredient"
      h1="SPF, from brands that actually pass."
      dek="Sun-protection-tagged products from brands that meet all three rules \u2014 not a mineral-vs-chemical ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s SPF tag, with the standard already applied. It is not a mineral-vs-chemical ranking. The catalog does not have that filter.",
            "Zinc oxide and titanium dioxide show up in some of these formulas. That is a tag overlap, not a ranking, and not proof every row is mineral-only.",
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
      closing="SPF is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
