i},6mport { RAW_PRODUCTS } from '@/data/products';

export const normalizeType = (t) => {
  if (!t) return 'Other';
  const m = {
    'cleanser': 'Cleanser', 'cleansing balm': 'Cleansing Balm',
    'cleansing oil': 'Cleansing Oil', 'exfoliant': 'Exfoliant',
    'eye cream': 'Eye Cream', 'eye patch': 'Eye Cream',
    'face mask': 'Mask', 'face oil': 'Face Oil',
    'lip treatment': 'Lip Balm', 'mist': 'Mist',
    'moisturizer': 'Moisturizer', 'serum': 'Serum',
    'spot treatment': 'Spot Treatment', 'sunscreen': 'Sunscreen',
    'tinted spf moisturizer': 'Tinted Moisturizer', 'toner': 'Toner',
    'balm': 'Lip Balm',
  };
  return m[t.toLowerCase()] || t;
};

export const products = RAW_PRODUCTS.map((p) => ({ ...p, type: normalizeType(p.type) }));

export const BRAND_NAMES = [...new Set(products.map((p) => p.brand))].sort();

export const INGREDIENT_GROUPS = [
  { label: 'Hydrators',     items: ['Hyaluronic Acid', 'Ceramides', 'Squalane'] },
  { label: 'Exfoliants',    items: ['Glycolic Acid', 'Lactic Acid', 'Salicylic Acid', 'Azelaic Acid'] },
  { label: 'Brighteners',   items: ['Vitamin C', 'Niacinamide', 'Tranexamic Acid'] },
  { label: 'Treatments',    items: ['Retinol', 'Peptides', 'Bakuchiol', 'Caffeine', 'Vitamin E'] },
  { label: 'Sun Protection', items: ['SPF'] },
];

export const CONCERNS = [
  'Acne', 'Brightening', 'Dry Skin', 'Hyperpigmentation',
  'Oily Skin', 'Rosacea', 'Sensitive Skin', 'Sun Protection',
];

export const TYPES = [
  'Cleanser', 'Cleansing Balm', 'Exfoliant', 'Eye Cream',
  'Face Oil', 'Mask', 'Mist', 'Moisturizer', 'Serum',
  'Spot Treatment', 'Sunscreen', 'Tinted Moisturizer', 'Toner',
];

export const BRAND_PROFILES = [
  { name: 'Acure', blurb: 'Founded on the belief that personal care shouldn\'t come at the planet\'s expense, Acure is a B-Corp certified brand delivering affordable, plant-powered skincare. They\'re fully vegan, PETA-certified, and formulate without parabens, sulfates, or mineral oil — proof that budget-friendly doesn\'t have to mean corner-cutting.' },
  { name: 'Alpyn Beauty', blurb: 'Born in Jackson Hole, Wyoming, Alpyn Beauty harvests wild-harvested botanicals from the Rocky Mountains and blends them with clinically active ingredients. The brand is independently owned, PETA-certified cruelty-free, and built around the idea that the most powerful skincare ingredients are the ones that survive harsh environments.' },
  { name: 'Biossance', blurb: 'Biossance is a clean biotech brand best known for bringing sugarcane-derived squalane to the mainstream, offering a plant-based alternative to shark-derived squalane that\'s identical to skin\'s natural oils. Every formula is EWG-verified, PETA-certified, and made with sustainability baked into the science.' },
  { name: 'Byoma', blurb: 'Byoma launched with a singular focus: barrier repair. The brand\'s Tri-Ceramide Complex anchors every product, targeting skin that\'s sensitized, stripped, or just struggling. They\'re cruelty-free, fragrance-free across the line, and deliberately affordable — making barrier-first skincare accessible without the prestige markup.' },
  { name: 'Cocokind', blurb: 'Cocokind is a certified B-Corp and one of the rare brands that publishes its supply chain and carbon footprint data on product pages. Their approach is low-waste, high-transparency, and driven by skin-barrier philosophy — affordable enough for everyday use, honest enough to earn real trust.' },
  { name: 'Glossier', blurb: 'Glossier grew out of a beauty blog and became a brand that insists skin is something to work with, not cover up. Their lineup is deliberately minimal — focusing on skincare, light coverage, and the occasional cult lip product — and they\'ve remained independently cruelty-free throughout their growth.' },
  { name: 'Glow Recipe', blurb: 'Co-founded by two former L\'Oréal executives who left to build something better, Glow Recipe is a Korean beauty-inspired brand that leads with fruit-powered actives and joyful, candy-colored packaging. They\'re PETA-certified cruelty-free and vegan, and consistently deliver effective formulas that don\'t take themselves too seriously.' },
  { name: 'Good Molecules', blurb: 'Good Molecules was built to close the gap between clinical-grade ingredients and accessible pricing. Their serums, toners, and treatments pack activeslike niacinamide, glycolic acid, and tranexamic acid into no-frills packaging at prices that make it easy to use them consistently — which is the whole point.' },
  },  
  { name: 'Herbivore Botanicals', blurb: 'Herbivore was one of the early brands to prove that natural skincare could look like luxury. Their minimalist glass bottles and pastel tones became a category aesthetic, but the formulas have real substance — clean actives, no synthetic fragrance, and a commitment to botanical ingredients that\'s been there since day one.' },
  { name: 'Krave Beauty', blurb: 'Founded by esthetician Liah Yoo, Krave Beauty is built on one principle: most people are over-cleansing and over-exfoliating their way to irritated skin. Their tightly edited lineup encourages pausing on actives and restoring barrier function first. The brand is Korean-owned, cruelty-free, and refreshingly honest about what skincare can and can\'t do.' },
  { name: 'Milk Makeup', blurb: 'Milk Makeup launched out of New York\'s creative world and has always felt more like a downtown studio project than a beauty brand. Their products are built for quick, expressive routines — sticks, tubes, and multi-use formats designed for people who don\'t want a 12-step process. Vegan, cruelty-free, and free of parabens and fragrances.' },
  { name: 'Pacifica', blurb: 'Pacifica has been 100% vegan and cruelty-free since 1996 — long before either of those things were a marketing strategy. The brand covers skincare, makeup, and fragrance, all formulated without common irritants, and consistently lands at a price point that makes clean beauty genuinely available. One of the originals.' },
  { name: 'Saie', blurb: 'Saie was built around the idea that makeup should do less to the skin while making it look more like itself. Their clean, lightweight formulas emphasize skin health over coverage and carry EWG VERIFIED status, meaning every ingredient has passed independent safety review. Independently operated and fully cruelty-free.' },
  { name: 'Thrive Causemetics', blurb: 'Thrive Causemetics donates one product to a woman in need for every product sold, which is where the name comes from. Beyond the giving model, they\'re fully vegan, ophthalmologist-tested, and formulate without parabens, sulfates, or synthetic fragrance. Founded by Karissa Bodnar after losing her best friend to cancer at 24.' },
  { name: 'Tower 28', blurb: 'Tower 28 was built specifically for sensitive and reactive skin — every product meets the National Eczema Association\'s standards, and they formulate without the 1,400-plus ingredients banned by the European Union. The brand\'s sunny, California-casual aesthetic belies how seriously they take ingredient safety.' },
  { name: 'Versed', blurb: 'Versed is a climate-conscious skincare brand that publishes its environmental impact data and offsets its carbon footprint. Their formulas are dermatologist-developed, made with EWG-verified ingredients, and housed in packaging that\'s at least 50% recycled material. Cruelty-free, affordable, and unusually transparent for a mass-market brand.' },
  { name: 'e.l.f. Cosmetics', blurb: 'e.l.f. — eyes lips face — started in 2004 with a $1 price point and a mission to prove that quality didn\'t have to be expensive. They\'re now one of the few publicly traded brands that has remained 100% vegan and cruelty-free at scale, holding PETA and Leaping Bunny certifications while consistently delivering products that rival prestige counterparts.' },
  {
        name: 'ILIA Beauty',
              blurb: 'ILIA sits at the intersection of skincare and makeup, building tinted serums and SPF-forward formulas designed to improve skin over time rather than just cover it. The brand is PETA-certified cruelty-free and independently operated, with clean ingredients that pass EWG review.',
          },
  {
        name: 'Kinship',
        blurb: 'Kinship is EWG-verified, independently owned, and cruelty-free — with a brand DNA very close to the rest of the BunnyIndex catalog. Their formulas focus on actives and barrier support without the prestige markup, making clinical-quality skincare genuinely accessible.',
  },
        {
              name: 'Merit Beauty',
              blurb: 'Merit was built around the idea that a great routine should take five minutes, not fifty. Their edit of essentials — blushes, liners, glosses — is deliberately minimal and formulated without common irritants. Independently owned, PETA-certified, and cruelty-free throughout.',
        },
        {
              name: 'Naturium',
              blurb: 'Naturium was founded to make clinically effective actives — niacinamide, retinol, vitamin C — accessible without the prestige markup. Acquired by e.l.f. Beauty in 2023 and operating independently, it maintains cruelty-free and vegan standards while expanding one of the best-priced active serums on the market.',
        },
        {
              name: 'OSEA Malibu',
              blurb: 'OSEA has been a family-owned, cruelty-free brand since 1996 — built by a mother-daughter team in Malibu around the healing properties of seaweed. Long before "clean beauty" was a category, OSEA was making algae-based skincare that actually worked. One of the original independents, still independently run.',
        },
        {
              name: 'Peach & Lily',
              blurb: 'Peach & Lily brings K-beauty formulation depth to the US market, pairing Korean skincare philosophy with cruelty-free standards throughout. Founded by licensed esthetician Alicia Yoon, the brand bridges the gap between clinical actives and the skin-first approach that defines the best of Korean beauty.',
        },
        {
              name: 'Sunday Riley',
              blurb: 'Sunday Riley is one of the most-trusted prestige skincare actives brands — independently owned, cruelty-free, and built around high-concentration formulas that actually deliver. Their Good Genes lactic acid treatment and Luna retinol oil are perennial editor favorites for a reason.',
        },
        {
              name: 'Summer Fridays',
              blurb: 'Summer Fridays launched from a beauty blog and grew into one of the most-followed skincare brands among Millennials and Gen Z. Their Jet Lag Mask and Lip Butter Balm became cult products immediately — the brand is PETA-certified, independently owned, and built around effortless, skin-first routines.',
        },
        {
              name: 'Tata Harper',
              blurb: 'Tata Harper is fully independent, farm-to-face, and cruelty-free — producing every product at their Vermont farm and growing many of the botanical ingredients on-site. The brand represents the top tier of natural luxury skincare, with full supply chain transparency and formulas that earn the premium price.',
        },
        {
              name: 'Topicals',
              blurb: 'Topicals is a Black-owned, dermatologist-developed brand built around chronic skin conditions, hyperpigmentation, and the mental health connection to how skin looks and feels. Their formulas are clinical-grade, their community is one of the most engaged in skincare, and they donate a portion of every sale to mental health organizations.',
        },
        {
              name: 'True Botanicals',
              blurb: 'True Botanicals holds MADE SAFE certification — one of the most rigorous clean beauty standards available — and produces independently owned, cruelty-free skincare at the prestige tier. Their formulation philosophy prioritizes both efficacy and environmental responsibility, with packaging and supply chain to match.',
        },
        {
              name: '100% Pure',
              blurb: '100% Pure has been a dedicated indie cruelty-free brand since 2005 — one of the longest-standing clean beauty companies in the US. Their full skincare range uses food-grade colorants, fruit-pigmented formulas, and genuinely natural ingredients across hundreds of products.',
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
