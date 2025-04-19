import React from 'react'
import { View, Text } from 'react-native'
import SoundTouchable from '../SoundTouchable'
import { PhLightningFill } from '../icons/Lightning'
import { colors } from '@/constant/color'
import SolveTab from './SolveTab'

type Props = {}

const RNGSubTabs = (props: Props) => {
    const tabs = [
        {
            title: "Solves",
            icon: <PhLightningFill color={colors['gray']} width={18} height={18} />
        },
        {
            title: "Rewards (0)",
            icon: <PhLightningFill color={colors['gray']} width={18} height={18} />
        },
        {
            title: "Chances",
            icon: <PhLightningFill color={colors['gray']} width={18} height={18} />
        }
    ]
    return (
        <View className='flex'>
            <View className='flex flex-row'>
                {
                    tabs.map((tab, index) => (
                        <SoundTouchable
                            key={index}
                            className={`p-3 ${index === 0 ? 'rounded-tl-lg bg-background-bright' : 'bg-background-dark'} ${index === tabs.length - 1 ? 'rounded-tr-lg bg-background-bright' : ''}`}
                        >
                            <Text className={` text-xs font-bold ${index === 0 ? 'text-white' : 'text-gray'}`}>
                                {tab.title}
                            </Text>
                        </SoundTouchable>
                    ))
                }
            </View>
            <View className='bg-background-bright p-4 rounded-b-lg rounded-tr-lg'>
                <SolveTab />
            </View>
        </View>
    )
}

export default RNGSubTabs