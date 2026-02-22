import { useState, useMemo, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Holy Hydration! Face Cream",
    brand: "e.l.f. Cosmetics",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid", "Ceramides", "Peptides"],
    concerns: ["Dry Skin", "All Skin Types"],
    price: 12,
    priceRange: "$",
    oilFree: false,
    fragranceFree: true,
    vegan: true,
    rating: 4.7,
    reviews: 15200,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B08127SC4G?tag=bunnyindex-20",
    description: "Rich yet lightweight moisturizer packed with hyaluronic acid, peptides, and ceramides to deeply nourish and plump skin.",
  },
  {
    id: 2,
    name: "Power Grip Primer",
    brand: "e.l.f. Cosmetics",
    type: "Primer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid", "Niacinamide"],
    concerns: ["Oily Skin", "All Skin Types"],
    price: 10,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: true,
    rating: 4.6,
    reviews: 26500,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B09XMYFTB7?tag=bunnyindex-20",
    description: "Gel-based hydrating primer infused with hyaluronic acid that grips makeup for long-lasting wear while leaving skin soft and smooth.",
  },
  {
    id: 3,
    name: "Suntouchable! Whoa Glow SPF 30",
    brand: "e.l.f. Cosmetics",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid"],
    concerns: ["Sun Protection", "All Skin Types"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 5800,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B0BSP3N82M?tag=bunnyindex-20",
    description: "Lightweight SPF 30 sunscreen that doubles as a glowy makeup primer with zero white cast.",
  },
  {
    id: 4,
    name: "Halo Glow Liquid Filter",
    brand: "e.l.f. Cosmetics",
    type: "Serum",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.5,
    reviews: 21000,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B0B5MGBDHZ?tag=bunnyindex-20",
    description: "Complexion-boosting serum that blurs, brightens, and adds a luminous glow. Wear alone or mixed into foundation.",
  },
  {
    id: 5,
    name: "Keep Your Balance Toner",
    brand: "e.l.f. Cosmetics",
    type: "Toner",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid", "Witch Hazel"],
    concerns: ["Oily Skin", "Combination Skin"],
    price: 10,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: true,
    rating: 4.5,
    reviews: 8400,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B07X2M2TXN?tag=bunnyindex-20",
    description: "Gentle toner with hyaluronic acid and witch hazel to rebalance skin after cleansing. Oil-free and fragrance-free.",
  },
  {
    id: 6,
    name: "Holy Hydration! Daily Cleanser",
    brand: "e.l.f. Cosmetics",
    type: "Cleanser",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid", "Ceramides"],
    concerns: ["All Skin Types", "Sensitive Skin"],
    price: 10,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: true,
    rating: 4.6,
    reviews: 11200,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B08T7DY96H?tag=bunnyindex-20",
    description: "Gel-based foaming cleanser with hyaluronic acid and ceramides. Washes away oil and impurities without stripping.",
  },
  {
    id: 7,
    name: "Power Grip Primer + 4% Niacinamide",
    brand: "e.l.f. Cosmetics",
    type: "Primer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Niacinamide", "Hyaluronic Acid"],
    concerns: ["Oily Skin", "Large Pores"],
    price: 12,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: true,
    rating: 4.5,
    reviews: 9800,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B0BQQS5GBQ?tag=bunnyindex-20",
    description: "Grip primer with 4% niacinamide that visibly evens skin tone and minimizes pores while locking makeup in place.",
  },
  {
    id: 8,
    name: "Suntouchable! Invisible SPF 35",
    brand: "e.l.f. Cosmetics",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: [],
    concerns: ["Sun Protection", "Oily Skin"],
    price: 14,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: true,
    rating: 4.3,
    reviews: 4200,
    color: "#c9826b",
    buyLink: "https://www.amazon.com/dp/B0C7SFTTV3?tag=bunnyindex-20",
    description: "Gel SPF 35 that disappears on contact and doubles as a smoothing primer. Oil-free, fragrance-free, non-comedogenic.",
  },
  {
    id: 9,
    name: "Brightening Facial Scrub",
    brand: "Acure",
    type: "Exfoliant",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Glycolic Acid"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 10,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.5,
    reviews: 15100,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B003Z4OD24?tag=bunnyindex-20",
    description: "Gentle daily scrub with sea kelp, lemon peel, and French green clay that detoxifies pores and polishes skin to a radiant glow.",
  },
  {
    id: 10,
    name: "Brightening Cleansing Gel",
    brand: "Acure",
    type: "Cleanser",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 11,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 9800,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B00TXCGEQU?tag=bunnyindex-20",
    description: "Antioxidant-rich gel with pomegranate, blackberry, and acai that washes away impurities while brightening skin.",
  },
  {
    id: 11,
    name: "Brilliantly Brightening Glowing Serum",
    brand: "Acure",
    type: "Serum",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 3200,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B0040ZHUH2?tag=bunnyindex-20",
    description: "Vitamin C serum with argan oil and cranberry seed oil that revitalizes dull skin and delivers a visibly radiant glow.",
  },
  {
    id: 12,
    name: "Seriously Soothing Cleansing Cream",
    brand: "Acure",
    type: "Cleanser",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Chamomile"],
    concerns: ["Sensitive Skin", "Dry Skin", "Rosacea"],
    price: 11,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 5600,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B00B4C35IW?tag=bunnyindex-20",
    description: "Gentle cream cleanser with peony, chamomile, and argan oil to soothe and hydrate dry and sensitive skin.",
  },
  {
    id: 13,
    name: "Ultra Hydrating 12 Hour Facial Cream",
    brand: "Acure",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid"],
    concerns: ["Dry Skin", "All Skin Types"],
    price: 20,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 2800,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B082G1C4BZ?tag=bunnyindex-20",
    description: "Adaptogen-powered 12-hour moisturizer with ashwagandha and holy basil for an all-day hydration boost.",
  },
  {
    id: 14,
    name: "Seriously Soothing Cloud Cream",
    brand: "Acure",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid"],
    concerns: ["Sensitive Skin", "Dry Skin", "Rosacea"],
    price: 18,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 4100,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B077X5NFY9?tag=bunnyindex-20",
    description: "Whipped cloud-light moisturizer with argan extract and hyaluronic acid for normal to dry, sensitive skin.",
  },
  {
    id: 15,
    name: "Radically Rejuvenating Eye Cream",
    brand: "Acure",
    type: "Eye Cream",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C"],
    concerns: ["Hyperpigmentation", "Dry Skin"],
    price: 20,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 5200,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B003Z4MCJA?tag=bunnyindex-20",
    description: "Anti-aging eye cream with CoQ10 and edelweiss that targets dark circles, puffiness, and fine lines.",
  },
  {
    id: 16,
    name: "Radically Rejuvenating Whipped Night Cream",
    brand: "Acure",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C"],
    concerns: ["Dry Skin", "Hyperpigmentation"],
    price: 18,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 3100,
    color: "#7ab87a",
    buyLink: "https://www.amazon.com/dp/B07NJ4H5S3?tag=bunnyindex-20",
    description: "Overnight recovery cream with vitamin C, peptides, and ashwagandha that renews skin while you sleep.",
  },
  {
    id: 17,
    name: "Coconut Cream to Foam Face Wash",
    brand: "Pacifica",
    type: "Cleanser",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Coconut Water"],
    concerns: ["All Skin Types"],
    price: 10,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.5,
    reviews: 8700,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B073Z33B3Z?tag=bunnyindex-20",
    description: "Sulfate-free gel with coconut water and vitamin E that transforms into a luxurious foam, leaving skin soft and balanced.",
  },
  {
    id: 18,
    name: "Glow Baby Vitamin C Booster Serum",
    brand: "Pacifica",
    type: "Serum",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C", "Glycolic Acid"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 16,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 14600,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B07VRTP6SY?tag=bunnyindex-20",
    description: "Ultra-concentrated vitamin C serum with AHA and ferulic acid that visibly brightens dark spots and boosts radiance.",
  },
  {
    id: 19,
    name: "Vegan Collagen Complex Face Serum",
    brand: "Pacifica",
    type: "Serum",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Niacinamide", "Ceramides"],
    concerns: ["Dry Skin", "All Skin Types"],
    price: 18,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 5200,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B095335RGC?tag=bunnyindex-20",
    description: "Plant-powered collagen-boosting serum with ceramides and niacinamide that plumps, firms, and hydrates.",
  },
  {
    id: 20,
    name: "Water Rehab Cream",
    brand: "Pacifica",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Hyaluronic Acid"],
    concerns: ["Oily Skin", "Combination Skin", "Sensitive Skin"],
    price: 14,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.4,
    reviews: 5900,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B01MTFE7LB?tag=bunnyindex-20",
    description: "Oil-free probiotic moisturizer with coconut water that restores skin's moisture balance for a refreshed, healthy glow.",
  },
  {
    id: 21,
    name: "Glow Baby Vitamin C Brightening Moisturizer",
    brand: "Pacifica",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Vitamin C", "Hyaluronic Acid"],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 16,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 3400,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B08TT1FTK8?tag=bunnyindex-20",
    description: "Daily vitamin C moisturizer with AHA blend and hyaluronic acid that brightens dull skin with every use.",
  },
  {
    id: 22,
    name: "Pore Warrior Niacinamide Serum",
    brand: "Pacifica",
    type: "Serum",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Niacinamide", "Salicylic Acid", "Hyaluronic Acid"],
    concerns: ["Acne", "Oily Skin", "Large Pores"],
    price: 14,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.2,
    reviews: 2800,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B07VPS2K19?tag=bunnyindex-20",
    description: "Niacinamide serum with salicylic acid that tightens pores, controls oil, and clears blemishes for a smoother complexion.",
  },
  {
    id: 23,
    name: "Glow Baby Resurfacing & Brightening Toner",
    brand: "Pacifica",
    type: "Toner",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Glycolic Acid", "Vitamin C"],
    concerns: ["Hyperpigmentation", "Large Pores"],
    price: 15,
    priceRange: "$",
    oilFree: true,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 3100,
    color: "#7a9eb5",
    buyLink: "https://www.amazon.com/dp/B09RRXRFVH?tag=bunnyindex-20",
    description: "Exfoliating toner with glycolic acid and vitamin C that smooths, brightens, and visibly minimizes pores over time.",
  },
  {
    id: 24,
    name: "Unseen Sunscreen SPF 40",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: [],
    concerns: ["Sun Protection", "Oily Skin", "All Skin Types"],
    price: 36,
    priceRange: "$$",
    oilFree: true,
    fragranceFree: true,
    vegan: false,
    rating: 4.6,
    reviews: 17200,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B08CFVM1TT?tag=bunnyindex-20",
    description: "Invisible primer-finish SPF 40 with no white cast and a velvety base for flawless makeup. Oil-free and fragrance-free.",
  },
  {
    id: 25,
    name: "Glowscreen SPF 40",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Hyaluronic Acid", "Niacinamide"],
    concerns: ["Sun Protection", "Hyperpigmentation", "Dull Skin"],
    price: 36,
    priceRange: "$$",
    oilFree: false,
    fragranceFree: true,
    vegan: false,
    rating: 4.5,
    reviews: 10800,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B088ZRZ668?tag=bunnyindex-20",
    description: "Hydrating SPF 40 that delivers a luminous lit-from-within glow with hyaluronic acid and niacinamide.",
  },
  {
    id: 26,
    name: "PLAY Everyday Lotion SPF 50",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: [],
    concerns: ["Sun Protection", "All Skin Types"],
    price: 22,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: false,
    rating: 4.7,
    reviews: 12400,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B087H8W6Y2?tag=bunnyindex-20",
    description: "Water-resistant SPF 50 lotion that absorbs fast with no greasy residue. Great for active outdoor use and daily wear.",
  },
  {
    id: 27,
    name: "PLAY 100% Mineral Lotion SPF 50",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Zinc Oxide"],
    concerns: ["Sun Protection", "Sensitive Skin"],
    price: 22,
    priceRange: "$",
    oilFree: true,
    fragranceFree: true,
    vegan: false,
    rating: 4.5,
    reviews: 5100,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B09RNDPKQF?tag=bunnyindex-20",
    description: "Non-nano zinc oxide SPF 50 — reef-safe, water-resistant, lightweight with no white cast. Ideal for sensitive skin.",
  },
  {
    id: 28,
    name: "Superscreen Daily Moisturizer SPF 40",
    brand: "Supergoop",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Hyaluronic Acid"],
    concerns: ["Sun Protection", "Dry Skin"],
    price: 45,
    priceRange: "$$",
    oilFree: false,
    fragranceFree: true,
    vegan: false,
    rating: 4.4,
    reviews: 4800,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B07VR6BBY8?tag=bunnyindex-20",
    description: "Daily moisturizer + SPF 40 in one, powered by hyaluronic acid for all-day hydration and sun protection.",
  },
  {
    id: 29,
    name: "(Re)setting 100% Mineral Powder SPF 35",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Zinc Oxide"],
    concerns: ["Sun Protection", "Oily Skin"],
    price: 35,
    priceRange: "$$",
    oilFree: true,
    fragranceFree: true,
    vegan: false,
    rating: 4.4,
    reviews: 6200,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B07VLNVB69?tag=bunnyindex-20",
    description: "Translucent mineral setting powder SPF 35 — reapply sun protection over makeup without disturbing it.",
  },
  {
    id: 30,
    name: "Mineral Mattescreen SPF 40",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Zinc Oxide"],
    concerns: ["Sun Protection", "Oily Skin"],
    price: 38,
    priceRange: "$$",
    oilFree: true,
    fragranceFree: true,
    vegan: false,
    rating: 4.5,
    reviews: 4600,
    color: "#e8a87c",
    buyLink: "https://www.amazon.com/dp/B09CJPRPFD?tag=bunnyindex-20",
    description: "100% mineral SPF 40 with a true matte finish that controls oil all day. Doubles as a pore-minimizing primer.",
  },
  {
    id: 31,
    name: "Murumuru Butter Bronzer",
    brand: "Physicians Formula",
    type: "Bronzer",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Sensitive Skin"],
    price: 15,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.6,
    reviews: 21400,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B018B8Q5Z6?tag=bunnyindex-20",
    description: "Iconic cream-to-powder bronzer with murumuru, cupuaçu, and tucumã butters for a natural sun-kissed glow. Hypoallergenic.",
  },
  {
    id: 32,
    name: "Murumuru Butter Blush — Natural Glow",
    brand: "Physicians Formula",
    type: "Blush",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Sensitive Skin"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.5,
    reviews: 8700,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B01N9LBVPF?tag=bunnyindex-20",
    description: "Ultra-creamy cream-to-powder blush with a tropical butter complex that adds a lit-from-within glow.",
  },
  {
    id: 33,
    name: "Happy Booster Glow & Mood Boosting Blush",
    brand: "Physicians Formula",
    type: "Blush",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Sensitive Skin"],
    price: 12,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: false,
    rating: 4.4,
    reviews: 2188,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B004HYNCA0?tag=bunnyindex-20",
    description: "Multi-reflective blush with mood-boosting Euphoryl blend and pearls that highlight and define for a radiant finish.",
  },
  {
    id: 34,
    name: "Butter Glow Bronzing Serum",
    brand: "Physicians Formula",
    type: "Serum",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Hyperpigmentation", "Dull Skin"],
    price: 20,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: false,
    rating: 4.4,
    reviews: 3200,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B0CQFNJLM2?tag=bunnyindex-20",
    description: "Silky bronzing serum with an illuminating butter complex for a buildable sun-kissed glow with a skin-like finish.",
  },
  {
    id: 35,
    name: "Organic Wear CC Cream SPF 20",
    brand: "Physicians Formula",
    type: "CC Cream",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Sun Protection", "Sensitive Skin"],
    price: 13,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.3,
    reviews: 3900,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B01HPIVW9C?tag=bunnyindex-20",
    description: "Full-coverage CC cream with SPF 20 from 100% natural origin ingredients. Corrects, conceals, and protects.",
  },
  {
    id: 36,
    name: "Murumuru Butter Blush — Beachy Peach",
    brand: "Physicians Formula",
    type: "Blush",
    certifications: ["Leaping Bunny"],
    ingredients: [],
    concerns: ["Sensitive Skin"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    fragranceFree: false,
    vegan: true,
    rating: 4.5,
    reviews: 5400,
    color: "#b5a0c8",
    buyLink: "https://www.amazon.com/dp/B085P8VLVY?tag=bunnyindex-20",
    description: "Warm peachy cream-to-powder blush with murumuru butter that softens skin while imparting a natural tropical glow.",
  },
];

const allConcerns = [...new Set(products.flatMap((p) => p.concerns))].sort();
const allTypes = [...new Set(products.map((p) => p.type))].sort();
const allCerts = ["Leaping Bunny", "PETA", "Not sold in China"];

const certMeta = {
  "Leaping Bunny": { icon: "🐇", color: "#c9826b" },
  "PETA": { icon: "✦", color: "#8fac8f" },
  "Not sold in China": { icon: "⊘", color: "#7a9eb5" },
};

const quickSearches = [
  "Salicylic Acid", "Seborrheic Dermatitis", "Oil-free SPF",
  "Ceramides", "Rosacea", "Eczema"
];

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [oilFreeOnly, setOilFreeOnly] = useState(false);
  const [fragranceFreeOnly, setFragranceFreeOnly] = useState(false);
  const [veganOnly, setVeganOnly] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const toggle = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);

  const activeFilterCount = selectedConcerns.length + selectedTypes.length + selectedCerts.length + (oilFreeOnly ? 1 : 0) + (fragranceFreeOnly ? 1 : 0) + (veganOnly ? 1 : 0) + (priceFilter !== "all" ? 1 : 0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.brand.toLowerCase().includes(search.toLowerCase()) &&
        !p.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase())) &&
        !p.concerns.some(c => c.toLowerCase().includes(search.toLowerCase())) &&
        !p.type.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedConcerns.length && !selectedConcerns.some(c => p.concerns.includes(c))) return false;
      if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;
      if (selectedCerts.length && !selectedCerts.every(c => p.certifications.includes(c))) return false;
      if (oilFreeOnly && !p.oilFree) return false;
      if (fragranceFreeOnly && !p.fragranceFree) return false;
      if (veganOnly && !p.vegan) return false;
      if (priceFilter === "$" && p.priceRange !== "$") return false;
      if (priceFilter === "$$" && p.priceRange !== "$$") return false;
      return true;
    });
  }, [search, selectedConcerns, selectedTypes, selectedCerts, oilFreeOnly, veganOnly, priceFilter]);

  const clearAll = () => {
    setSelectedConcerns([]); setSelectedTypes([]); setSelectedCerts([]);
    setOilFreeOnly(false); setFragranceFreeOnly(false); setVeganOnly(false); setPriceFilter("all"); setSearch("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", background: "#fdf8f2" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --terra: #b85c38;
          --terra-light: #e8896a;
          --terra-pale: #f5e6df;
          --cream: #fdf8f2;
          --ink: #1c1410;
          --ink-soft: #4a3f38;
          --sage: #6b8f71;
          --sage-pale: #e8f0e9;
          --warm-grey: #9e8e84;
          --border: #e8ddd4;
        }

        .display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .body { font-family: 'Outfit', sans-serif; }

        .card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-accent, var(--terra));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(184,92,56,0.12); border-color: var(--terra-light); }
        .card:hover::before { transform: scaleX(1); }

        .chip {
          display: inline-flex; align-items: center;
          padding: 3px 10px; border-radius: 2px;
          font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 0.04em;
        }

        .filter-check {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 0; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-size: 13px;
          color: var(--ink-soft); transition: color 0.15s;
        }
        .filter-check:hover { color: var(--terra); }

        .custom-check {
          width: 16px; height: 16px; border: 1.5px solid var(--border);
          border-radius: 2px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.15s; background: #fff;
        }
        .custom-check.active { background: var(--terra); border-color: var(--terra); }

        .search-wrap { position: relative; }
        .search-input {
          width: 100%; padding: 16px 24px 16px 52px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 3px;
          font-family: 'Outfit', sans-serif; font-size: 16px;
          background: rgba(255,255,255,0.15);
          color: #fff; outline: none;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
        }
        .search-input::placeholder { color: rgba(255,255,255,0.5); }
        .search-input:focus { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.22); }

        .pill-filter {
          padding: 6px 16px; border-radius: 2px;
          font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500;
          cursor: pointer; border: 1.5px solid; transition: all 0.15s;
          letter-spacing: 0.05em; text-transform: uppercase;
        }
        .pill-on { background: var(--terra); color: #fff; border-color: var(--terra); }
        .pill-off { background: transparent; color: var(--ink-soft); border-color: var(--border); }
        .pill-off:hover { border-color: var(--terra); color: var(--terra); }

        .toggle-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 0; border-bottom: 1px solid var(--border);
          cursor: pointer;
        }
        .toggle-track {
          width: 40px; height: 22px; border-radius: 11px;
          position: relative; transition: background 0.2s; flex-shrink: 0;
        }
        .toggle-thumb {
          position: absolute; top: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: #fff;
          transition: left 0.2s; box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }

        .fade-in {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-in.show { opacity: 1; transform: translateY(0); }

        .modal-bg {
          position: fixed; inset: 0; background: rgba(28,20,16,0.6);
          z-index: 200; display: flex; align-items: center; justify-content: center;
          padding: 20px; backdrop-filter: blur(4px);
        }
        .modal {
          background: var(--cream); border-radius: 4px;
          max-width: 580px; width: 100%; max-height: 90vh;
          overflow-y: auto; border: 1px solid var(--border);
        }

        .section-title {
          font-family: 'Outfit', sans-serif; font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--warm-grey); font-weight: 600; margin-bottom: 12px;
        }

        .star { color: #c9826b; }

        .mobile-filter-btn {
          display: none;
          position: fixed; bottom: 24px; right: 24px;
          z-index: 50; background: var(--terra); color: #fff;
          border: none; border-radius: 3px; padding: 14px 22px;
          font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 14px;
          cursor: pointer; box-shadow: 0 8px 24px rgba(184,92,56,0.35);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .sidebar { display: none !important; }
          .mobile-filter-btn { display: block; }
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--terra-pale); }
        ::-webkit-scrollbar-thumb { background: var(--terra-light); border-radius: 3px; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#f5ede6", borderBottom: "1px solid #e8d5c8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <span className="display" style={{ fontSize: 24, fontWeight: 600, color: "#1c1410", letterSpacing: "-0.02em" }}>bunny</span>
            <span className="display" style={{ fontSize: 24, fontWeight: 400, color: "#b85c38", fontStyle: "italic", letterSpacing: "-0.02em" }}>index</span>
          </div>
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Directory", "About", "Submit a Brand"].map((item, i) => (
              <a key={item} href="#" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: i === 0 ? "#b85c38" : "#7a5c4a", textDecoration: "none", fontWeight: 500, letterSpacing: "0.04em", transition: "color 0.15s" }}
                onMouseEnter={e => e.target.style.color = "#b85c38"}
                onMouseLeave={e => e.target.style.color = i === 0 ? "#b85c38" : "#7a5c4a"}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1c1410 0%, #2e1f17 50%, #3d2518 100%)", padding: "64px 24px 72px", position: "relative", overflow: "hidden" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(201,130,107,0.12)" }} />
        <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(201,130,107,0.08)" }} />
        <div style={{ position: "absolute", bottom: -80, left: "40%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,130,107,0.06) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className={`fade-in ${mounted ? "show" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <p className="body" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9826b", marginBottom: 16, fontWeight: 500 }}>
              ✦ Cruelty-Free · Ingredient-First Directory
            </p>
          </div>
          <div className={`fade-in ${mounted ? "show" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <h1 className="display" style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 600, color: "#fff", lineHeight: 1.05, marginBottom: 8, letterSpacing: "-0.02em" }}>
              The cruelty-free<br /><em style={{ color: "#c9826b" }}>ingredient directory.</em>
            </h1>
          </div>
          <div className={`fade-in ${mounted ? "show" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <p className="body" style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 500, marginBottom: 36, lineHeight: 1.7, fontWeight: 300 }}>
              Filter by ingredient, skin condition, or concern. Every product verified cruelty-free — no greenwashing, no guesswork.
            </p>
          </div>
          <div className={`fade-in ${mounted ? "show" : ""}`} style={{ transitionDelay: "0.4s", maxWidth: 580 }}>
            <div className="search-wrap">
              <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 20, opacity: 0.4 }}>⌕</span>
              <input
                className="search-input"
                placeholder="Try 'salicylic acid', 'seborrheic dermatitis', 'oil-free SPF'…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {quickSearches.map(s => (
                <button key={s} onClick={() => setSearch(s === search ? "" : s)}
                  style={{
                    background: search === s ? "rgba(201,130,107,0.3)" : "rgba(255,255,255,0.07)",
                    border: `1px solid ${search === s ? "rgba(201,130,107,0.6)" : "rgba(255,255,255,0.12)"}`,
                    color: search === s ? "#e8896a" : "rgba(255,255,255,0.5)",
                    borderRadius: "2px", padding: "5px 14px",
                    fontFamily: "'Outfit', sans-serif", fontSize: 12, cursor: "pointer",
                    transition: "all 0.15s", fontWeight: 400
                  }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 32, alignItems: "center" }}>
          {[["9", "Products"], ["3", "Certifications checked"], ["100%", "Cruelty-free verified"]].map(([num, label]) => (
            <div key={label} style={{ display: "flex", align: "center", gap: 8 }}>
              <span className="display" style={{ fontSize: 18, fontWeight: 700, color: "#b85c38" }}>{num}</span>
              <span className="body" style={{ fontSize: 12, color: "var(--warm-grey)", alignSelf: "center", fontWeight: 400 }}>{label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "var(--warm-grey)" }}>
            Showing <strong style={{ color: "var(--ink)" }}>{filtered.length}</strong> of {products.length} products
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px", display: "flex", gap: 32, alignItems: "flex-start" }}>

        {/* Sidebar */}
        <aside className="sidebar" style={{ width: 230, flexShrink: 0, position: "sticky", top: 20 }}>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "4px", padding: "24px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span className="display" style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Filter</span>
              {activeFilterCount > 0 && (
                <button onClick={clearAll} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#b85c38", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontWeight: 500 }}>
                  Clear {activeFilterCount}
                </button>
              )}
            </div>

            {/* Product Type */}
            <div style={{ marginBottom: 24 }}>
              <p className="section-title">Product Type</p>
              {allTypes.map(type => (
                <label key={type} className="filter-check" onClick={() => toggle(selectedTypes, setSelectedTypes, type)}>
                  <div className={`custom-check ${selectedTypes.includes(type) ? "active" : ""}`}>
                    {selectedTypes.includes(type) && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  {type}
                </label>
              ))}
            </div>

            {/* Skin Concern */}
            <div style={{ marginBottom: 24 }}>
              <p className="section-title">Skin Concern</p>
              {allConcerns.slice(0, 9).map(c => (
                <label key={c} className="filter-check" onClick={() => toggle(selectedConcerns, setSelectedConcerns, c)}>
                  <div className={`custom-check ${selectedConcerns.includes(c) ? "active" : ""}`}>
                    {selectedConcerns.includes(c) && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  {c}
                </label>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: 24 }}>
              <p className="section-title">Certification</p>
              {allCerts.map(cert => (
                <label key={cert} className="filter-check" onClick={() => toggle(selectedCerts, setSelectedCerts, cert)}>
                  <div className={`custom-check ${selectedCerts.includes(cert) ? "active" : ""}`}>
                    {selectedCerts.includes(cert) && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span>{certMeta[cert].icon} {cert}</span>
                </label>
              ))}
            </div>

            {/* Price */}
            <div style={{ marginBottom: 24 }}>
              <p className="section-title">Price</p>
              <div style={{ display: "flex", gap: 6 }}>
                {["all", "$", "$$"].map(p => (
                  <button key={p} onClick={() => setPriceFilter(p)}
                    className={`pill-filter ${priceFilter === p ? "pill-on" : "pill-off"}`}
                    style={{ flex: 1 }}>
                    {p === "all" ? "All" : p}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div>
              {[["Oil-free only", oilFreeOnly, setOilFreeOnly], ["Vegan only", veganOnly, setVeganOnly]].map(([label, val, setter]) => (
                <div key={label} className="toggle-row" onClick={() => setter(!val)}>
                  <span className="body" style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 400 }}>{label}</span>
                  <div className="toggle-track" style={{ background: val ? "#b85c38" : "var(--border)" }}>
                    <div className="toggle-thumb" style={{ left: val ? 21 : 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <main style={{ flex: 1 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <p className="display" style={{ fontSize: 32, color: "var(--border)", marginBottom: 12 }}>No results</p>
              <p className="body" style={{ fontSize: 14, color: "var(--warm-grey)" }}>Try broadening your search or clearing some filters.</p>
              <button onClick={clearAll} style={{ marginTop: 16, padding: "10px 24px", background: "var(--terra)", color: "#fff", border: "none", borderRadius: "2px", fontFamily: "'Outfit', sans-serif", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>Clear filters</button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
              {filtered.map((p, i) => (
                <div key={p.id} className={`card fade-in ${mounted ? "show" : ""}`}
                  style={{ "--card-accent": p.color, transitionDelay: `${i * 0.05}s`, padding: "24px" }}
                  onClick={() => setSelectedProduct(p)}>

                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {p.certifications.map(c => (
                        <span key={c} className="chip" style={{ background: certMeta[c].color + "14", color: certMeta[c].color }}>
                          {certMeta[c].icon}
                        </span>
                      ))}
                    </div>
                    <span className="body" style={{ fontSize: 11, color: "var(--warm-grey)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.type}</span>
                  </div>

                  {/* Color block accent */}
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: p.color + "22", border: `2px solid ${p.color}40`, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: p.color }} />
                  </div>

                  <p className="body" style={{ fontSize: 11, color: "var(--warm-grey)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, fontWeight: 500 }}>{p.brand}</p>
                  <h3 className="display" style={{ fontSize: 19, fontWeight: 600, color: "var(--ink)", marginBottom: 12, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{p.name}</h3>

                  {/* Concerns */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
                    {p.concerns.slice(0, 3).map(c => (
                      <span key={c} className="chip" style={{ background: "var(--sage-pale)", color: "var(--sage)", fontSize: 10 }}>
                        {c}
                      </span>
                    ))}
                    {p.concerns.length > 3 && (
                      <span className="chip" style={{ background: "#f5f0eb", color: "var(--warm-grey)", fontSize: 10 }}>+{p.concerns.length - 3}</span>
                    )}
                  </div>

                  {/* Ingredients */}
                  <p className="body" style={{ fontSize: 11, color: "var(--warm-grey)", marginBottom: 16, lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 500, color: "var(--ink-soft)" }}>Key: </span>
                    {p.ingredients.slice(0, 2).join(", ")}
                  </p>

                  {/* Bottom */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                    <div>
                      <span className="display" style={{ fontSize: 22, fontWeight: 700, color: "var(--terra)" }}>${p.price}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                        <span className="star" style={{ fontSize: 10 }}>★★★★★</span>
                        <span className="body" style={{ fontSize: 10, color: "var(--warm-grey)" }}>{p.rating} · {(p.reviews / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      {p.oilFree && <span className="chip" style={{ background: "#e8f2f8", color: "#4a7fa0", fontSize: 10, fontWeight: 600 }}>Oil-free</span>}
                      {p.vegan && <span className="chip" style={{ background: "var(--sage-pale)", color: "var(--sage)", fontSize: 10, fontWeight: 600 }}>Vegan</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 24px", marginTop: 40, background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 1, marginBottom: 6 }}>
              <span className="display" style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>bunny</span>
              <span className="display" style={{ fontSize: 18, fontWeight: 400, color: "var(--terra)", fontStyle: "italic" }}>index</span>
            </div>
            <p className="body" style={{ fontSize: 12, color: "var(--warm-grey)" }}>The cruelty-free ingredient directory</p>
          </div>
          <p className="body" style={{ fontSize: 11, color: "var(--warm-grey)" }}>© 2026 BunnyIndex · Made with purpose</p>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-bg" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            {/* Modal header accent */}
            <div style={{ height: 4, background: selectedProduct.color, borderRadius: "4px 4px 0 0" }} />
            <div style={{ padding: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <p className="body" style={{ fontSize: 11, color: "var(--warm-grey)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, fontWeight: 500 }}>{selectedProduct.brand} · {selectedProduct.type}</p>
                  <h2 className="display" style={{ fontSize: 28, fontWeight: 600, color: "var(--ink)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>{selectedProduct.name}</h2>
                </div>
                <button onClick={() => setSelectedProduct(null)}
                  style={{ background: "var(--terra-pale)", border: "none", borderRadius: "2px", width: 32, height: 32, cursor: "pointer", fontSize: 14, color: "var(--terra)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700 }}>
                  ✕
                </button>
              </div>

              {/* Certifications */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {selectedProduct.certifications.map(c => (
                  <span key={c} className="chip" style={{ background: certMeta[c].color + "14", color: certMeta[c].color, fontSize: 12, padding: "5px 14px" }}>
                    {certMeta[c].icon} {c}
                  </span>
                ))}
                {selectedProduct.oilFree && <span className="chip" style={{ background: "#e8f2f8", color: "#4a7fa0", fontSize: 12, padding: "5px 14px" }}>Oil-free</span>}
                {selectedProduct.vegan && <span className="chip" style={{ background: "var(--sage-pale)", color: "var(--sage)", fontSize: 12, padding: "5px 14px" }}>🌱 Vegan</span>}
              </div>

              {/* Ingredients */}
              <div style={{ marginBottom: 20 }}>
                <p className="section-title">Key Ingredients</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {selectedProduct.ingredients.map(i => (
                    <span key={i} className="chip" style={{ background: "#f5ede6", color: "#7a4f38", fontSize: 12, padding: "5px 14px", fontWeight: 500 }}>{i}</span>
                  ))}
                </div>
              </div>

              {/* Concerns */}
              <div style={{ marginBottom: 24 }}>
                <p className="section-title">Good For</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {selectedProduct.concerns.map(c => (
                    <span key={c} className="chip" style={{ background: "var(--sage-pale)", color: "var(--sage)", fontSize: 12, padding: "5px 14px" }}>✓ {c}</span>
                  ))}
                </div>
              </div>

              {/* Buy row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <div>
                  <div className="display" style={{ fontSize: 34, fontWeight: 700, color: "var(--terra)" }}>${selectedProduct.price}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                    <span className="star">★★★★★</span>
                    <span className="body" style={{ fontSize: 12, color: "var(--warm-grey)" }}>{selectedProduct.rating} · {selectedProduct.reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
                <a href={selectedProduct.buyLink} style={{ textDecoration: "none" }}>
                  <button style={{
                    background: "var(--terra)", color: "#fff", border: "none",
                    padding: "14px 32px", borderRadius: "2px", cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15,
                    letterSpacing: "0.04em", transition: "background 0.15s"
                  }}
                    onMouseEnter={e => e.target.style.background = "#9e4a2a"}
                    onMouseLeave={e => e.target.style.background = "var(--terra)"}>
                    Buy now →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
