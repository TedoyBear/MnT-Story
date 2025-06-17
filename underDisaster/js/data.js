// Data for Items (Updated with new types and consistent rarity)
const items = [
    //Weapon
    {
        id: 10001,
        name: "Dual Red Longsword",
        description: "Dual Longsowrd with red color domination",
        type: "Weapon",
        effect: "Physical DMG 77%, Lightning Strikes ",
        rarity: "Rare"
    },
    //Armor
    {
        id: 13001,
        name: "Red Armor",
        description: "Armor with red color domination",
        type: "Armor",
        effect: "True DEF 20%, Regen HP +5/s When not exposed to damage for 3 second",
        rarity: "Rare"
    },

];

// Data for Skills (unchanged from previous update)
const skills = [
    {
        id: 20001,
        name: "Phoniex Slash",
        description: "A white slash that shot straight to the front of the slash.",
        type: "Offensive Skills",
        effect: "AoE 60% Magic Damage",
        manaCost: 5,
        cooldown: "No Cooldown"
    },
    {
        id: 20002,
        name: "Meteor Flames",
        description: "Summoning 1 burning meteor",
        type: "Offensive Skills",
        effect: "Burn, AoE 128% Magic Damage",
        manaCost: 120,
        cooldown: 5
    },
];

// Data for Characters (unchanged from previous update)
const characters = [
    {
        id: 1,
        name: "Samuel Tara",
        role: ["Fighter", "mage"],
        race: "High Human",
        level: 100,
        power: 4520,
        description: "Seorang ksatria pemberani yang berjuang untuk keadilan, bersenjatakan pedang suci.",
        stats: {
            hp: { base: 4769, withItem: 4769 },
            physicalDmg: { base: 448, withItem: 792 },
            magicDmg: { base: 354, withItem: 354 },
            physicalDef: { base: 344, withItem: 412 },
            magicDef: { base: 341, withItem: 409 },
            agi: { base: 400, withItem: 400 },
            mana: { base: 4555, withItem: 4555 }
        },
        equippedItems: [10001, 13001],
        learnedSkills: [20001, 20002]
    },
    {
        id: 2,
        name: "Penyihir Bayangan",
        role: ["Mage", "Necromancer"],
        race: "Elf",
        level: 48,
        power: 1500,
        description: "Menguasai mantra-mantra gelap untuk menghancurkan musuh dan memanggil roh.",
        stats: {
            hp: { base: 900, withItem: 1200 },
            physicalDmg: { base: 20, withItem: 30 },
            magicDmg: { base: 180, withItem: 250 },
            physicalDef: { base: 40, withItem: 55 },
            magicDef: { base: 120, withItem: 160 },
            agi: { base: 70, withItem: 85 },
            mana: { base: 500, withItem: 650 }
        },
        equippedItems: [104, 13001],
        learnedSkills: [202, 207, 210]
    },
];