const weaponPool: Item[] = [
    // COMMON
    {
      id: 1,
      name: "Rusty Sword",
      description: "An old sword barely holding together.",
      image: "rusty_sword.png",
      quantity: 1,
      rarity: "common",
      type: "weapon",
      rate: 10,
      require: 1,
    },
    {
      id: 2,
      name: "Cracked Wooden Bow",
      description: "A fragile bow made of weak wood.",
      image: "cracked_wooden_bow.png",
      quantity: 1,
      rarity: "common",
      type: "weapon",
      rate: 10,
      require: 1,
    },
    {
      id: 3,
      name: "Chipped Dagger",
      description: "A small dagger with a chipped blade.",
      image: "chipped_dagger.png",
      quantity: 1,
      rarity: "common",
      type: "weapon",
      rate: 10,
      require: 1,
    },
  
    // UNCOMMON
    {
      id: 4,
      name: "Iron Longsword",
      description: "A reliable sword forged from iron.",
      image: "iron_longsword.png",
      quantity: 1,
      rarity: "uncommon",
      type: "weapon",
      rate: 8,
      require: 5,
    },
    {
      id: 5,
      name: "Hunter’s Shortbow",
      description: "A simple shortbow used by hunters.",
      image: "hunters_shortbow.png",
      quantity: 1,
      rarity: "uncommon",
      type: "weapon",
      rate: 8,
      require: 5,
    },
    {
      id: 6,
      name: "Steel Dirk",
      description: "A sharp dagger favored by thieves.",
      image: "steel_dirk.png",
      quantity: 1,
      rarity: "uncommon",
      type: "weapon",
      rate: 8,
      require: 5,
    },
  
    // RARE
    {
      id: 7,
      name: "Blazing Saber",
      description: "A sword engulfed in weak flames.",
      image: "blazing_saber.png",
      quantity: 1,
      rarity: "rare",
      type: "weapon",
      rate: 5,
      require: 10,
      buff: [{ type: "Bonus EXP", value: 3 }],
    },
    {
      id: 8,
      name: "Windpiercer Bow",
      description: "A bow that sings with the wind.",
      image: "windpiercer_bow.png",
      quantity: 1,
      rarity: "rare",
      type: "weapon",
      rate: 5,
      require: 10,
      buff: [{ type: "Luck", value: 2 }],
    },
    {
      id: 9,
      name: "Shadow Fang",
      description: "A dagger used by dark assassins.",
      image: "shadow_fang.png",
      quantity: 1,
      rarity: "rare",
      type: "weapon",
      rate: 5,
      require: 10,
      buff: [{ type: "Math Cooldown", value: 2 }],
    },
  
    // EPIC
    {
      id: 10,
      name: "Stormforged Greatsword",
      description: "A massive sword crackling with electricity.",
      image: "stormforged_greatsword.png",
      quantity: 1,
      rarity: "epic",
      type: "weapon",
      rate: 3,
      require: 20,
      buff: [{ type: "Bonus EXP", value: 5 }],
    },
    {
      id: 11,
      name: "Phoenix Feather Bow",
      description: "A bow strung with phoenix feather strings.",
      image: "phoenix_feather_bow.png",
      quantity: 1,
      rarity: "epic",
      type: "weapon",
      rate: 3,
      require: 20,
      buff: [{ type: "RNG Cooldown", value: 4 }],
    },
    {
      id: 12,
      name: "Silent Crescent",
      description: "A blade that moves like a whisper in the night.",
      image: "silent_crescent.png",
      quantity: 1,
      rarity: "epic",
      type: "weapon",
      rate: 3,
      require: 20,
      buff: [{ type: "Luck", value: 4 }],
    },
  
    // LEGENDARY
    {
      id: 13,
      name: "Sword of Eternal Flames",
      description: "A blade burning with an endless fire.",
      image: "sword_eternal_flames.png",
      quantity: 1,
      rarity: "legendary",
      type: "weapon",
      rate: 2,
      require: 35,
      buff: [{ type: "Raid Cooldown", value: 5 }],
    },
    {
      id: 14,
      name: "Skyfall Longbow",
      description: "A bow blessed by the gods of the sky.",
      image: "skyfall_longbow.png",
      quantity: 1,
      rarity: "legendary",
      type: "weapon",
      rate: 2,
      require: 35,
      buff: [{ type: "Bonus EXP", value: 7 }],
    },
    {
      id: 15,
      name: "Night's Embrace",
      description: "A dagger that devours light.",
      image: "nights_embrace.png",
      quantity: 1,
      rarity: "legendary",
      type: "weapon",
      rate: 2,
      require: 35,
      buff: [{ type: "Luck", value: 5 }],
    },
  
    // MYTHIC
    {
      id: 16,
      name: "Runebreaker",
      description: "A sword that shatters magic barriers.",
      image: "runebreaker.png",
      quantity: 1,
      rarity: "mythic",
      type: "weapon",
      rate: 1,
      require: 50,
      buff: [{ type: "Math Cooldown", value: 7 }],
    },
    {
      id: 17,
      name: "Seraph’s Eye Bow",
      description: "A bow with divine aim.",
      image: "seraphs_eye_bow.png",
      quantity: 1,
      rarity: "mythic",
      type: "weapon",
      rate: 1,
      require: 50,
      buff: [{ type: "RNG Cooldown", value: 6 }],
    },
    {
      id: 18,
      name: "Fang of the Abyss",
      description: "A dagger formed in the deepest oceans.",
      image: "fang_of_the_abyss.png",
      quantity: 1,
      rarity: "mythic",
      type: "weapon",
      rate: 1,
      require: 50,
      buff: [{ type: "Luck", value: 7 }],
    },
  
    // UNIQUE
    {
      id: 19,
      name: "Soulrender",
      description: "A cursed sword that steals the soul of enemies.",
      image: "soulrender.png",
      quantity: 1,
      rarity: "unique",
      type: "weapon",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Bonus EXP", value: 10 }],
    },
    {
      id: 20,
      name: "Dragonfang Bow",
      description: "Crafted from the fangs of a fallen dragon.",
      image: "dragonfang_bow.png",
      quantity: 1,
      rarity: "unique",
      type: "weapon",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Raid Cooldown", value: 8 }],
    },
    {
      id: 21,
      name: "Venomspike",
      description: "A dagger dripping with eternal venom.",
      image: "venomspike.png",
      quantity: 1,
      rarity: "unique",
      type: "weapon",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Luck", value: 8 }],
    },
  
    // COSMIC
    {
      id: 22,
      name: "Starforged Blade",
      description: "Forged from the core of a dying star.",
      image: "starforged_blade.png",
      quantity: 1,
      rarity: "cosmic",
      type: "weapon",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Bonus EXP", value: 12 }],
    },
    {
      id: 23,
      name: "Nebula Stringbow",
      description: "A bow that fires arrows of pure starlight.",
      image: "nebula_stringbow.png",
      quantity: 1,
      rarity: "cosmic",
      type: "weapon",
      rate: 0.5,
      require: 100,
      buff: [{ type: "RNG Cooldown", value: 10 }],
    },
    {
      id: 24,
      name: "Black Hole Shiv",
      description: "A dagger that devours matter itself.",
      image: "blackhole_shiv.png",
      quantity: 1,
      rarity: "cosmic",
      type: "weapon",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Luck", value: 10 }],
    },
  
    // DEMONIC
    {
      id: 25,
      name: "Infernal Doomblade",
      description: "A sword cursed by a thousand demons.",
      image: "infernal_doomblade.png",
      quantity: 1,
      rarity: "demonic",
      type: "weapon",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Raid Cooldown", value: 12 }],
    },
    {
      id: 26,
      name: "Hellfire Recurve",
      description: "A bow bathed in demonic flames.",
      image: "hellfire_recurve.png",
      quantity: 1,
      rarity: "demonic",
      type: "weapon",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Bonus EXP", value: 15 }],
    },
    {
      id: 27,
      name: "Bloodfang Stiletto",
      description: "A dagger that thirsts for blood.",
      image: "bloodfang_stiletto.png",
      quantity: 1,
      rarity: "demonic",
      type: "weapon",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Luck", value: 12 }],
    },
  
    // GOD
    {
      id: 28,
      name: "Blade of the Firstborn",
      description: "A sword gifted by the first gods.",
      image: "blade_firstborn.png",
      quantity: 1,
      rarity: "god",
      type: "weapon",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Bonus EXP", value: 20 }],
    },
    {
      id: 29,
      name: "Divine Judgment Bow",
      description: "A bow that strikes down the wicked.",
      image: "divine_judgment_bow.png",
      quantity: 1,
      rarity: "god",
      type: "weapon",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Raid Cooldown", value: 15 }],
    },
    {
      id: 30,
      name: "Sacred Fang",
      description: "A dagger wielded by celestial priests.",
      image: "sacred_fang.png",
      quantity: 1,
      rarity: "god",
      type: "weapon",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Luck", value: 15 }],
    },
  
    // CELESTIAL
    {
      id: 31,
      name: "Eclipse Blade",
      description: "A blade that merges light and darkness.",
      image: "eclipse_blade.png",
      quantity: 1,
      rarity: "celestial",
      type: "weapon",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Bonus EXP", value: 25 }],
    },
    {
      id: 32,
      name: "Galactic Recurve",
      description: "A bow that bends space itself.",
      image: "galactic_recurve.png",
      quantity: 1,
      rarity: "celestial",
      type: "weapon",
      rate: 0.05,
      require: 200,
      buff: [{ type: "RNG Cooldown", value: 20 }],
    },
    {
      id: 33,
      name: "Astral Fang",
      description: "A dagger infused with cosmic essence.",
      image: "astral_fang.png",
      quantity: 1,
      rarity: "celestial",
      type: "weapon",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Luck", value: 20 }],
    },
  ];
  