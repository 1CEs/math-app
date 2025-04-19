
type RarityType = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'unique' | 'cosmic' | 'demonic' | 'god' | 'celestial';

type ItemType = 'weapon' | 'armor' | 'helmet' | 'shoes' | 'artifact' | 'back' | 'gloves' | 'pet' | 'mount'; 

type BuffType = 'RNG Cooldown' | 'Raid Cooldown' | 'Math Cooldown' | 'Bonus EXP' | 'Luck';

type Item = {
    id: number;
    name: string;
    description: string;
    image: string;
    quantity: number;
    rarity: RarityType;
    type: ItemType;
    rate: number;
    require: number;
    buff?: {
        type: BuffType;
        value: number;
    }[];
}
