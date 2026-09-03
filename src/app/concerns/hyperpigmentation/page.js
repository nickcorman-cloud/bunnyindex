import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/concerns/hyperpigmentation' },
  title: "Hyperpigmentation, from brands that actually pass. \u2014 BunnyIndex",
  description: "Hyperpigmentation products from brands that meet the Bunny Index Standard. Not a brightening ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Hyperpigmentation"
      eyebrow="Concern"
      h1="Hyperpigmentation, from brands that actually pass."
      kind="concern"
      dek="Hyperpigmentation-tagged products from brands that meet all three rules \u2014 not from a bright carton."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Hyperpigmentation tag, with the standard already applied. It is not a diagnosis, and it is not a ranking of brighteners.",
            "Vitamin C, niacinamide, and tranexamic acid show up in a lot of these formulas. That is a tag overlap, not a ranking. If you want a single ingredient, use those ingredient pages.",
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
      closing="Hyperpigmentation is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
