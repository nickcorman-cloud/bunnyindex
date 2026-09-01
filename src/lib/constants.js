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
    blurb: "Acure is a B-Corp, fully vegan, and PETA-certified. It sells affordable plant-based skincare formulated without parabens, sulfates, or mineral oil.",
  },
  {
    name: "Alpyn Beauty",
    blurb: "Alpyn Beauty comes from Jackson Hole, Wyoming, and blends wild-harvested Rocky Mountain botanicals with clinically active ingredients. Independently owned and PETA-certified cruelty-free.",
  },
  {
    name: "Biossance",
    blurb: "Biossance is a biotech skincare brand known for sugarcane-derived squalane. Every formula is EWG-verified and PETA-certified.",
  },
  {
    name: "Byoma",
    blurb: "Byoma launched around barrier repair. The line is cruelty-free, fragrance-free, and priced without a prestige markup.",
  },
  {
    name: "Cocokind",
    blurb: "Cocokind is a certified B-Corp that publishes supply-chain and carbon-footprint data on product pages. Formulas are built around barrier support, with a low-waste approach.",
  },
  {
    name: "Glossier",
    blurb: "Glossier started as a beauty blog. The lineup is small on purpose, and the brand has stayed independently cruelty-free as it expanded.",
  },
  {
    name: "Glow Recipe",
    blurb: "Glow Recipe is a Korean-beauty-inspired brand built around fruit-derived actives. PETA-certified cruelty-free and vegan.",
  },
  {
    name: "Good Molecules",
    blurb: "Good Molecules puts named actives — niacinamide, glycolic acid, tranexamic acid — into serums, toners, and treatments at accessible prices. Packaging is no-frills.",
  },
  {
    name: "Herbivore Botanicals",
    blurb: "Herbivore Botanicals was an early independent in natural skincare. Formulas are botanical, without synthetic fragrance, in glass bottles.",
  },
  {
    name: "ILIA Beauty",
    blurb: "ILIA makes tinted serums and SPF-forward formulas — skincare and makeup in the same products. PETA-certified cruelty-free and independently operated.",
  },
  {
    name: "Kinship",
    blurb: "Kinship is EWG-verified, independently owned, and cruelty-free. Formulas focus on actives and barrier support, without a prestige markup.",
  },
  {
    name: "Krave Beauty",
    blurb: "Founded by esthetician Liah Yoo, Krave Beauty starts from a blunt point: a lot of people are over-cleansing their way into irritated skin. Korean-owned, cruelty-free, and plain about what skincare can and cannot do.",
  },
  {
    name: "Merit Beauty",
    blurb: "Merit sells a short list of essentials, formulated without common irritants. Independently owned, PETA-certified, and cruelty-free.",
  },
  {
    name: "Milk Makeup",
    blurb: "Milk Makeup is a New York brand built around multi-use products for people who don’t want a 12-step routine. Vegan, cruelty-free, and formulated without parabens or fragrance.",
  },
  {
    name: "Naturium",
    blurb: "Naturium sells actives — niacinamide, retinol, vitamin C — without a prestige markup. Acquired by e.l.f. Beauty in 2023, it still operates independently and stays cruelty-free and vegan.",
  },
  {
    name: "OSEA Malibu",
    blurb: "OSEA has been family-owned and cruelty-free since 1996, with formulas built around seaweed. Still independently run.",
  },
  {
    name: "Pacifica",
    blurb: "Pacifica has been 100% vegan and cruelty-free since 1996, before those labels were a default claim. The line covers skincare, makeup, and fragrance, formulated without common irritants.",
  },
  {
    name: "Peach & Lily",
    blurb: "Peach & Lily brings Korean formulation into the US market. Founded by licensed esthetician Alicia Yoon, the brand pairs clinical actives with K-beauty methods.",
  },
  {
    name: "Saie",
    blurb: "Saie makes lightweight makeup and skin formulas with EWG VERIFIED status. Independently operated and fully cruelty-free.",
  },
  {
    name: "Summer Fridays",
    blurb: "Summer Fridays started as a beauty blog and is now a skincare line. Independently owned and PETA-certified.",
  },
  {
    name: "Sunday Riley",
    blurb: "Sunday Riley is independently owned and cruelty-free, with high-concentration formulas. The line includes Good Genes and Luna oil.",
  },
  {
    name: "Thrive Causemetics",
    blurb: "Thrive Causemetics donates one product to a woman in need for every product sold. Fully vegan, ophthalmologist-tested, and formulated without parabens, sulfates, or synthetic fragrance.",
  },
  {
    name: "Topicals",
    blurb: "Topicals is a Black-owned, dermatologist-developed brand focused on chronic skin conditions and hyperpigmentation. It donates to mental health organizations.",
  },
  {
    name: "Tower 28",
    blurb: "Tower 28 makes products for sensitive and reactive skin. Every product meets National Eczema Association standards, and formulas avoid the 1,400-plus ingredients banned by the European Union.",
  },
  {
    name: "True Botanicals",
    blurb: "True Botanicals holds MADE SAFE certification. Independently owned, cruelty-free prestige skincare.",
  },
  {
    name: "Versed",
    blurb: "Versed publishes environmental-impact data and offsets its carbon footprint. Formulas are dermatologist-developed and EWG-verified; packaging is at least 50% recycled material.",
  },
  {
    name: "e.l.f. Cosmetics",
    blurb: "e.l.f. Cosmetics started in 2004 as a low-price line. It is publicly traded, 100% vegan and cruelty-free, and holds both PETA and Leaping Bunny certifications.",
  },
  {
    name: "100% Pure",
    blurb: "100% Pure has been independently cruelty-free since 2005. The skincare line uses food-grade colorants and fruit-pigmented formulas, across hundreds of products.",
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
