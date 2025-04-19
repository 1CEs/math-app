import React from 'react'
import { View, Text } from 'react-native'
import HelperBox from '../box/HelperBox'
import { MdiLuck } from '../icons/Clover'
import LevelProgress from '../card/LevelProgress'
import { CarbonSkillLevelAdvanced } from '../icons/Level'
import { PhLightningFill } from '../icons/Lightning'
import { TablerClockFilled } from '../icons/Clock'
import { colors } from '@/constant/color'

type Props = {}

const Helper = (props: Props) => {
    const helper = [
        {
            title: "Reset",
            icon: <PhLightningFill color={colors['gray']} width={18} height={18} />
        },
        {
            title: "+ Luck",
            icon: <MdiLuck color={colors['gray']} width={18} height={18} />
        },
        {
            title: "+ EXP",
            icon: <CarbonSkillLevelAdvanced color={colors['gray']} width={18} height={18} />
        },
        {
            title: "+ 1 Min",
            icon: <TablerClockFilled color={colors['gray']} width={18} height={18} />
        }
    ]
    return (
        <View className='flex flex-row gap-x-2'>
            {
                helper.map((item, index) => (
                    <HelperBox key={index} content={item.title} icon={item.icon} />
                ))
            }
        </View>
    )
}

export default Helper