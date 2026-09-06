/** P3 alternatives — FAIL peers with live NO /is- only. */
export const ALTERNATIVES = [
  {
    "slug": "aesop",
    "name": "Aesop",
    "parent": "L’Oréal",
    "isSlug": "aesop",
    "isBrand": "Aesop"
  },
  {
    "slug": "cerave",
    "name": "CeraVe",
    "parent": "L’Oréal",
    "isSlug": "cerave",
    "isBrand": "CeraVe"
  },
  {
    "slug": "drunk-elephant",
    "name": "Drunk Elephant",
    "parent": "Shiseido",
    "isSlug": "drunk-elephant",
    "isBrand": "Drunk Elephant"
  },
  {
    "slug": "farmacy-beauty",
    "name": "Farmacy Beauty",
    "parent": "Procter & Gamble",
    "isSlug": "farmacy-beauty",
    "isBrand": "Farmacy Beauty"
  },
  {
    "slug": "first-aid-beauty",
    "name": "First Aid Beauty",
    "parent": "Procter & Gamble",
    "isSlug": "first-aid-beauty",
    "isBrand": "First Aid Beauty"
  },
  {
    "slug": "paulas-choice",
    "name": "Paula's Choice",
    "parent": "Unilever",
    "isSlug": "paulas-choice",
    "isBrand": "Paula's Choice"
  },
  {
    "slug": "tatcha",
    "name": "Tatcha",
    "parent": "Unilever",
    "isSlug": "tatcha",
    "isBrand": "Tatcha"
  },
  {
    "slug": "the-ordinary-deciem",
    "name": "The Ordinary / DECIEM",
    "parent": "Estée Lauder",
    "isSlug": "the-ordinary",
    "isBrand": "The Ordinary"
  },
  {
    "slug": "youth-to-the-people",
    "name": "Youth to the People",
    "parent": "L’Oréal",
    "isSlug": "youth-to-the-people",
    "isBrand": "Youth to the People"
  }
];

export const ALTERNATIVE_JOBS = {
  "aesop": {
    "types": [
      "Cleanser"
    ],
    "concerns": [
      "Sensitive Skin"
    ]
  },
  "cerave": {
    "ingredients": [
      "Niacinamide",
      "Squalane"
    ]
  },
  "drunk-elephant": {
    "ingredients": [
      "Vitamin C",
      "Squalane"
    ]
  },
  "farmacy-beauty": {
    "ingredients": [
      "Vitamin C",
      "Niacinamide"
    ]
  },
  "first-aid-beauty": {
    "concerns": [
      "Barrier Support",
      "Sensitive Skin"
    ]
  },
  "paulas-choice": {
    "ingredients": [
      "Niacinamide"
    ]
  },
  "tatcha": {
    "types": [
      "Moisturizer"
    ],
    "ingredients": [
      "Hyaluronic Acid"
    ]
  },
  "the-ordinary-deciem": {
    "ingredients": [
      "Niacinamide",
      "Retinol",
      "Vitamin C"
    ]
  },
  "youth-to-the-people": {
    "types": [
      "Cleanser",
      "Serum"
    ]
  }
};

export function getAlternative(slug) {
  return ALTERNATIVES.find((a) => a.slug === slug) || null;
}
