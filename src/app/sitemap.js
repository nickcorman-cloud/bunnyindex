import { products, slugify } from '@/lib/constants';
import { WAVE1_SLUGS } from '@/data/determinations-wave1';

const SITE = 'https://www.bunnyindex.com';

const CONCERN_SLUGS = {
  Acne: 'acne',
  'Dry Skin': 'dry-skin',
  Hyperpigmentation: 'hyperpigmentation',
  'Barrier Support': 'barrier-support',
  'Oily Skin': 'oily-skin',
  Rosacea: 'rosacea',
  'Seborrheic Dermatitis': 'seborrheic-dermatitis',
  'Sensitive Skin': 'sensitive-skin',
};

const TYPE_SLUGS = {
  Moisturizer: 'moisturizer',
  Sunscreen: 'sunscreen',
  Cleanser: 'cleanser',
  Serum: 'serum',
  'Eye Cream': 'eye-cream',
  Mask: 'mask',
  Toner: 'toner',
  'Face Oil': 'face-oil',
};

const STATIC_PATHS = [
  '/',
  '/directory',
  '/brands',
  '/about',
  '/contact',
  '/newsletter',
  '/not-carried',
  '/terms',
  '/privacy',
  '/standard',
  '/the-label',
  '/ingredients/niacinamide',
  '/ingredients/retinol',
  '/ingredients/vitamin-c',
  '/ingredients/squalane',
  '/ingredients/hyaluronic-acid',
  '/ingredients/spf',
  '/ingredients/ceramides',
  '/ingredients/glycolic-acid',
  '/ingredients/lactic-acid',
  '/ingredients/salicylic-acid',
  '/ingredients/tranexamic-acid',
  '/ingredients/azelaic-acid',
  '/ingredients/peptides',
  '/ingredients/bakuchiol',
  '/concerns/acne',
  '/concerns/dry-skin',
  '/concerns/hyperpigmentation',
  '/concerns/barrier-support',
  '/concerns/oily-skin',
  '/concerns/rosacea',
  '/concerns/seborrheic-dermatitis',
  '/concerns/sensitive-skin',
  '/types/moisturizer',
  '/types/sunscreen',
  '/types/cleanser',
  '/types/serum',
  '/types/eye-cream',
  '/types/mask',
  '/types/toner',
  '/types/face-oil',
];

function forComboPaths() {
  const paths = [];
  for (const [concernTag, concernSlug] of Object.entries(CONCERN_SLUGS)) {
    for (const [typeTag, typeSlug] of Object.entries(TYPE_SLUGS)) {
      const n = products.filter(
        (p) => p.type === typeTag && Array.isArray(p.concerns) && p.concerns.includes(concernTag)
      ).length;
      if (n >= 3) paths.push(`/for/${concernSlug}/${typeSlug}`);
    }
  }
  return paths;
}

export default function sitemap() {
  const lastModified = new Date();
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE}${path === '/' ? '' : path}`,
    lastModified,
  }));
  const productEntries = products.map((p) => ({
    url: `${SITE}/products/${slugify(p.brand, p.name)}`,
    lastModified,
  }));
  const determinationEntries = WAVE1_SLUGS.map((slug) => ({
    url: `${SITE}/is-${slug}-cruelty-free`,
    lastModified,
  }));
  const forEntries = forComboPaths().map((path) => ({
    url: `${SITE}${path}`,
    lastModified,
  }));
  return [...staticEntries, ...productEntries, ...determinationEntries, ...forEntries];
}
