import Link from 'next/link';
import { IngredientPage, pStyle } from '../../ingredients/_shared';

/** Pass B — SEO: /workspace/seo-type-hubs-passb/types-toner.md */
export const metadata = {
  alternates: { canonical: "https://www.bunnyindex.com/types/toner" },
  title: "Toner, from brands that actually pass. — BunnyIndex",
  description: "Cruelty-free toners. Brands that meet the Bunny Index Standard — not a pH or essence ranking.",
};

export default function HubPage() {
  return (
    <IngredientPage
      tag="Toner"
      eyebrow="Type"
      h1="Toner, from brands that actually pass."
      kind="type"
      dek="Toners from brands that meet all three rules — not a pH or essence ranking."
      sections={[
        {
          heading: 'What it is',
          paragraphs: [
            "This page is the catalog’s Toner type, with the standard already applied. Mist and exfoliant are different types. It is not a seven-step routine.",
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
      closing="Toner is the filter. The standard is the company. We list both, or we list nothing."
    />
  );
}
