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
  '/concerns/acne',
  '/concerns/dry-skin',
  '/concerns/hyperpigmentation',
  '/concerns/barrier-support',
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
