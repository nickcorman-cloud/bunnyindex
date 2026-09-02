/** Shared catalog URL contract. Keep query keys stable — /brands already uses ?brand=.
 * Values are Directory closed-list strings, encoded as-is (do not slugify or case-fold):
 * ingredient: Hyaluronic Acid, Ceramides, Squalane, Glycolic Acid, Lactic Acid, Salicylic Acid,
 *   Vitamin C, Niacinamide, Tranexamic Acid, Azelaic Acid, Retinol, Peptides, Bakuchiol, SPF
 * concern (Wave A adds): Acne, Dry Skin, Hyperpigmentation, Oily Skin, Rosacea, Seborrheic Dermatitis, Sensitive Skin
 *   (also hydrate Anti-Aging, Barrier Support, Blackheads, Brightening, Eczema, Sun Protection if present)
 * type: existing product.type (Serum, Cleanser, …)
 */

export function splitParam(value) {
  if (!value) return [];
  return String(value)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export function parseCatalogSearch(searchParams) {
  if (!searchParams) {
    return {
      brands: [],
      ingredients: [],
      concerns: [],
      types: [],
      price: '',
      oilFree: false,
      fragFree: false,
      sort: 'popular',
      page: 1,
    };
  }
  const get = (key) => searchParams.get?.(key) ?? searchParams[key] ?? '';
  return {
    brands: splitParam(get('brand')),
    ingredients: splitParam(get('ingredient')),
    concerns: splitParam(get('concern')),
    types: splitParam(get('type')),
    price: get('price') || '',
    oilFree: get('oil') === '1',
    fragFree: get('fragrance') === '1',
    sort: get('sort') || 'popular',
    page: Math.max(1, parseInt(get('page') || '1', 10) || 1),
  };
}

export function catalogSearchString({
  brands = [],
  ingredients = [],
  concerns = [],
  types = [],
  price = '',
  oilFree = false,
  fragFree = false,
  sort = 'popular',
  page = 1,
} = {}) {
  const p = new URLSearchParams();
  if (brands.length) p.set('brand', brands.join(','));
  if (ingredients.length) p.set('ingredient', ingredients.join(','));
  if (concerns.length) p.set('concern', concerns.join(','));
  if (types.length) p.set('type', types.join(','));
  if (price) p.set('price', price);
  if (oilFree) p.set('oil', '1');
  if (fragFree) p.set('fragrance', '1');
  if (sort && sort !== 'popular') p.set('sort', sort);
  if (page > 1) p.set('page', String(page));
  return p.toString();
}

export function catalogHref(filters = {}) {
  const q = catalogSearchString(filters);
  return q ? `/directory?${q}` : '/directory';
}
