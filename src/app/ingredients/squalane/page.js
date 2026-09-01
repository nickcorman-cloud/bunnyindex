import Link from 'next/link';
import { IngredientPage, pStyle } from '../_shared';

export const metadata = {
  title: "Squalane, from brands that actually pass. — BunnyIndex",
  description: "A skin-similar oil, from brands that meet all three rules — not from a “clean oil” story.",
};

export default function SqualanePage() {
  return (
    <IngredientPage
      tag="Squalane"
      eyebrow="Ingredient"
      h1="Squalane, from brands that actually pass."
      dek="A skin-similar oil, from brands that meet all three rules — not from a “clean oil” story."
      sections={[
        {
          heading: 'What it does',
          paragraphs: [
            "Squalane is the stable, hydrogenated form of squalene. It is an emollient: a lightweight oil that sits in the same family of lipids skin already makes. It softens. It slows water loss. It does not exfoliate, and it does not fade spots.",
            "Squalene is the unsaturated original; squalane is what most formulas use because it does not go rancid as fast. This page is squalane.",
            "Source is a separate fact from testing. Squalane can be made from plants (olive, sugarcane, and others) or, historically, from shark liver. This page is not a vegan filter. BunnyIndex’s three rules are about animal testing, required-testing markets, and testing parents — not about whether an oil is plant-derived. Which products use which source belongs on the product, not in this explainer.",
          ],
        },
        {
          heading: 'Who appears here',
          paragraphs: [
            "Every product on this page is from a brand that passes the Bunny Index Standard: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests.",
            "If a brand fails that bar, it does not make this page — even if the oil is squalane, even if the source is plants, even if the carton says cruelty-free.",
            <p style={pStyle}>
              The three rules: <Link href="/standard" style={{ color: 'var(--terra)', textDecoration: 'none' }}>The Standard</Link>.
            </p>,
          ],
        },
      ]}
      closing="Squalane is the ingredient. The standard is the company. We list both, or we list nothing."
    />
  );
}
