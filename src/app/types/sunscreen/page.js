import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

export const metadata = {
  alternates: { canonical: 'https://www.bunnyindex.com/types/sunscreen' },
  title: "Sunscreen, from brands that actually pass. \u2014 BunnyIndex",
  description: 'Sunscreens from brands that meet the Bunny Index Standard. Not a mineral-vs-chemical ranking.',
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Sunscreen"
      eyebrow="Type"
      h1="Sunscreen, from brands that actually pass."
      kind="type"
      dek="Sunscreens from brands that meet all three rules \u2014 not a mineral-vs-chemical ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog\u2019s Sunscreen type, with the standard already applied. It is not a ranking of SPF numbers, and it is not mineral-only.",
            "Tinted moisturizer is a different type. If you want the SPF ingredient tag, use that ingredient page.",
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
      closing="Sunscreen is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
