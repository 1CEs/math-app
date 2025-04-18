const artifactPool: Item[] = [
    // COMMON
    {
      id: 34,
      name: "Faded Scroll",
      description: "An ancient scroll with unreadable ink.",
      image: "faded_scroll.png",
      quantity: 1,
      rarity: "common",
      type: "artifact",
      rate: 10,
      require: 1,
    },
    {
      id: 35,
      name: "Cracked Talisman",
      description: "A talisman missing its core gem.",
      image: "cracked_talisman.png",
      quantity: 1,
      rarity: "common",
      type: "artifact",
      rate: 10,
      require: 1,
    },
    {
      id: 36,
      name: "Weathered Idol",
      description: "A small idol worn by time.",
      image: "weathered_idol.png",
      quantity: 1,
      rarity: "common",
      type: "artifact",
      rate: 10,
      require: 1,
    },
  
    // UNCOMMON
    {
      id: 37,
      name: "Moonstone Charm",
      description: "A charm that softly glows under moonlight.",
      image: "moonstone_charm.png",
      quantity: 1,
      rarity: "uncommon",
      type: "artifact",
      rate: 8,
      require: 5,
    },
    {
      id: 38,
      name: "Sealed Bone Fragment",
      description: "A fragment of an ancient beast, sealed by runes.",
      image: "sealed_bone_fragment.png",
      quantity: 1,
      rarity: "uncommon",
      type: "artifact",
      rate: 8,
      require: 5,
    },
    {
      id: 39,
      name: "Spiritcatcher Vessel",
      description: "A vessel used to trap wandering spirits.",
      image: "spiritcatcher_vessel.png",
      quantity: 1,
      rarity: "uncommon",
      type: "artifact",
      rate: 8,
      require: 5,
    },
  
    // RARE
    {
      id: 40,
      name: "Whispering Locket",
      description: "A locket that murmurs forgotten names.",
      image: "whispering_locket.png",
      quantity: 1,
      rarity: "rare",
      type: "artifact",
      rate: 5,
      require: 10,
      buff: [{ type: "Luck", value: 3 }],
    },
    {
      id: 41,
      name: "Frozen Tear",
      description: "A tear crystalized from the goddess of winter.",
      image: "frozen_tear.png",
      quantity: 1,
      rarity: "rare",
      type: "artifact",
      rate: 5,
      require: 10,
      buff: [{ type: "Bonus EXP", value: 4 }],
    },
    {
      id: 42,
      name: "Verdant Relic",
      description: "An artifact teeming with wild nature’s energy.",
      image: "verdant_relic.png",
      quantity: 1,
      rarity: "rare",
      type: "artifact",
      rate: 5,
      require: 10,
      buff: [{ type: "RNG Cooldown", value: 2 }],
    },
  
    // EPIC
    {
      id: 43,
      name: "Sands of Time",
      description: "A vial containing the last grains of a lost era.",
      image: "sands_of_time.png",
      quantity: 1,
      rarity: "epic",
      type: "artifact",
      rate: 3,
      require: 20,
      buff: [{ type: "Math Cooldown", value: 5 }],
    },
    {
      id: 44,
      name: "Celestial Compass",
      description: "Points to places not on any mortal map.",
      image: "celestial_compass.png",
      quantity: 1,
      rarity: "epic",
      type: "artifact",
      rate: 3,
      require: 20,
      buff: [{ type: "Luck", value: 5 }],
    },
    {
      id: 45,
      name: "Oracle’s Eye",
      description: "An orb that shows glimpses of possible futures.",
      image: "oracles_eye.png",
      quantity: 1,
      rarity: "epic",
      type: "artifact",
      rate: 3,
      require: 20,
      buff: [{ type: "Bonus EXP", value: 6 }],
    },
  
    // LEGENDARY
    {
      id: 46,
      name: "Heart of the Volcano",
      description: "A molten core stolen from a slumbering titan.",
      image: "heart_volcano.png",
      quantity: 1,
      rarity: "legendary",
      type: "artifact",
      rate: 2,
      require: 35,
      buff: [{ type: "Raid Cooldown", value: 7 }],
    },
    {
      id: 47,
      name: "Prism of Lost Worlds",
      description: "Holds the colors of forgotten realms.",
      image: "prism_lost_worlds.png",
      quantity: 1,
      rarity: "legendary",
      type: "artifact",
      rate: 2,
      require: 35,
      buff: [{ type: "RNG Cooldown", value: 6 }],
    },
    {
      id: 48,
      name: "Crown of the Drowned King",
      description: "Worn by a monarch whose name no one recalls.",
      image: "crown_drowned_king.png",
      quantity: 1,
      rarity: "legendary",
      type: "artifact",
      rate: 2,
      require: 35,
      buff: [{ type: "Luck", value: 7 }],
    },
  
    // MYTHIC
    {
      id: 49,
      name: "Astral Grimoire",
      description: "A book written by starlight.",
      image: "astral_grimoire.png",
      quantity: 1,
      rarity: "mythic",
      type: "artifact",
      rate: 1,
      require: 50,
      buff: [{ type: "Bonus EXP", value: 9 }],
    },
    {
      id: 50,
      name: "Phoenix Ashes",
      description: "Remnants of an immortal flame.",
      image: "phoenix_ashes.png",
      quantity: 1,
      rarity: "mythic",
      type: "artifact",
      rate: 1,
      require: 50,
      buff: [{ type: "Math Cooldown", value: 8 }],
    },
    {
      id: 51,
      name: "Caged Cosmos",
      description: "A tiny universe trapped in a crystalline cage.",
      image: "caged_cosmos.png",
      quantity: 1,
      rarity: "mythic",
      type: "artifact",
      rate: 1,
      require: 50,
      buff: [{ type: "Luck", value: 8 }],
    },
  
    // UNIQUE
    {
      id: 52,
      name: "Tear of Gaia",
      description: "A drop of sorrow from the earth goddess.",
      image: "tear_gaia.png",
      quantity: 1,
      rarity: "unique",
      type: "artifact",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Bonus EXP", value: 10 }],
    },
    {
      id: 53,
      name: "Silent Bell",
      description: "A bell that rings only in dreams.",
      image: "silent_bell.png",
      quantity: 1,
      rarity: "unique",
      type: "artifact",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Raid Cooldown", value: 9 }],
    },
    {
      id: 54,
      name: "Evergrowing Seed",
      description: "A seed that blooms in the void.",
      image: "evergrowing_seed.png",
      quantity: 1,
      rarity: "unique",
      type: "artifact",
      rate: 0.8,
      require: 70,
      buff: [{ type: "Luck", value: 9 }],
    },
  
    // COSMIC
    {
      id: 55,
      name: "Mirror of Endless Skies",
      description: "Reflects not who you are, but who you could be.",
      image: "mirror_endless_skies.png",
      quantity: 1,
      rarity: "cosmic",
      type: "artifact",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Bonus EXP", value: 12 }],
    },
    {
      id: 56,
      name: "Starwoven Cloak",
      description: "Threads spun from the edge of creation.",
      image: "starwoven_cloak.png",
      quantity: 1,
      rarity: "cosmic",
      type: "artifact",
      rate: 0.5,
      require: 100,
      buff: [{ type: "Luck", value: 10 }],
    },
    {
      id: 57,
      name: "Orbitstone",
      description: "A stone around which tiny planets orbit.",
      image: "orbitstone.png",
      quantity: 1,
      rarity: "cosmic",
      type: "artifact",
      rate: 0.5,
      require: 100,
      buff: [{ type: "RNG Cooldown", value: 10 }],
    },
  
    // DEMONIC
    {
      id: 58,
      name: "Devil’s Ledger",
      description: "Records the debts of damned souls.",
      image: "devils_ledger.png",
      quantity: 1,
      rarity: "demonic",
      type: "artifact",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Raid Cooldown", value: 12 }],
    },
    {
      id: 59,
      name: "Wretched Heart",
      description: "Still beating after centuries of darkness.",
      image: "wretched_heart.png",
      quantity: 1,
      rarity: "demonic",
      type: "artifact",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Bonus EXP", value: 14 }],
    },
    {
      id: 60,
      name: "Chains of Torment",
      description: "Used to bind fallen angels.",
      image: "chains_of_torment.png",
      quantity: 1,
      rarity: "demonic",
      type: "artifact",
      rate: 0.3,
      require: 120,
      buff: [{ type: "Luck", value: 12 }],
    },
  
    // GOD
    {
      id: 61,
      name: "Aegis of Dawn",
      description: "Shielded the first heroes of light.",
      image: "aegis_dawn.png",
      quantity: 1,
      rarity: "god",
      type: "artifact",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Bonus EXP", value: 18 }],
    },
    {
      id: 62,
      name: "Scepter of First Light",
      description: "Brought day to a world trapped in endless night.",
      image: "scepter_first_light.png",
      quantity: 1,
      rarity: "god",
      type: "artifact",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Raid Cooldown", value: 15 }],
    },
    {
      id: 63,
      name: "Halo of Infinity",
      description: "A symbol of endless cycles and rebirth.",
      image: "halo_infinity.png",
      quantity: 1,
      rarity: "god",
      type: "artifact",
      rate: 0.1,
      require: 150,
      buff: [{ type: "Luck", value: 15 }],
    },
  
    // CELESTIAL
    {
      id: 64,
      name: "Cradle of Stars",
      description: "Birthplace of constellations.",
      image: "cradle_stars.png",
      quantity: 1,
      rarity: "celestial",
      type: "artifact",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Bonus EXP", value: 25 }],
    },
    {
      id: 65,
      name: "Tapestry of Time",
      description: "Threads weave the destinies of all beings.",
      image: "tapestry_time.png",
      quantity: 1,
      rarity: "celestial",
      type: "artifact",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Math Cooldown", value: 20 }],
    },
    {
      id: 66,
      name: "Voice of the Cosmos",
      description: "Whispers the hidden truths of existence.",
      image: "voice_cosmos.png",
      quantity: 1,
      rarity: "celestial",
      type: "artifact",
      rate: 0.05,
      require: 200,
      buff: [{ type: "Luck", value: 20 }],
    },
  ];
  