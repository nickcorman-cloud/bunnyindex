import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

/** Pass B — SEO: /workspace/seo-type-hubs-passb/types-face-oil.md */
export const metadata = {
  alternates: { canonical: "https://www.bunnyindex.com/types/face-oil" },
  title: "Face Oil, from brands that actually pass. — BunnyIndex",
  description: "Cruelty-free face oil. Brands that meet the Bunny Index Standard — not an oil ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Face Oil"
      eyebrow="Type"
      h1="Face Oil, from brands that actually pass."
      kind="type"
      dek="Face Oils from brands that meet all three rules — not an oil ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog’s Face Oil type, with the standard already applied. Cleansing oil is a different type. It is not every oil on a face.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            'Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.',
            'If a brand fails that bar, it does not make this page — even if the product is famous, even if the INCI list matches, even if the box has a bunny on it.',
            <p style={pStyle} key="std">
              The three rules:{' '}
              <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>
                The Standard
              </Link>
              .
            </p>,
          ],
        },
      ]}
      closing="Face Oil is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
