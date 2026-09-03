import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/concerns/seborrheic-dermatitis' },
  title: "Seborrheic Dermatitis, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Seborrheic-dermatitis-tagged products from brands that meet the Bunny Index Standard. Not a diagnosis.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Seborrheic Dermatitis"
      eyebrow="Concern"
      h1="Seborrheic Dermatitis, from brands that actually pass."
      kind="concern"
      dek="Seborrheic-dermatitis-tagged products from brands that meet all three rules \u2014 not a treatment plan."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Seborrheic Dermatitis tag, with the standard already applied. It is not a diagnosis, and it is not a routine.",
            "If you want a single ingredient, use those ingredient pages. This page is the concern tag.",
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
      closing="Seborrheic Dermatitis is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
