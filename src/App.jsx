import { useState, useMemo, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    type: "Exfoliant",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Salicylic Acid 2%", "Green Tea Extract", "Methylpropanediol"],
    concerns: ["Acne", "Seborrheic Dermatitis", "Oily Skin", "Blackheads", "Large Pores"],
    price: 34,
    priceRange: "$$",
    oilFree: true,
    vegan: true,
    rating: 4.8,
    reviews: 12400,
    color: "#c9826b",
    buyLink: "#",
  },
  {
    id: 2,
    name: "UV Clear SPF 46",
    brand: "EltaMD",
    type: "Sunscreen",
    certifications: ["PETA"],
    ingredients: ["Zinc Oxide 9%", "Niacinamide", "Hyaluronic Acid", "Lactic Acid"],
    concerns: ["Acne", "Rosacea", "Sensitive Skin", "Sun Protection"],
    price: 39,
    priceRange: "$$",
    oilFree: true,
    vegan: false,
    rating: 4.9,
    reviews: 8900,
    color: "#d4a96a",
    buyLink: "#",
  },
  {
    id: 3,
    name: "Moisturizing Cream",
    brand: "CeraVe",
    type: "Moisturizer",
    certifications: ["Leaping Bunny", "PETA"],
    ingredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide", "Petrolatum"],
    concerns: ["Dry Skin", "Eczema", "Sensitive Skin", "Barrier Repair"],
    price: 19,
    priceRange: "$",
    oilFree: false,
    vegan: true,
    rating: 4.7,
    reviews: 45000,
    color: "#8fac8f",
    buyLink: "#",
  },
  {
    id: 4,
    name: "Toleriane Double Repair",
    brand: "La Roche-Posay",
    type: "Moisturizer",
    certifications: ["Leaping Bunny"],
    ingredients: ["Ceramides", "Niacinamide", "Prebiotic Thermal Water", "Glycerin"],
    concerns: ["Sensitive Skin", "Dry Skin", "Barrier Repair", "Rosacea"],
    price: 23,
    priceRange: "$",
    oilFree: true,
    vegan: false,
    rating: 4.6,
    reviews: 22000,
    color: "#7a9eb5",
    buyLink: "#",
  },
  {
    id: 5,
    name: "Hydro Boost Water Gel",
    brand: "Neutrogena",
    type: "Moisturizer",
    certifications: ["PETA"],
    ingredients: ["Hyaluronic Acid", "Dimethicone", "Glycerin"],
    concerns: ["Dehydrated Skin", "Oily Skin", "Combination Skin"],
    price: 22,
    priceRange: "$",
    oilFree: true,
    vegan: true,
    rating: 4.5,
    reviews: 31000,
    color: "#6baed6",
    buyLink: "#",
  },
  {
    id: 6,
    name: "Special Cleansing Gel",
    brand: "Dermalogica",
    type: "Cleanser",
    certifications: ["Leaping Bunny", "Not sold in China"],
    ingredients: ["Lavender", "Balm Mint", "Quillaja Saponaria", "Watercress"],
    concerns: ["All Skin Types", "Gentle Cleansing", "Sensitive Skin"],
    price: 42,
    priceRange: "$$",
    oilFree: true,
    vegan: true,
    rating: 4.7,
    reviews: 7200,
    color: "#b5956e",
    buyLink: "#",
  },
  {
    id: 7,
    name: "Salicylic Acid 2% Masque",
    brand: "The Ordinary",
    type: "Mask",
    certifications: ["PETA", "Not sold in China"],
    ingredients: ["Salicylic Acid 2%", "Charcoal", "Amazonian White Clay", "Squalane"],
    concerns: ["Acne", "Blackheads", "Seborrheic Dermatitis", "Oily Skin"],
    price: 12,
    priceRange: "$",
    oilFree: true,
    vegan: true,
    rating: 4.4,
    reviews: 18000,
    color: "#555",
    buyLink: "#",
  },
  {
    id: 8,
    name: "Unseen Sunscreen SPF 40",
    brand: "Supergoop",
    type: "Sunscreen",
    certifications: ["Leaping Bunny", "PETA", "Not sold in China"],
    ingredients: ["Red Algae", "Frankincense", "Meadowfoam Seed Oil", "Vitamin E"],
    concerns: ["Sun Protection", "Oily Skin", "All Skin Types", "Primer"],
    price: 36,
    priceRange: "$$",
    oilFree: true,
    vegan: true,
    rating: 4.6,
    reviews: 9800,
    color: "#c9826b",
    buyLink: "#",
  },
  {
    id: 9,
    name: "Moisturizing Skin Cream",
    brand: "Vanicream",
    type: "Moisturizer",
    certifications: ["Leaping Bunny"],
    ingredients: ["Petrolatum", "Sorbitol", "Cetearyl Alcohol", "Glycerin"],
    concerns: ["Eczema", "Seborrheic Dermatitis", "Sensitive Skin", "Dry Skin"],
    price: 14,
    priceRange: "$",
    oilFree: false,
    vegan: false,
    rating: 4.8,
    reviews: 11000,
    color: "#a8c5a0",
    buyLink: "#",
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
  const [veganOnly, setVeganOnly] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const toggle = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);

  const activeFilterCount = selectedConcerns.length + selectedTypes.length + selectedCerts.length + (oilFreeOnly ? 1 : 0) + (veganOnly ? 1 : 0) + (priceFilter !== "all" ? 1 : 0);

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
      if (veganOnly && !p.vegan) return false;
      if (priceFilter === "$" && p.priceRange !== "$") return false;
      if (priceFilter === "$$" && p.priceRange !== "$$") return false;
      return true;
    });
  }, [search, selectedConcerns, selectedTypes, selectedCerts, oilFreeOnly, veganOnly, priceFilter]);

  const clearAll = () => {
    setSelectedConcerns([]); setSelectedTypes([]); setSelectedCerts([]);
    setOilFreeOnly(false); setVeganOnly(false); setPriceFilter("all"); setSearch("");
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
