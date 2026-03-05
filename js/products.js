const products = [
    {
        id: "p1",
        name: "Sprouted Ragi Malt",
        category: "kids",
        tag: "Kids & Growth",
        price: 350,
        image: "images/p1.png",
        shortDesc: "Nutrient-dense calcium powerhouse for growing kids.",
        description: "Our Sprouted Ragi Malt is made following traditional methods. Sprouting the ragi grain unlocks its true nutritional potential, increasing bio-availability of calcium and iron. Naturally sweet and easy to digest, it's the perfect daily drink for growing children.",
        ingredients: ["Sprouted Ragi (Finger Millet)", "Cardamom", "Almonds"],
        benefits: ["High in Calcium for bone strength", "Rich in dietary fiber", "Easy to digest"],
        preparation: "Mix 2 tbsp in hot milk or water. Add natural sweetener like jaggery to taste. Stir well and serve warm.",
        whoFor: "Kids aged 2+, growing teenagers, pregnant women.",
        weights: [
            { id: "250g", label: "250g", price: 350 },
            { id: "500g", label: "500g", price: 650 }
        ]
    },
    {
        id: "p2",
        name: "Sathumaavu Classic",
        category: "wellness",
        tag: "Daily Wellness",
        price: 420,
        image: "images/p2.png",
        shortDesc: "Traditional multi-grain health mix for the whole family.",
        description: "A heritage recipe passed down through generations. Our Sathumaavu combines over 15 grains, pulses, and nuts roasted carefully in small batches. It provides balanced, sustained energy for the entire family without any refined sugars.",
        ingredients: ["Pearl Millet", "Sorghum", "Sprouted Ragi", "Green Gram", "Roasted Gram", "Almonds", "Cashews", "Cardamom"],
        benefits: ["Complete protein profile", "Sustained energy release", "Boosts immunity"],
        preparation: "Boil 1 cup water/milk. Make a paste of 2 tbsp mix with water. Add to boiling water, cook for 3-5 mins until thick.",
        whoFor: "The whole family including adults and seniors.",
        weights: [
            { id: "250g", label: "250g", price: 420 },
            { id: "500g", label: "500g", price: 780 }
        ]
    },
    {
        id: "p3",
        name: "Women's Heritage Blend",
        category: "women",
        tag: "Women's Health",
        price: 480,
        image: "images/p3.png",
        shortDesc: "Iron-rich blend to support hormonal balance and vitality.",
        description: "Specifically formulated for women's nutritional needs. This mix heavily features iron-rich grains, calcium sources, and traditional seeds known to support hormonal balance and provide deep nourishment.",
        ingredients: ["Black Urad Dal", "Fenugreek Seeds", "Flax seeds", "Pearl Millet", "Dry Ginger"],
        benefits: ["Supports hormonal balance", "Rich in Iron and Folic Acid", "Aids postpartum recovery"],
        preparation: "Can be made into a porridge (kanji) or mixed with whole wheat flour to make nutritious rotis.",
        whoFor: "Women of all ages, especially beneficial postpartum.",
        weights: [
            { id: "250g", label: "250g", price: 480 },
            { id: "500g", label: "500g", price: 900 }
        ]
    },
    {
        id: "p4",
        name: "Active Protein Mix",
        category: "strength",
        tag: "Strength & Protein",
        price: 550,
        image: "images/p4.png",
        shortDesc: "Plant-based protein from ancient grains and nuts.",
        description: "A clean, natural alternative to synthetic protein powders. Formulated for active individuals, combining high-protein lentils with energy-dense nuts and seeds to aid muscle recovery and build strength.",
        ingredients: ["Roasted Bengal Gram", "Peanuts", "Almonds", "Pumpkin Seeds", "Horse Gram"],
        benefits: ["High natural protein content", "Aids muscle recovery", "Clean, easily digestible ingredients"],
        preparation: "Blend 3 tbsp with milk or a banana smoothie post-workout.",
        whoFor: "Athletes, fitness enthusiasts, and active individuals.",
        weights: [
            { id: "250g", label: "250g", price: 550 },
            { id: "500g", label: "500g", price: 1050 }
        ]
    },
    {
        id: "p5",
        name: "Pearl Millet (Bajra) Flakes",
        category: "traditional",
        tag: "Traditional Grains",
        price: 220,
        image: "images/p5.png",
        shortDesc: "Instant healthy breakfast alternative to oats.",
        description: "Lightly roasted pearl millet flakes that cook in minutes. Naturally gluten-free and packed with iron. An excellent, locally-sourced alternative to imported oats for your morning breakfast bowl.",
        ingredients: ["100% Pearl Millet (Bajra)"],
        benefits: ["Gluten-free", "High in Iron", "Diabetic friendly (low GI)"],
        preparation: "Cook like regular oats with milk or water, or make a savory upma with vegetables.",
        whoFor: "Anyone looking for a quick, healthy breakfast.",
        weights: [
            { id: "400g", label: "400g", price: 220 }
        ]
    },
    {
        id: "p6",
        name: "Sprouted Green Gram Mix",
        category: "wellness",
        tag: "Daily Wellness",
        price: 380,
        image: "images/p6.png",
        shortDesc: "Light, cooling protein mix that is extremely easy to digest.",
        description: "Sprouted green gram is known in Ayurveda for its cooling properties and exceptional digestibility. We sprout, dry, and mill it carefully to preserve enzymes. Perfect as a light meal recovering from illness or as a daily supplement.",
        ingredients: ["Sprouted Green Gram (Moong Dal)"],
        benefits: ["Extremely easy on the gut", "Cooling for the body", "Good source of vegetarian protein"],
        preparation: "Mix with warm water/milk, or mix into soup/broth.",
        whoFor: "Seniors, people recovering from illness, daily consumers.",
        weights: [
            { id: "250g", label: "250g", price: 380 },
            { id: "500g", label: "500g", price: 720 }
        ]
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
