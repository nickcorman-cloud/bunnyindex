import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/types/serum' },
  title: "Serum, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Serums from brands that meet the Bunny Index Standard. Not an actives ranking.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Serum"
      eyebrow="Type"
      h1="Serum, from brands that actually pass."
      kind="type"
      dek="Serums from brands that meet all three rules \u2014 not an actives ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Serum type, with the standard already applied. It is not a ranking of percentages, and it is not a routine.",
            "If you want a single ingredient, use those ingredient pages. This page is the type.",
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
      closing="Serum is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
