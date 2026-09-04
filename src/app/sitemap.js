import { products, slugify } from '@/lib/constants';
import { WAVE1_SLUGS } from '@/data/determinations-wave1';

const SITE = 'https://www.bunnyindex.com';

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
  return [...staticEntries, ...productEntries, ...determinationEntries];
}
