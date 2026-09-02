/** Wave 1 determination records. Copy lock: /workspace/seo-is-cf-wave1/.
 * No Tata Harper page or ownership example. No ILIA page or spotlight.
 * No remaining GT-hold YES. Do not name required-testing-market countries.
 * YES directoryBrandParam is the exact catalog string (encodeURIComponent, do not slugify).
 */
export const DETERMINATIONS = [
  {
    slug: "glossier",
    brand: "Glossier",
    determination: "yes",
    parentName: null,
    title: "Is Glossier cruelty-free? — BunnyIndex",
    description: "Yes. Glossier meets the Bunny Index Standard: no testing at any stage, not sold where testing is required, not owned by a parent that tests. See it in the directory.",
    eyebrow: "The Bunny Index Standard",
    h1: "Is Glossier cruelty-free?",
    answerLead: "Yes.",
    answerRest: "Glossier meets the Bunny Index Standard. It is in the directory.",
    lede: [
      "Glossier is independently owned. Brand Standard’s call is a pass: no animal testing at any stage, not sold where testing is required, not owned by a parent that tests. A bunny on the carton is not what this page is measuring. The three rules are."
    ],
    rulesAfter: "Miss one, and the brand is not here. There is no partial listing, and no asterisk for a famous name.\n\nThe full bar: [The Standard](/standard). How the claim usually stops: [The label](/the-label).",
    directoryBrandParam: "Glossier",
    directoryIntro: "Glossier products that are in the catalog live in the directory, filtered to the brand. The count is the live catalog, not a number on this page.",
    directoryCta: "See Glossier in the directory →",
    failLine: null,
    insteadIntro: null,
    insteadLinks: [],
    faqs: [
      {
        q: "Does “cruelty-free” on Glossier’s site count?",
        a: "Only if the brand passes all three rules. The sentence on the box can be true as far as it goes. We care how far it goes. That is [The label](/the-label)."
      },
      {
        q: "Is this a certification?",
        a: "No. BunnyIndex is a directory. We do not sell a mark."
      },
      {
        q: "Where do I go next?",
        a: "[Glossier in the directory](/directory?brand=Glossier). Listed brands: [Our Brands](/brands). The rules: [The Standard](/standard)."
      }
    ]
  },
  {
    slug: "elf",
    brand: "e.l.f. Cosmetics",
    determination: "yes",
    parentName: null,
    title: "Is e.l.f. cruelty-free? — BunnyIndex",
    description: "Yes. e.l.f. Cosmetics meets the Bunny Index Standard: no testing at any stage, not sold where testing is required, not owned by a parent that tests. See it in the directory.",
    eyebrow: "The Bunny Index Standard",
    h1: "Is e.l.f. cruelty-free?",
    answerLead: "Yes.",
    answerRest: "e.l.f. Cosmetics meets the Bunny Index Standard. It is in the directory.",
    lede: [
      "e.l.f. is independently owned. Brand Standard’s call is a pass on the three rules. This page is that call — not a certification badge, and not a filing close-read."
    ],
    rulesAfter: "Miss one, and the brand is not here. There is no partial listing, and no asterisk for a famous name.\n\nThe full bar: [The Standard](/standard). How the claim usually stops: [The label](/the-label).",
    directoryBrandParam: "e.l.f. Cosmetics",
    directoryIntro: "e.l.f. Cosmetics products that are in the catalog live in the directory, filtered to the brand. The count is the live catalog, not a number on this page.",
    directoryCta: "See e.l.f. Cosmetics in the directory →",
    failLine: null,
    insteadIntro: null,
    insteadLinks: [],
    faqs: [
      {
        q: "Does a leaping bunny or a PETA logo replace this?",
        a: "No. A mark is not a pass. A brand can hold a well-known certification and still fail a rule. e.l.f. is here because it passes all three, not because of a sticker. [The Standard](/standard)."
      },
      {
        q: "Is this a certification?",
        a: "No. BunnyIndex is a directory. We do not sell a mark."
      },
      {
        q: "Where do I go next?",
        a: "[e.l.f. Cosmetics in the directory](/directory?brand=e.l.f. Cosmetics). Listed brands: [Our Brands](/brands). The rules: [The Standard](/standard)."
      }
    ]
  },
  {
    slug: "cerave",
    brand: "CeraVe",
    determination: "no",
    parentName: "L’Oréal",
    title: "Is CeraVe cruelty-free? — BunnyIndex",
    description: "No — not by this standard. CeraVe isn’t in the directory. The Bunny Index Standard includes the controlling parent, not just the carton.",
    eyebrow: "Not carried",
    h1: "Is CeraVe cruelty-free?",
    answerLead: "No — not by this standard.",
    answerRest: "CeraVe is not in the directory.",
    lede: [
      "CeraVe is owned by L’Oréal. A controlling parent that tests is a fail under rule 3, even when the bottle still says cruelty-free. That is the fail people miss. Ownership is in the standard.",
      "We are not grading the moisturizer. We are grading the company."
    ],
    rulesAfter: null,
    directoryBrandParam: null,
    directoryIntro: null,
    directoryCta: null,
    failLine: "CeraVe fails rule 3. The full bar: [The Standard](/standard). The list: [Who isn’t here](/not-carried).",
    insteadIntro: "The job is barrier-ish, everyday cream — not a dupe list and not a review.",
    insteadLinks: [
      {
        href: "/directory",
        label: "Browse the directory",
        note: "live catalog, already filtered to brands that pass."
      },
      {
        href: "/directory?brand=e.l.f. Cosmetics",
        label: "e.l.f. Cosmetics in the directory",
        note: "Brand Standard PASS."
      },
      {
        href: "/ingredients/niacinamide",
        label: "Niacinamide, from brands that actually pass"
      },
      {
        href: "/ingredients/squalane",
        label: "Squalane, from brands that actually pass"
      }
    ],
    faqs: [
      {
        q: "They say they’re cruelty-free.",
        a: "The carton is not the company. Rule 3 is the controlling parent. [The label](/the-label)."
      },
      {
        q: "Is this about quality?",
        a: "No. [Who isn’t here](/not-carried) is a line we draw, not a review."
      },
      {
        q: "Where do I go?",
        a: "[The directory](/directory). The rules: [The Standard](/standard)."
      }
    ]
  },
  {
    slug: "the-ordinary",
    brand: "The Ordinary",
    determination: "no",
    parentName: "Estée Lauder",
    title: "Is The Ordinary cruelty-free? — BunnyIndex",
    description: "No — not by this standard. The Ordinary isn’t in the directory. The Bunny Index Standard includes the controlling parent, not just the carton.",
    eyebrow: "Not carried",
    h1: "Is The Ordinary cruelty-free?",
    answerLead: "No — not by this standard.",
    answerRest: "The Ordinary is not in the directory.",
    lede: [
      "The Ordinary sits under DECIEM. DECIEM is owned by Estée Lauder. A controlling parent that tests fails rule 3. Actives on the INCI list do not override the org chart."
    ],
    rulesAfter: null,
    directoryBrandParam: null,
    directoryIntro: null,
    directoryCta: null,
    failLine: "The Ordinary fails rule 3. The full bar: [The Standard](/standard). The list: [Who isn’t here](/not-carried).",
    insteadIntro: "The job is clinical-ish actives — not a percentage war.",
    insteadLinks: [
      {
        href: "/ingredients/niacinamide",
        label: "Niacinamide, from brands that actually pass"
      },
      {
        href: "/ingredients/retinol",
        label: "Retinol, from brands that actually pass"
      },
      {
        href: "/ingredients/vitamin-c",
        label: "Vitamin C, from brands that actually pass"
      },
      {
        href: "/directory",
        label: "Browse the directory"
      },
      {
        href: "/directory?brand=e.l.f. Cosmetics",
        label: "e.l.f. Cosmetics in the directory",
        note: "Brand Standard PASS."
      }
    ],
    faqs: [
      {
        q: "The INCI list is the point of The Ordinary.",
        a: "The INCI list is not the parent. Rule 3 is who can set policy. [The label](/the-label)."
      },
      {
        q: "Is this about quality?",
        a: "No. [Who isn’t here](/not-carried) is a line we draw, not a review."
      },
      {
        q: "Where do I go?",
        a: "Start with [niacinamide from brands that pass](/ingredients/niacinamide), or the [directory](/directory). The rules: [The Standard](/standard)."
      }
    ]
  },
  {
    slug: "drunk-elephant",
    brand: "Drunk Elephant",
    determination: "no",
    parentName: "Shiseido",
    title: "Is Drunk Elephant cruelty-free? — BunnyIndex",
    description: "No — not by this standard. Drunk Elephant isn’t in the directory. The Bunny Index Standard includes the controlling parent, not just the carton.",
    eyebrow: "Not carried",
    h1: "Is Drunk Elephant cruelty-free?",
    answerLead: "No — not by this standard.",
    answerRest: "Drunk Elephant is not in the directory.",
    lede: [
      "Drunk Elephant is owned by Shiseido. A controlling parent that tests fails rule 3. Prestige texture does not change the parent."
    ],
    rulesAfter: null,
    directoryBrandParam: null,
    directoryIntro: null,
    directoryCta: null,
    failLine: "Drunk Elephant fails rule 3. The full bar: [The Standard](/standard). The list: [Who isn’t here](/not-carried).",
    insteadIntro: "The job is actives and oils — not a color-coded shelf.",
    insteadLinks: [
      {
        href: "/ingredients/vitamin-c",
        label: "Vitamin C, from brands that actually pass"
      },
      {
        href: "/ingredients/squalane",
        label: "Squalane, from brands that actually pass"
      },
      {
        href: "/directory",
        label: "Browse the directory"
      },
      {
        href: "/directory?brand=Glossier",
        label: "Glossier in the directory",
        note: "Brand Standard PASS."
      }
    ],
    faqs: [
      {
        q: "They still say cruelty-free.",
        a: "The carton is not the company. Rule 3 is the controlling parent. [The label](/the-label)."
      },
      {
        q: "Is this about quality?",
        a: "No. [Who isn’t here](/not-carried) is a line we draw, not a review."
      },
      {
        q: "Where do I go?",
        a: "[Vitamin C from brands that pass](/ingredients/vitamin-c), or the [directory](/directory). The rules: [The Standard](/standard)."
      }
    ]
  },
  {
    slug: "paulas-choice",
    brand: "Paula’s Choice",
    determination: "no",
    parentName: "Unilever",
    title: "Is Paula’s Choice cruelty-free? — BunnyIndex",
    description: "No — not by this standard. Paula’s Choice isn’t in the directory. The Bunny Index Standard includes the controlling parent, not just the carton.",
    eyebrow: "Not carried",
    h1: "Is Paula’s Choice cruelty-free?",
    answerLead: "No — not by this standard.",
    answerRest: "Paula’s Choice is not in the directory.",
    lede: [
      "Paula’s Choice is owned by Unilever. A controlling parent that tests fails rule 3. A BHA reputation is not a pass."
    ],
    rulesAfter: null,
    directoryBrandParam: null,
    directoryIntro: null,
    directoryCta: null,
    failLine: "Paula’s Choice fails rule 3. The full bar: [The Standard](/standard). The list: [Who isn’t here](/not-carried).",
    insteadIntro: "The job is acne / leave-on exfoliant — not a 2% essay.",
    insteadLinks: [
      {
        href: "/directory",
        label: "Browse the directory",
        note: "live catalog."
      },
      {
        href: "/directory?brand=e.l.f. Cosmetics",
        label: "e.l.f. Cosmetics in the directory",
        note: "Brand Standard PASS."
      },
      {
        href: "/ingredients/niacinamide",
        label: "Niacinamide, from brands that actually pass",
        note: "if the job was a leave-on active, not a BHA."
      }
    ],
    faqs: [
      {
        q: "They built the BHA category.",
        a: "The category is not the parent. Rule 3 is who can set policy. [The label](/the-label)."
      },
      {
        q: "Is this about quality?",
        a: "No. [Who isn’t here](/not-carried) is a line we draw, not a review."
      },
      {
        q: "Where do I go?",
        a: "[The directory](/directory). The rules: [The Standard](/standard)."
      }
    ]
  }
];

export function getDetermination(slug) {
  return DETERMINATIONS.find((d) => d.slug === slug) || null;
}

/** Exact catalog name → /directory?brand= */
export function brandDirectoryHref(catalogName) {
  return `/directory?brand=${encodeURIComponent(catalogName)}`;
}

/** YES brands in this pack: /brands name should link here, not only to the directory filter. */
/** This PR ships these six. Glow Recipe + Good Molecules are GT-hold — no /is- routes, no /brands h2 links. */
export const WAVE1_SLUGS = [
  'glossier',
  'elf',
  'cerave',
  'the-ordinary',
  'drunk-elephant',
  'paulas-choice'
];

export const YES_BRAND_PATHS = Object.fromEntries(
  DETERMINATIONS.filter((d) => d.determination === 'yes' && WAVE1_SLUGS.includes(d.slug)).map((d) => [
    d.brand,
    `/is-${d.slug}-cruelty-free`
  ]),
);
