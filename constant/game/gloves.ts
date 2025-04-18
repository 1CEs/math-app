const glovesPool: Item[] = [
    // Common
    {
        id: 301,
        name: 'Worn Leather Gloves',
        description: 'Basic gloves for everyday use.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'common',
        type: 'gloves',
        rate: 1,
        require: 1,
    },
    {
        id: 302,
        name: 'Rusty Gauntlets',
        description: 'Old iron gloves, not very protective.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'common',
        type: 'gloves',
        rate: 1,
        require: 2,
    },
    {
        id: 303,
        name: 'Cloth Gloves',
        description: 'Soft cloth gloves for light tasks.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'common',
        type: 'gloves',
        rate: 1,
        require: 1,
    },
    {
        id: 304,
        name: 'Guard’s Gloves',
        description: 'Basic gloves worn by city guards.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'common',
        type: 'gloves',
        rate: 1,
        require: 3,
    },

    // Uncommon
    {
        id: 305,
        name: 'Iron Gauntlets',
        description: 'Sturdy gloves that complement the Iron Chestplate.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'uncommon',
        type: 'gloves',
        rate: 2,
        require: 4,
    },
    {
        id: 306,
        name: 'Reinforced Leather Gloves',
        description: 'Leather gloves reinforced with metal.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'uncommon',
        type: 'gloves',
        rate: 2,
        require: 3,
    },
    {
        id: 307,
        name: 'Bronze Fistguards',
        description: 'Gloves made of durable bronze.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'uncommon',
        type: 'gloves',
        rate: 2,
        require: 5,
    },
    {
        id: 308,
        name: 'Scout’s Gloves',
        description: 'Light gloves for a quick grip.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'uncommon',
        type: 'gloves',
        rate: 2,
        require: 3,
    },

    // Rare
    {
        id: 309,
        name: 'Knight’s Gauntlets',
        description: 'Heavy gloves worn by knights.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'rare',
        type: 'gloves',
        rate: 3,
        require: 6,
    },
    {
        id: 310,
        name: 'Forest Guardian Gloves',
        description: 'Soft yet sturdy gloves for nature protection.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'rare',
        type: 'gloves',
        rate: 3,
        require: 6,
    },
    {
        id: 311,
        name: 'Fireborn Gauntlets',
        description: 'Gauntlets that can withstand intense heat.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'rare',
        type: 'gloves',
        rate: 3,
        require: 7,
    },
    {
        id: 312,
        name: 'Tundra Gloves',
        description: 'Insulated gloves perfect for cold climates.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'rare',
        type: 'gloves',
        rate: 3,
        require: 6,
    },

    // Epic
    {
        id: 313,
        name: 'Runed Gauntlets',
        description: 'Gauntlets imbued with magical runes.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'epic',
        type: 'gloves',
        rate: 5,
        require: 10,
    },
    {
        id: 314,
        name: 'Moonfang Grips',
        description: 'Gloves designed for moonlit precision.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'epic',
        type: 'gloves',
        rate: 5,
        require: 9,
    },
    {
        id: 315,
        name: 'Thunderfist Gauntlets',
        description: 'Electrified gloves for powerful punches.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'epic',
        type: 'gloves',
        rate: 6,
        require: 11,
    },
    {
        id: 316,
        name: 'Embersteel Gauntlets',
        description: 'Wrought from the heart of flame.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'epic',
        type: 'gloves',
        rate: 6,
        require: 12,
    },

    // Legendary
    {
        id: 317,
        name: 'Dragonbone Gauntlets',
        description: 'Crafted from the bones of mighty dragons.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'legendary',
        type: 'gloves',
        rate: 7,
        require: 13,
    },
    {
        id: 318,
        name: 'Sunfire Grips',
        description: 'Gloves blazing with solar fire.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'legendary',
        type: 'gloves',
        rate: 7,
        require: 14,
    },
    {
        id: 319,
        name: 'Voidwalker Gauntlets',
        description: 'Gauntlets forged in the void between worlds.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'legendary',
        type: 'gloves',
        rate: 8,
        require: 15,
    },
    {
        id: 320,
        name: 'Phoenix Gloves',
        description: 'Made with the feathers of a phoenix.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'legendary',
        type: 'gloves',
        rate: 8,
        require: 16,
    },

    // Mythic
    {
        id: 321,
        name: 'Mythril Gauntlets',
        description: 'Extremely durable, yet light.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'mythic',
        type: 'gloves',
        rate: 9,
        require: 17,
    },
    {
        id: 322,
        name: 'Starlight Grips',
        description: 'Soft yet powerful as the stars themselves.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'mythic',
        type: 'gloves',
        rate: 10,
        require: 18,
    },
    {
        id: 323,
        name: 'Giantblood Gauntlets',
        description: 'Worn by titans, holding immense power.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'mythic',
        type: 'gloves',
        rate: 9,
        require: 17,
    },
    {
        id: 324,
        name: 'Heartward Gauntlets',
        description: 'Feel the pulse of the earth with every motion.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'mythic',
        type: 'gloves',
        rate: 10,
        require: 19,
    },

    // Unique
    {
        id: 325,
        name: 'Soulbound Gauntlets',
        description: 'These gauntlets bind to the user’s soul.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'unique',
        type: 'gloves',
        rate: 10,
        require: 20,
    },
    {
        id: 326,
        name: 'Echo Fistguards',
        description: 'They echo with the force of each punch.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'unique',
        type: 'gloves',
        rate: 11,
        require: 20,
    },
    {
        id: 327,
        name: 'Shifting Grips',
        description: 'Change shape to enhance combat.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'unique',
        type: 'gloves',
        rate: 11,
        require: 21,
    },
    {
        id: 328,
        name: 'Mirror Gauntlets',
        description: 'Reflect the damage dealt to you.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'unique',
        type: 'gloves',
        rate: 12,
        require: 21,
    },

    // Cosmic
    {
        id: 329,
        name: 'Voidweave Grips',
        description: 'Made from the threads of the void.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'cosmic',
        type: 'gloves',
        rate: 12,
        require: 22,
    },
    {
        id: 330,
        name: 'Nova Gauntlets',
        description: 'Harness the power of stars in your hands.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'cosmic',
        type: 'gloves',
        rate: 13,
        require: 23,
    },
    {
        id: 331,
        name: 'Celestial Alloy Grips',
        description: 'Crafted from celestial metals, nearly unbreakable.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'cosmic',
        type: 'gloves',
        rate: 13,
        require: 23,
    },
    {
        id: 332,
        name: 'Nebula Fistguards',
        description: 'Absorb the power of the galaxy’s core.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'cosmic',
        type: 'gloves',
        rate: 14,
        require: 24,
    },

    // Demonic
    {
        id: 333,
        name: 'Hellcarved Gauntlets',
        description: 'Infused with the fire of hell itself.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'demonic',
        type: 'gloves',
        rate: 14,
        require: 25,
    },
    {
        id: 334,
        name: 'Demonlord Gauntlets',
        description: 'Worn by the fiercest of demons.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'demonic',
        type: 'gloves',
        rate: 15,
        require: 26,
    },
    {
        id: 335,
        name: 'Infernal Fistguards',
        description: 'Gloves that burn with infernal rage.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'demonic',
        type: 'gloves',
        rate: 15,
        require: 27,
    },
    {
        id: 336,
        name: 'Thorned Gauntlets',
        description: 'Wounds others with every strike.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'demonic',
        type: 'gloves',
        rate: 16,
        require: 28,
    },

    // God
    {
        id: 337,
        name: 'Titan Gauntlets',
        description: 'Massive gloves for the mightiest of gods.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'god',
        type: 'gloves',
        rate: 17,
        require: 30,
    },
    {
        id: 338,
        name: 'Eternal Grips',
        description: 'Gloves that never wear out.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'god',
        type: 'gloves',
        rate: 17,
        require: 31,
    },
    {
        id: 339,
        name: 'Olympian Gauntlets',
        description: 'Worn by the divine beings themselves.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'god',
        type: 'gloves',
        rate: 18,
        require: 32,
    },
    {
        id: 340,
        name: 'Heavenstep Gauntlets',
        description: 'Designed to assist gods on their heavenly journeys.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'god',
        type: 'gloves',
        rate: 18,
        require: 33,
    },
    {
        id: 341,
        name: 'Voidweave Grips',
        description: 'Made from the threads of the void.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'celestial',
        type: 'gloves',
        rate: 12,
        require: 22,
    },
    {
        id: 342,
        name: 'Nova Gauntlets',
        description: 'Harness the power of stars in your hands.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'celestial',
        type: 'gloves',
        rate: 13,
        require: 23,
    },
    {
        id: 343,
        name: 'Celestial Alloy Grips',
        description: 'Crafted from celestial metals, nearly unbreakable.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'celestial',
        type: 'gloves',
        rate: 13,
        require: 23,
    },
    {
        id: 344,
        name: 'Nebula Fistguards',
        description: 'Absorb the power of the galaxy’s core.',
        image: require('@/assets/images/gloves.png'),
        quantity: 1,
        rarity: 'celestial',
        type: 'gloves',
        rate: 14,
        require: 24,
    }
];
