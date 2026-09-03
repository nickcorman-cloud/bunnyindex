import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/types/moisturizer' },
  title: "Moisturizer, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Moisturizers from brands that meet the Bunny Index Standard. Not a hydration ranking.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Moisturizer"
      eyebrow="Type"
      h1="Moisturizer, from brands that actually pass."
      kind="type"
      dek="Moisturizers from brands that meet all three rules \u2014 not a cream-vs-gel ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Moisturizer type, with the standard already applied. It is not a routine, and it is not every hydrator.",
            "Tinted moisturizer is a different type. Cleansing balm is a different type. If you want an ingredient, use those pages.",
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
      closing="Moisturizer is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
