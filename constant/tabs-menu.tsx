import { MaterialSymbolsPersonRounded } from '@/components/icons/Person';
import { MynauiMathSquareSolid } from '@/components/icons/Math';
import { MdiDice3 } from '@/components/icons/Dice';
import { MaterialSymbolsSwordsRounded } from '@/components/icons/Sword';
import { TablerMenu4 } from '@/components/icons/Hamburger';

export const tabsMenu:TabsMenu[] = [
    {
        id: 1,
        title: 'Character',
        path: 'index',
        icon: (color: string = "#eee", size: number = 24) => <MaterialSymbolsPersonRounded color={color} width={size} height={size}/>,
    },
    {
        id: 2,
        title: 'Math',
        path: 'math',
        icon: (color: string = "#eee", size: number = 24) => <MynauiMathSquareSolid color={color} width={size} height={size}/>,
    },
    {
        id: 3,
        title: 'RNG',
        path: 'rng',
        icon: (color: string = "#eee", size: number = 24) => <MdiDice3 color={color} width={size} height={size}/>,
    },
    {
        id: 4,
        title: 'Raid',
        path: 'raid',
        icon: (color: string = "#eee", size: number = 24) => <MaterialSymbolsSwordsRounded color={color} width={size} height={size}/>,
    },
    {
        id: 5,
        title: 'Menu',
        path: 'menu',
        icon: (color: string = "#eee", size: number = 24) => <TablerMenu4 color={color} width={size} height={size}/>,
    },
]
