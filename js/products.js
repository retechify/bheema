const products = [
    {
        id: "p1",
        name: "Nutrition of the Royal Lineage",
        category: "family",
        tag: "Royal Heritage Nutrition Mix",
        price: 149,
        image: "images/1. Royal Heritage Nutrition Mix.png",
        shortDesc: "Rich in Protein & Fiber",
        description: "A multigrain health mix that boosts energy naturally, helps regulate blood sugar, and supports heart health.",
        ingredients: ["அரச வம்சத்தின் சத்து — Multigrain health mix"],
        benefits: ["Rich in protein and fiber", "Boosts energy naturally", "Helps regulate blood sugar", "Supports heart health"],
        preparation: "Mix 2-3 tablespoons with hot water or milk. Stir well and enjoy.",
        whoFor: "Daily family nutrition — suitable for all ages",
        weights: [{ id: "300g", label: "300g", price: 149 }]
    },
    {
        id: "p2",
        name: "Life-Guarding King",
        category: "strength",
        tag: "Karuppu Kavuni Strength Mix",
        price: 179,
        image: "images/2. Karuppu Kavuni Strength Mix.png",
        shortDesc: "Strengthens Bones & Muscles",
        description: "Black rice nutrition mix rich in iron and antioxidants. Improves digestion, gut health, and supports skin & hair.",
        ingredients: ["உயிர் காவல் மன்னன் — Black rice nutrition mix"],
        benefits: ["Strengthens bones and muscles", "Rich in iron and antioxidants", "Improves digestion and gut health", "Supports skin and hair health"],
        preparation: "Cook like porridge with milk or water.",
        whoFor: "Strength and stamina — ideal for active lifestyles",
        weights: [{ id: "300g", label: "300g", price: 179 }]
    },
    {
        id: "p3",
        name: "Emperor of Health",
        category: "wellness",
        tag: "Emperor Health Mix",
        price: 159,
        image: "images/3. Emperor Health Mix.png",
        shortDesc: "Natural Body Detox",
        description: "A potent blend of black gram, green gram, and horse gram. Strengthens the nervous system and improves metabolism.",
        ingredients: ["ஆரோக்கிய சக்கரவர்த்தி — Black gram, green gram, horse gram mix"],
        benefits: ["Natural body detox", "Strengthens nervous system", "Reduces body heat", "Improves metabolism"],
        preparation: "Can be used for Idli, Puttu, or Kozhukattai.",
        whoFor: "Whole body wellness — suitable for everyone",
        weights: [{ id: "300g", label: "300g", price: 159 }]
    },
    {
        id: "p4",
        name: "Black Gold",
        category: "strength",
        tag: "Black Gold Mix",
        price: 139,
        image: "images/4. Black Gold Mix.png",
        shortDesc: "Boosts Energy & Stamina",
        description: "Black urad nutrition mix rich in iron and magnesium. Supports joint, bone health, and provides protein-rich pulse nutrition.",
        ingredients: ["கருப்பு தங்கம் — Black urad nutrition mix"],
        benefits: ["Boosts energy and stamina", "Supports joint and bone health", "Rich in iron and magnesium", "Protein-rich pulse nutrition"],
        preparation: "Mix with milk or water, cook as kanji.",
        whoFor: "Bone strength — ideal for growing children and elderly",
        weights: [{ id: "300g", label: "300g", price: 139 }]
    },
    {
        id: "p5",
        name: "Earth Gold",
        category: "family",
        tag: "Earth Gold Multigrain Mix",
        price: 169,
        image: "images/5. Earth Gold Multigrain Mix.png",
        shortDesc: "Boosts Immunity & Energy",
        description: "Sprouted multigrain mix that helps manage sugar levels, supports muscle recovery, and balances hormones naturally.",
        ingredients: ["பூமி தங்கம் — Sprouted multigrain mix"],
        benefits: ["Boosts immunity and energy", "Helps manage sugar levels", "Supports muscle recovery", "Balances hormones naturally"],
        preparation: "Cook like regular oats with milk or water.",
        whoFor: "Daily wellness nutrition — suitable for the whole family",
        weights: [{ id: "300g", label: "300g", price: 169 }]
    },
    {
        id: "p6",
        name: "Queen of Natural Medicine",
        category: "herbal",
        tag: "Moringa Herbal Powder",
        price: 95,
        image: "images/6. Moringa Herbal Powder.png",
        shortDesc: "Reduces Tiredness & Weakness",
        description: "A natural blood purifier and immunity booster that enhances skin glow and reduces fatigue.",
        ingredients: ["முருங்கை கீரை சாறு & இலை பொடி — Moringa leaf powder"],
        benefits: ["Reduces tiredness and weakness", "Natural blood purifier", "Immunity booster", "Enhances skin glow"],
        preparation: "Mix with hot rice and ghee, or use with Idli/Dosa.",
        whoFor: "Daily health supplement — suitable for all ages",
        weights: [{ id: "100g", label: "100g", price: 95 }]
    },
    {
        id: "p7",
        name: "Life-Guarding Queen",
        category: "women",
        tag: "Karuppu Kavuni Premium Mix",
        price: 169,
        image: "images/7. Karuppu Kavuni Premium Mix.png",
        shortDesc: "Cellular Protection & Anti-Aging",
        description: "Black rice premium mix that supports brain & nerve function, balances appetite hormones and strengthens stress resilience.",
        ingredients: ["உயிர் காவல் அரசி — Black rice premium mix"],
        benefits: ["Cellular protection and anti-aging", "Supports brain and nerve function", "Balances appetite hormones", "Strengthens stress resilience"],
        preparation: "Cook like porridge with milk or water.",
        whoFor: "Women's health — ideal for daily wellness",
        weights: [{ id: "300g", label: "300g", price: 169 }]
    },
    {
        id: "p8",
        name: "The Time-Conquering King",
        category: "family",
        tag: "36 Multigrain Super Nutrition Mix",
        price: 149,
        image: "images/8. 36 Multigrain Super Nutrition Mix.png",
        shortDesc: "Supports Liver & Kidney Function",
        description: "Made from 36 traditional grains and millets. Improves mineral absorption, reduces inflammatory load, and promotes cell repair.",
        ingredients: ["காலம் வென்ற அரசன் — 36 traditional grains and millets"],
        benefits: ["Supports liver and kidney function", "Improves mineral absorption", "Reduces inflammatory load", "Promotes cell repair"],
        preparation: "Mix with warm milk or water.",
        whoFor: "Complete family nutrition — beneficial for all ages",
        weights: [{ id: "300g", label: "300g", price: 149 }]
    },
    {
        id: "p9",
        name: "Health Sovereign Leaf",
        category: "herbal",
        tag: "Curry Leaf Herbal Powder",
        price: 95,
        image: "images/9. Curry Leaf Herbal Powder.png",
        shortDesc: "Supports Healthy Hair Growth",
        description: "Controls excess body heat, reduces bad cholesterol, and provides mineral-rich green nutrition.",
        ingredients: ["கருவேப்பிலை சாறு & இலை பொடி — Curry leaf powder"],
        benefits: ["Supports healthy hair growth", "Controls excess body heat", "Reduces bad cholesterol", "Mineral-rich green nutrition"],
        preparation: "Mix with hot rice and ghee or use with Idli.",
        whoFor: "Hair and wellness support — suitable for everyone",
        weights: [{ id: "100g", label: "100g", price: 95 }]
    },
    {
        id: "p10",
        name: "Honey Fig Natural Sweetener",
        category: "family",
        tag: "Honey Fig Powder",
        price: 179,
        image: "images/10. Honey Fig Natural Sweetener Powder.png",
        shortDesc: "Natural Sugar Alternative",
        description: "A healthier alternative to refined sugar made from dried figs blended with natural honey goodness, delivering minerals and antioxidants.",
        ingredients: ["Honey Fig Powder — Natural sweetener from dried figs & honey"],
        benefits: ["Natural sugar alternative", "Rich in iron and calcium", "Supports digestion", "Boosts natural energy", "Contains antioxidants"],
        preparation: "Add 1–2 teaspoons to milk, smoothies, porridge, or desserts as a natural sweetener.",
        whoFor: "Smoothies, milk drinks, healthy desserts, kids nutrition",
        weights: [{ id: "250g", label: "250g", price: 179 }]
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
