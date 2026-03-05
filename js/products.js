const products = [
    {
        id: "p1",
        name: "Nutrition of the royal lineage",
        category: "wellness",
        tag: "Sprouted Kollu Kanji",
        price: 250,
        image: "images/1771908548694.png",
        shortDesc: "Rich in Protein & Fiber",
        description: "Boosts Energy Naturally, Controls Blood Sugar, Supports Heart Health.",
        ingredients: ["முளைகட்டிய கொள்ளு கஞ்சி"],
        benefits: ["Rich in Protein & Fiber", "Boosts Energy Naturally", "Controls Blood Sugar", "Supports Heart Health"],
        preparation: "Mix with hot water or milk.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 250 }]
    },
    {
        id: "p2",
        name: "Life-Guarding King",
        category: "strength",
        tag: "Karuppu Kavuni Cardamom",
        price: 300,
        image: "images/1771908914568.png",
        shortDesc: "Strengthens Bones & Muscles",
        description: "Improves Skin & Hair Health, Rich in Iron & Antioxidants, Improves Digestion & Gut Health.",
        ingredients: ["கருப்பு கவுனி கஞ்சி ஏலக்காய் சுவை"],
        benefits: ["Strengthens Bones & Muscles", "Improves Skin & Hair Health", "Rich in Iron & Antioxidants", "Improves Digestion & Gut Health"],
        preparation: "Cook like porridge.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 300 }]
    },
    {
        id: "p3",
        name: "Emperor of Health",
        category: "wellness",
        tag: "Karuppu Kavuni Mix",
        price: 280,
        image: "images/1771914122705.png",
        shortDesc: "Natural Body Detox",
        description: "Reduces Body Heat, Strengthens Nervous System, Improves Metabolism.",
        ingredients: ["கருப்பு கவுனி இட்லி, புட்டு, கொழுக்கட்டை mix"],
        benefits: ["Natural Body Detox", "Reduces Body Heat", "Strengthens Nervous System", "Improves Metabolism"],
        preparation: "Can be used for Idli, Puttu, Kozhukattai.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 280 }]
    },
    {
        id: "p4",
        name: "Black gold",
        category: "strength",
        tag: "Karuppu Ulundhu Kanji",
        price: 320,
        image: "images/1771914402457.png",
        shortDesc: "Boosts Energy & Stamina",
        description: "Rich in Iron & Magnesium, Supports Joint & Bone Health, Energy-Rich Pulse.",
        ingredients: ["கருப்பு உளுந்து கஞ்சி"],
        benefits: ["Boosts Energy & Stamina", "Rich in Iron & Magnesium", "Supports Joint & Bone Health", "Energy-Rich Pulse"],
        preparation: "Mix with milk or water, cook as kanji.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 320 }]
    },
    {
        id: "p5",
        name: "Earth gold",
        category: "wellness",
        tag: "Sprouted Millets",
        price: 350,
        image: "images/1771914494408.png",
        shortDesc: "Boosts Energy & Immunity",
        description: "Muscle Recovery Support, Supports Weight & Sugar Control, Balances Hormones Naturally.",
        ingredients: ["முளைகட்டிய சிறுதானியம்"],
        benefits: ["Boosts Energy & Immunity", "Muscle Recovery Support", "Supports Weight & Sugar Control", "Balances Hormones Naturally"],
        preparation: "Cook like regular oats with milk or water.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 350 }]
    },
    {
        id: "p6",
        name: "Queen of Natural Medicine",
        category: "women",
        tag: "Moringa Rice/Idli Podi",
        price: 220,
        image: "images/1771914565505.png",
        shortDesc: "Reduces Tiredness & Weakness",
        description: "Immunity Booster, Purifies Blood Naturally, Enhances Skin Glow.",
        ingredients: ["முருங்கை கீரை சாதம் & இட்லி பொடி"],
        benefits: ["Reduces Tiredness & Weakness", "Immunity Booster", "Purifies Blood Naturally", "Enhances Skin Glow"],
        preparation: "Mix with hot rice and ghee or use with Idli/Dosa.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 220 }]
    },
    {
        id: "p7",
        name: "Life-Guarding Queen",
        category: "women",
        tag: "Karuppu Kavuni Masala",
        price: 310,
        image: "images/1771914844168.png",
        shortDesc: "Cellular Protection & Anti-Aging",
        description: "Balances Appetite Hormones, Supports Brain & Nerve Function, Strengthens Stress Resilience.",
        ingredients: ["கருப்பு கவுனி கஞ்சி மசாலா சுவை"],
        benefits: ["Cellular Protection & Anti-Aging", "Balances Appetite Hormones", "Supports Brain & Nerve Function", "Strengthens Stress Resilience"],
        preparation: "Cook like porridge.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 310 }]
    },
    {
        id: "p8",
        name: "The Time-Conquering King",
        category: "wellness",
        tag: "36 varieties Millets",
        price: 380,
        image: "images/p1.png",
        shortDesc: "Supports Liver & Kidney Function",
        description: "Improves Mineral Retention, Reduces Inflammatory Load, Cell Repair Nutrition.",
        ingredients: ["36 வகை சிறுதானியம்"],
        benefits: ["Supports Liver & Kidney Function", "Improves Mineral Retention", "Reduces Inflammatory Load", "Cell Repair Nutrition"],
        preparation: "Mix with warm milk or water.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 380 }]
    },
    {
        id: "p9",
        name: "Health Sovereign Leaf",
        category: "wellness",
        tag: "Curry Leaves Podi",
        price: 200,
        image: "images/p2.png",
        shortDesc: "Supports Healthy Hair Growth",
        description: "Controls Excess Body Heat, Reduces Bad Cholesterol, Mineral-rich green support.",
        ingredients: ["கருவேப்பிலை சாதம் & இட்லி பொடி"],
        benefits: ["Supports Healthy Hair Growth", "Controls Excess Body Heat", "Reduces Bad Cholesterol", "Mineral-rich green support"],
        preparation: "Mix with hot rice and ghee or use with Idli.",
        whoFor: "Everyone",
        weights: [{ id: "250g", label: "250g", price: 200 }]
    }
];


// Helper functions for data access
function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

function getFeaturedProducts() {
    // Return top 3 products for homepage
    return products.slice(0, 3);
}
