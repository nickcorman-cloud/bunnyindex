import { RAW_PRODUCTS } from '@/data/products';

export const normalizeType = (t) => {
  if (!t) return 'Other';
  const m = {
    'cleanser': 'Cleanser',
    'cleansing balm': 'Cleansing Balm',
    'cleansing oil': 'Cleansing Oil',
    'exfoliant': 'Exfoliant',
    'eye cream': 'Eye Cream',
    'eye patch': 'Eye Cream',
    'face mask': 'Mask',
    'face oil': 'Face Oil',
    'lip treatment': 'Lip Balm',
    'mist': 'Mist',
    'moisturizer': 'Moisturizer',
    'serum': 'Serum',
    'spot treatment': 'Spot Treatment',
    'sunscreen': 'Sunscreen',
    'tinted spf moisturizer': 'Tinted Moisturizer',
    'toner': 'Toner',
    'balm': 'Lip Balm',
  };
  return m[t.toLowerCase()] || t;
};

export const products = RAW_PRODUCTS.map((p) => ({ ...p, type: normalizeType(p.type) }));

export const BRAND_NAMES = [...new Set(products.map((p) => p.brand))].sort();

export const INGREDIENT_GROUPS = [
  { label: 'Hydrators', items: ['Hyaluronic Acid', 'Ceramides', 'Squalane'] },
  { label: 'Exfoliants', items: ['Glycolic Acid', 'Lactic Acid', 'Salicylic Acid'] },
  { label: 'Brighteners', items: ['Vitamin C', 'Niacinamide', 'Tranexamic Acid', 'Azelaic Acid'] },
  { label: 'Treatments', items: ['Retinol', 'Peptides', 'Bakuchiol'] },
  { label: 'Sun Protection', items: ['SPF'] },
];

export const CONCERNS = [
  'Acne',
  'Dry Skin',
  'Hyperpigmentation',
  'Oily Skin',
  'Rosacea',
  'Seborrheic Dermatitis',
  'Sensitive Skin',
];

export const TYPES = [
  'Cleanser',
  'Cleansing Balm',
  'Exfoliant',
  'Eye Cream',
  'Face Oil',
  'Mask',
  'Mist',
  'Moisturizer',
  'Serum',
  'Spot Treatment',
  'Sunscreen',
  'Tinted Moisturizer',
  'Toner',
];

export const BRAND_PROFILES = [
  {
    name: "Acure",
    blurb: "Acure sells affordable plant-based skincare without parabens, sulfates, or mineral oil.",
  },
  {
    name: "Alpyn Beauty",
    blurb: "Alpyn Beauty blends wild-harvested botanicals with clinically active ingredients.",
  },
  {
    name: "Biossance",
    blurb: "Biossance is a biotech skincare brand known for sugarcane-derived squalane.",
  },
  {
    name: "Byoma",
    blurb: "Byoma makes fragrance-free barrier-repair formulas without a prestige markup.",
  },
  {
    name: "Cocokind",
    blurb: "Cocokind makes barrier-support formulas with a low-waste approach.",
  },
  {
    name: "Glossier",
    blurb: "Glossier keeps a small lineup on purpose.",
  },
  {
    name: "Glow Recipe",
    blurb: "Glow Recipe makes skincare around fruit-derived actives.",
  },
  {
    name: "Good Molecules",
    blurb: "Good Molecules puts named actives into serums and treatments at accessible prices.",
  },
  {
    name: "Herbivore Botanicals",
    blurb: "Herbivore Botanicals makes botanical formulas without synthetic fragrance, in glass bottles.",
  },
  {
    name: "Kinship",
    blurb: "Kinship makes actives and barrier-support formulas without a prestige markup. Owned by Kindred Brands.",
  },
  {
    name: "Krave Beauty",
    blurb: "Krave Beauty makes simple formulas for irritated, over-cleansed skin.",
  },
  {
    name: "Merit Beauty",
    blurb: "Merit sells a short list of essentials, formulated without common irritants.",
  },
  {
    name: "Milk Makeup",
    blurb: "Milk Makeup makes multi-use products without parabens or fragrance.",
  },
  {
    name: "Naturium",
    blurb: "Naturium sells actives without a prestige markup. Owned by e.l.f. Beauty, which does not test.",
  },
  {
    name: "OSEA Malibu",
    blurb: "OSEA makes formulas built around seaweed.",
  },
  {
    name: "Pacifica",
    blurb: "Pacifica is vegan skincare, makeup, and fragrance, formulated without common irritants.",
  },
  {
    name: "Peach & Lily",
    blurb: "Peach & Lily pairs clinical actives with K-beauty methods.",
  },
  {
    name: "Saie",
    blurb: "Saie makes lightweight makeup and skin formulas.",
  },
  {
    name: "Summer Fridays",
    blurb: "Summer Fridays is a skincare line that started as a beauty blog.",
  },
  {
    name: "Sunday Riley",
    blurb: "Sunday Riley makes high-concentration formulas, including Good Genes and Luna oil.",
  },
  {
    name: "Thrive Causemetics",
    blurb: "Thrive Causemetics donates one product for every product sold. Vegan, formulated without parabens, sulfates, or synthetic fragrance.",
  },
  {
    name: "Topicals",
    blurb: "Topicals is a Black-owned, dermatologist-developed brand focused on chronic skin conditions and hyperpigmentation.",
  },
  {
    name: "Tower 28",
    blurb: "Tower 28 makes products for sensitive and reactive skin.",
  },
  {
    name: "True Botanicals",
    blurb: "True Botanicals makes prestige skincare.",
  },
  {
    name: "Versed",
    blurb: "Versed makes dermatologist-developed formulas; packaging is at least 50% recycled material.",
  },
  {
    name: "e.l.f. Cosmetics",
    blurb: "e.l.f. Cosmetics is a low-price line, vegan, publicly traded. It passes all three rules.",
  },
  {
    name: "100% Pure",
    blurb: "100% Pure uses food-grade colorants in its skincare.",
  },
];

export function slugify(brand, name) {
  return `${brand}-${name}`
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function findProductBySlug(slug) {
  return products.find(p => slugify(p.brand, p.name) === slug) || null;
}

export function buyLabel(url) {
  if (!url) return 'Shop now →';
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    if (domain === 'amazon.com') return 'Buy on Amazon →';
    return `Buy at ${domain} →`;
  } catch {
    return 'Shop now →';
  }
}

export function isAmazonBuyUrl(url) {
  if (!url) return false;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return host === 'amazon.com';
  } catch {
    return false;
  }
}

/** First US amazon.com URL from buyUrl or buyLinks (affiliate-ready rows only). */
export function findAmazonBuyUrl(product) {
  if (!product) return null;
  if (isAmazonBuyUrl(product.buyUrl)) return product.buyUrl;
  const link = product.buyLinks?.find(
    (l) => isAmazonBuyUrl(l.url) || String(l.store || '').toLowerCase() === 'amazon'
  );
  return link?.url || null;
}

/** Secondary buyLinks excluding Amazon and exact duplicates of the primary buyUrl. */
export function otherBuyLinks(product) {
  if (!product?.buyLinks?.length) return [];
  return product.buyLinks.filter((l) => {
    if (isAmazonBuyUrl(l.url) || String(l.store || '').toLowerCase() === 'amazon') return false;
    if (l.url && product.buyUrl && l.url === product.buyUrl) return false;
    return true;
  });
}
