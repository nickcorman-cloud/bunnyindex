import { catalogHref } from '@/lib/catalogQuery';

/** Live hub paths only. Exact catalog tag → route. Do not invent hubs. */

export const INGREDIENT_HUBS = {
  Niacinamide: '/ingredients/niacinamide',
  Retinol: '/ingredients/retinol',
  'Vitamin C': '/ingredients/vitamin-c',
  Squalane: '/ingredients/squalane',
  'Hyaluronic Acid': '/ingredients/hyaluronic-acid',
  SPF: '/ingredients/spf',
  Ceramides: '/ingredients/ceramides',
  'Glycolic Acid': '/ingredients/glycolic-acid',
  'Lactic Acid': '/ingredients/lactic-acid',
  'Salicylic Acid': '/ingredients/salicylic-acid',
  'Tranexamic Acid': '/ingredients/tranexamic-acid',
  'Azelaic Acid': '/ingredients/azelaic-acid',
  Peptides: '/ingredients/peptides',
  Bakuchiol: '/ingredients/bakuchiol',
};

export const CONCERN_HUBS = {
  Acne: '/concerns/acne',
  'Dry Skin': '/concerns/dry-skin',
  Hyperpigmentation: '/concerns/hyperpigmentation',
  'Barrier Support': '/concerns/barrier-support',
  'Oily Skin': '/concerns/oily-skin',
  Rosacea: '/concerns/rosacea',
  'Seborrheic Dermatitis': '/concerns/seborrheic-dermatitis',
  'Sensitive Skin': '/concerns/sensitive-skin',
};

export const TYPE_HUBS = {
  Moisturizer: '/types/moisturizer',
  Sunscreen: '/types/sunscreen',
  Cleanser: '/types/cleanser',
  Serum: '/types/serum',
};

export function ingredientHref(tag) {
  return INGREDIENT_HUBS[tag] || catalogHref({ ingredients: [tag] });
}

export function concernHref(tag) {
  return CONCERN_HUBS[tag] || null;
}

export function typeHref(tag) {
  return TYPE_HUBS[tag] || null;
}
