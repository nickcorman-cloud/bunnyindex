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
  { label: 'Exfoliants', items: ['Glycolic Acid', 'Lactic Acid', 'Salicylic Acid', 'Azelaic Acid'] },
  { label: 'Brighteners', items: ['Vitamin C', 'Niacinamide', 'Tranexamic Acid'] },
  { label: 'Treatments', items: ['Retinol', 'Peptides', 'Bakuchiol', 'Caffeine', 'Vitamin E'] },
  { label: 'Sun Protection', items: ['SPF'] },
];

export const CONCERNS = [
  'Acne',
  'Brightening',
  'Dry Skin',
  'Hyperpigmentation',
  'Oily Skin',
  'Rosacea',
  'Seborrheic Dermatitis',
  'Sensitive Skin',
  'Sun Protection',
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
    name: 'Acure',
    blurb: "Founded on the belief that personal care shouldn't come at the planet's expense, Acure is a B-Corp certified brand delivering affordable, plant-powered skincare. They're fully vegan, PETA-certified, and formulate without parabens, sulfates, or mineral oil.",
  },
  {
    name: 'Alpyn Beauty',
    blurb: "Born in Jackson Hole, Wyoming, Alpyn Beauty harvests wild-harvested botanicals from the Rocky Mountains and blends them with clinically active ingredients. The brand is independently owned, PETA-certified cruelty-free, and built around the idea that the most powerful skincare ingredients are the ones that survive harsh environments.",
  },
  {
    name: 'Biossance',
    blurb: "Biossance is a clean biotech brand best known for bringing sugarcane-derived squalane to the mainstream. Every formula is EWG-verified, PETA-certified, and made with sustainability baked into the science.",
  },
  {
    name: 'Byoma',
    blurb: "Byoma launched with a singular focus: barrier repair. They're cruelty-free, fragrance-free across the line, and deliberately affordable — making barrier-first skincare accessible without the prestige markup.",
  },
  {
    name: 'Cocokind',
    blurb: "Cocokind is a certified B-Corp that publishes its supply chain and carbon footprint data on product pages. Their approach is low-waste, high-transparency, and driven by skin-barrier philosophy.",
  },
  {
    name: 'Glossier',
    blurb: "Glossier grew out of a beauty blog and became a brand that insists skin is something to work with, not cover up. Their lineup is deliberately minimal and they've remained independently cruelty-free throughout their growth.",
  },
  {
    name: 'Glow Recipe',
    blurb: "Glow Recipe is a Korean beauty-inspired brand that leads with fruit-powered actives and joyful packaging. They're PETA-certified cruelty-free and vegan, and consistently deliver effective formulas.",
  },
  {
    name: 'Good Molecules',
    blurb: "Good Molecules was built to close the gap between clinical-grade ingredients and accessible pricing. Their serums, toners, and treatments pack actives like niacinamide, glycolic acid, and tranexamic acid into no-frills packaging at prices that make it easy to use them consistently.",
  },
  {
    name: 'Herbivore Botanicals',
    blurb: "Herbivore was one of the early brands to prove that natural skincare could look like luxury. Their minimalist glass bottles became a category aesthetic, with clean actives, no synthetic fragrance, and a commitment to botanical ingredients.",
  },
  {
    name: 'ILIA Beauty',
    blurb: "ILIA sits at the intersection of skincare and makeup, building tinted serums and SPF-forward formulas designed to improve skin over time. The brand is PETA-certified cruelty-free and independently operated.",
  },
  {
    name: 'Kinship',
    blurb: "Kinship is EWG-verified, independently owned, and cruelty-free — with a brand DNA very close to the rest of the BunnyIndex catalog. Their formulas focus on actives and barrier support without the prestige markup.",
  },
  {
    name: 'Krave Beauty',
    blurb: "Founded by esthetician Liah Yoo, Krave Beauty is built on one principle: most people are over-cleansing their way to irritated skin. The brand is Korean-owned, cruelty-free, and refreshingly honest about what skincare can and cannot do.",
  },
  {
    name: 'Merit Beauty',
    blurb: "Merit was built around the idea that a great routine should take five minutes, not fifty. Their edit of essentials is deliberately minimal and formulated without common irritants. Independently owned, PETA-certified, and cruelty-free throughout.",
  },
  {
    name: 'Milk Makeup',
    blurb: "Milk Makeup launched out of New York's creative world. Their products are built for quick, expressive routines — multi-use formats designed for people who don't want a 12-step process. Vegan, cruelty-free, and free of parabens and fragrances.",
  },
  {
    name: 'Naturium',
    blurb: "Naturium was founded to make clinically effective actives — niacinamide, retinol, vitamin C — accessible without the prestige markup. Acquired by e.l.f. Beauty in 2023 and operating independently, it maintains cruelty-free and vegan standards.",
  },
  {
    name: 'OSEA Malibu',
    blurb: "OSEA has been a family-owned, cruelty-free brand since 1996 — built around the healing properties of seaweed. One of the original clean beauty independents, still independently run.",
  },
  {
    name: 'Pacifica',
    blurb: "Pacifica has been 100% vegan and cruelty-free since 1996 — long before either of those things were a marketing strategy. The brand covers skincare, makeup, and fragrance, all formulated without common irritants.",
  },
  {
    name: 'Peach & Lily',
    blurb: "Peach & Lily brings K-beauty formulation depth to the US market. Founded by licensed esthetician Alicia Yoon, the brand bridges the gap between clinical actives and the skin-first approach that defines the best of Korean beauty.",
  },
  {
    name: 'Saie',
    blurb: "Saie was built around the idea that makeup should do less to the skin while making it look more like itself. Their clean, lightweight formulas carry EWG VERIFIED status. Independently operated and fully cruelty-free.",
  },
  {
    name: 'Summer Fridays',
    blurb: "Summer Fridays launched from a beauty blog and grew into one of the most-followed skincare brands among Millennials and Gen Z. PETA-certified, independently owned, and built around effortless, skin-first routines.",
  },
  {
    name: 'Sunday Riley',
    blurb: "Sunday Riley is one of the most-trusted prestige skincare actives brands — independently owned, cruelty-free, and built around high-concentration formulas. Their Good Genes and Luna oil are perennial editor favorites.",
  },
  {
    name: 'Tata Harper',
    blurb: "Tata Harper is fully independent, farm-to-face, and cruelty-free — producing every product at their Vermont farm. The brand represents the top tier of natural luxury skincare with full supply chain transparency.",
  },
  {
    name: 'Thrive Causemetics',
    blurb: "Thrive Causemetics donates one product to a woman in need for every product sold. Beyond the giving model, they're fully vegan, ophthalmologist-tested, and formulate without parabens, sulfates, or synthetic fragrance.",
  },
  {
    name: 'Topicals',
    blurb: "Topicals is a Black-owned, dermatologist-developed brand built around chronic skin conditions and hyperpigmentation. Their formulas are clinical-grade, their community is one of the most engaged in skincare, and they donate to mental health organizations.",
  },
  {
    name: 'Tower 28',
    blurb: "Tower 28 was built specifically for sensitive and reactive skin — every product meets the National Eczema Association's standards, and they formulate without the 1,400-plus ingredients banned by the European Union.",
  },
  {
    name: 'True Botanicals',
    blurb: "True Botanicals holds MADE SAFE certification — one of the most rigorous clean beauty standards available. Independently owned, cruelty-free skincare at the prestige tier with full environmental responsibility.",
  },
  {
    name: 'Versed',
    blurb: "Versed is a climate-conscious skincare brand that publishes its environmental impact data and offsets its carbon footprint. Their formulas are dermatologist-developed, EWG-verified, and housed in packaging that's at least 50% recycled material.",
  },
  {
    name: 'e.l.f. Cosmetics',
    blurb: "e.l.f. started in 2004 with a mission to prove that quality didn't have to be expensive. They're now one of the few publicly traded brands that has remained 100% vegan and cruelty-free at scale, holding both PETA and Leaping Bunny certifications.",
  },
  {
    name: '100% Pure',
    blurb: "100% Pure has been a dedicated indie cruelty-free brand since 2005. Their full skincare range uses food-grade colorants, fruit-pigmented formulas, and genuinely natural ingredients across hundreds of products.",
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
