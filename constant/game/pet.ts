const petPool: Item[] = [
    // COMMON
    {
      id: 100,
      name: "Dust Bunny",
      description: "A tiny, fluffy companion found in old ruins.",
      image: "dust_bunny.png",
      quantity: 1,
      rarity: "common",
      type: "pet",
      rate: 10,
      require: 1,
    },
    {
      id: 101,
      name: "Pebble Golem",
      description: "A small rock creature loyal to a fault.",
      image: "pebble_golem.png",
      quantity: 1,
      rarity: "common",
      type: "pet",
      rate: 10,
      require: 1,
    },
    {
      id: 102,
      name: "Lantern Bug",
      description: "A bug whose glow never fades.",
      image: "lantern_bug.png",
      quantity: 1,
      rarity: "common",
      type: "pet",
      rate: 10,
      require: 1,
    },
  
    // UNCOMMON
    {
      id: 103,
      name: "Ember Pup",
      description: "A fiery little dog with a warm heart.",
      image: "ember_pup.png",
      quantity: 1,
      rarity: "uncommon",
      type: "pet",
      rate: 8,
      require: 5,
    },
    {
      id: 104,
      name: "Mossy Turtle",
      description: "Carries a tiny ecosystem on its back.",
      image: "mossy_turtle.png",
      quantity: 1,
      rarity: "uncommon",
      type: "pet",
      rate: 8,
      require: 5,
    },
    {
      id: 105,
      name: "Wind Sprite",
      description: "A mischievous spirit of the breeze.",
      image: "wind_sprite.png",
      quantity: 1,
      rarity: "uncommon",
      type: "pet",
      rate: 8,
      require: 5,
    },
  
    // RARE
    {
      id: 106,
      name: "Shadow Kitten",
      description: "A playful cat that hides in shadows.",
      image: "shadow_kitten.png",
      quantity: 1,
      rarity: "rare",
      type: "pet",
      rate: 5,
      require: 10,
      buff: [{ type: "Luck", value: 3 }],
    },
    {
      id: 107,
      name: "Azure Drake Whelp",
      description: "A fledgling dragon, still learning to fly.",
      image: "azure_drake_whelp.png",
      quantity: 1,
      rarity: "rare",
      type: "pet",
      rate: 5,
      require: 10,
      buff: [{ type: "Bonus EXP", value: 3 }],
    },
    {
      id: 108,
      name: "Frostling",
      description: "A tiny elemental of ice and chill.",
      image: "frostling.png",
      quantity: 1,
      rarity: "rare",
      type: "pet",
      rate: 5,
      require: 10,
      buff: [{ type: "Math Cooldown", value: 2 }],
    },
  
    // EPIC
    {
      id: 109,
      name: "Crimson Fox",
      description: "A clever fox with an ember-lit tail.",
      image: "crimson_fox.png",
      quantity: 1,
      rarity: "epic",
      type: "pet",
      rate: 3,
      require: 20,
      buff: [{ type: "Luck", value: 5 }],
    },
    {
      id: 110,
      name: "Storm Owl",
      description: "Eyes flash like thunderclouds.",
      image: "storm_owl.png",
      quantity: 1,
      rarity: "epic",
      type: "pet",
      rate: 3,
      require: 20,
      buff: [{ type: "Raid Cooldown", value: 4 }],
    },
    {
      id: 111,
      name: "Sapphire Otter",
      description: "Gleams like polished river stones.",
      image: "sapphire_otter.png",
      quantity: 1,
      rarity: "epic",
      type: "pet",
      rate: 3,
      require: 20,
      buff: [{ type: "Bonus EXP", value: 5 }],
    },
  
    // LEGENDARY
    {
      id: 112,
      name: "Blazehorn Fawn",
      description: "Its horns flicker with magical fire.",
      image: "blazehorn_fawn.png",
      quantity: 1,
      rarity: "legendary",
      type: "pet",
      rate: 2,
      require: 35,
      buff: [{ type: "Bonus EXP", value: 7 }],
    },
    {
      id: 113,
      name: "Mirror Serpent",
      description: "A snake whose scales reflect the future.",
      image: "mirror_serpent.png",
      quantity: 1,
      rarity: "legendary",
      type: "pet",
      rate: 2,
      require: 35,
      buff: [{ type: "Luck", value: 7 }],
    },
    {
      id: 114,
      name: "Runebound Wolf",
      description: "Etched with ancient magic.",
      image: "runebound_wolf.png",
      quantity: 1,
      rarity: "legendary",
      type: "pet",
      rate: 2,
      require: 35,
      buff: [{ type: "RNG Cooldown", value: 6 }],
    },
  
    // MYTHIC
    {
      id: 115,
      name: "Starborn Lynx",
      description: "Born from constellations themselves.",
      image: "starborn_lynx.png",
      quantity: 1,
      rarity: "mythic",
      type: "pet",
      rate: 1,
      require: 50,
      buff: [{ type: "Luck", value: 8 }],
    },
    {
      id: 116,
      name: "Dreamwhale Pup",
      description: "Swims through the dreams of mortals.",
      image: "dreamwhale_pup.png",
      quantity: 1,
      rarity: "mythic",
      type: "pet",
      rate: 1,
      require: 50,
      buff: [{ type: "Bonus EXP", value: 9 }],
    },
    {
      id: 117,
      name: "Void Mantis",
      description: "Slices through dimensions.",
      image: "void_mantis.png",
      quantity: 1,
      rarity: "mythic",
      type: "pet",
      rate: 1,
      require: 50,
      buff: [{ type: "Raid Cooldown", value: 8 }],
    },
  
    // UNIQUE
    {
      id: 118,
      name: "Phoenix Chick",
      description: "Reborn from golden flames.",
      image: "phoenix_chick.png",
      quantity: 1,
      rarity: "unique",
      type: "pet",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Bonus EXP", value: 10 }],
    },
    {
      id: 119,
      name: "Moonshadow Ferret",
      description: "Slips between light and dark.",
      image: "moonshadow_ferret.png",
      quantity: 1,
      rarity: "unique",
      type: "pet",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Math Cooldown", value: 9 }],
    },
    {
      id: 120,
      name: "Cindersnake",
      description: "Born of volcanoes' fury.",
      image: "cindersnake.png",
      quantity: 1,
      rarity: "unique",
      type: "pet",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Luck", value: 9 }],
    },
  
    // COSMIC
    {
      id: 121,
      name: "Cosmic Hare",
      description: "Leaps across starfields.",
      image: "cosmic_hare.png",
      quantity: 1,
      rarity: "cosmic",
      type: "pet",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Luck", value: 12 }],
    },
    {
      id: 122,
      name: "Nebula Sloth",
      description: "Moves slowly through time itself.",
      image: "nebula_sloth.png",
      quantity: 1,
      rarity: "cosmic",
      type: "pet",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Raid Cooldown", value: 10 }],
    },
    {
      id: 123,
      name: "Stellar Gecko",
      description: "Glows with otherworldly colors.",
      image: "stellar_gecko.png",
      quantity: 1,
      rarity: "cosmic",
      type: "pet",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Bonus EXP", value: 13 }],
    },
  
    // DEMONIC
    {
      id: 124,
      name: "Blood Imp",
      description: "Feeds on stray energy.",
      image: "blood_imp.png",
      quantity: 1,
      rarity: "demonic",
      type: "pet",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Luck", value: 12 }],
    },
    {
      id: 125,
      name: "Chained Worg",
      description: "Barely contained fury.",
      image: "chained_worg.png",
      quantity: 1,
      rarity: "demonic",
      type: "pet",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Bonus EXP", value: 15 }],
    },
    {
      id: 126,
      name: "Screeching Bat",
      description: "Its scream shatters willpower.",
      image: "screeching_bat.png",
      quantity: 1,
      rarity: "demonic",
      type: "pet",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Raid Cooldown", value: 12 }],
    },
  
    // GOD
    {
      id: 127,
      name: "Solar Lion Cub",
      description: "Radiates the warmth of the heavens.",
      image: "solar_lion_cub.png",
      quantity: 1,
      rarity: "god",
      type: "pet",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Bonus EXP", value: 18 }],
    },
    {
      id: 128,
      name: "Wingserpent Hatchling",
      description: "A divine dragonling of storms.",
      image: "wingserpent_hatchling.png",
      quantity: 1,
      rarity: "god",
      type: "pet",
      rate: 0.1,
      require: 150,
      buff: [{ type: "RNG Cooldown", value: 15 }],
    },
    {
      id: 129,
      name: "Golden Antelope",
      description: "Swift as the light itself.",
      image: "golden_antelope.png",
      quantity: 1,
      rarity: "god",
      type: "pet",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Luck", value: 15 }],
    },
  
    // CELESTIAL
    {
      id: 130,
      name: "Eclipsed Crane",
      description: "Born of sun and shadow.",
      image: "eclipsed_crane.png",
      quantity: 1,
      rarity: "celestial",
      type: "pet",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Bonus EXP", value: 25 }],
    },
    {
      id: 131,
      name: "Aurora Wolf Pup",
      description: "Coated in shimmering lights.",
      image: "aurora_wolf_pup.png",
      quantity: 1,
      rarity: "celestial",
      type: "pet",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Luck", value: 20 }],
    },
    {
      id: 132,
      name: "Stardream Jelly",
      description: "Drifts between stars and wishes.",
      image: "stardream_jelly.png",
      quantity: 1,
      rarity: "celestial",
      type: "pet",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Raid Cooldown", value: 20 }],
    },
  ];
  