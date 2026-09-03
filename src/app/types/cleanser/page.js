import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/types/cleanser' },
  title: "Cleanser, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Cleansers from brands that meet the Bunny Index Standard. Not a double-cleanse plan.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Cleanser"
      eyebrow="Type"
      h1="Cleanser, from brands that actually pass."
      kind="type"
      dek="Cleansers from brands that meet all three rules \u2014 not a double-cleanse plan."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Cleanser type, with the standard already applied. It is not a routine.",
            "Cleansing balm is a different type. Do not pull those rows into this grid.",
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
      closing="Cleanser is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
