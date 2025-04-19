import React from 'react'
import Card from './Card'
import CardBody from './CardBody'
import { Text, View } from 'react-native'
import { MdiDice3 } from '../icons/Dice'
import { MynauiMathSquareSolid } from '../icons/Math'
import { MaterialSymbolsSwordsRounded } from '../icons/Sword'
import { MdiLuck } from '../icons/Clover'
import { CarbonSkillLevelAdvanced } from '../icons/Level'
import { colors } from '@/constant/color'

type Props = {}

const StatusCard = (props: Props) => {
    const statusList = [
        {
            title: "RNG Cooldown",
            value: "100",
            icon: <MdiDice3 color={colors['gray-light']} width={18} height={18} />
        },
        {
            title: "Raid Cooldown",
            value: "100",
            icon: <MaterialSymbolsSwordsRounded color={colors['gray-light']} width={18} height={18} />
        },
        {
            title: "Math Cooldown",
            value: "100",
            icon: <MynauiMathSquareSolid color={colors['gray-light']} width={18} height={18} />
        },
        {
            title: "Bonus EXP",
            value: "100",
            icon: <CarbonSkillLevelAdvanced color={colors.golden} width={18} height={18} />
        },
        {
            title: "Luck",
            value: "100",
            icon: <MdiLuck color={colors.primary} width={18} height={18} />
        },

    ]
    return (
        <Card className=''>
            <CardBody
                className='rounded-lg p-0 px-0'
                style={{ padding: 0, paddingLeft: 0, paddingRight: 0 }}
            >
                {statusList.map((item, index) => (
                    <View
                        className={`flex flex-row justify-between border-gray p-3 px-4
                            ${index === 0 ? 'rounded-t-lg' : 'border-t-[0.25px]'}
                            ${index === statusList.length - 1 ? 'rounded-b-lg' : ''}`}
                        key={index}
                    >
                        <View className='flex flex-row items-center gap-x-3'>
                            {item.icon}
                            <Text
                                className={`text-sm font-bold 
                                    ${item.title === "Luck" ? 'text-primary' :
                                        item.title === "Bonus EXP" ? 'text-golden' : ' text-gray-light'}`}>
                                {item.title}
                            </Text>
                        </View>
                        <Text className={`text-sm font-bold 
                                    ${item.title === "Luck" ? 'text-primary' :
                                        item.title === "Bonus EXP" ? 'text-golden' : ' text-gray-light'}`}>
                            {item.value}
                        </Text>
                    </View>
                ))}
            </CardBody>
        </Card>
    )
}

export default StatusCard