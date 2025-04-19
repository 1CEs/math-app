import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DisplayItem from './box/DisplayItem'
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg'

type Props = {}

const CARD_WIDTH = 350
const CARD_HEIGHT = 400

const Equipments = (props: Props) => {
    return (
        <View className='flex flex-col overflow-hidden rounded-lg border-2 border-black justify-center gap-y-6 p-4'>
            <Svg
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
                style={{...StyleSheet.absoluteFillObject }}
            >
                <Defs>
                    <Pattern
                        id="minorGrid"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                    >
                        <Path
                            d="M 160 0 L 0 0 0 160"
                            fill="none"
                            stroke="#1a1f26"
                            strokeWidth="1"
                        />
                    </Pattern>
                </Defs>
                <Rect width={CARD_WIDTH} height={CARD_HEIGHT} fill="url(#minorGrid)" />
            </Svg>
            <View className='flex flex-row justify-center'>
                <DisplayItem content='Helmet' />
            </View>
            <View className='flex flex-row justify-center gap-x-6'>
                <DisplayItem content='Weapon' />
                <DisplayItem content='Armor' />
                <DisplayItem content='Gloves' />
            </View>
            <View className='flex flex-row justify-center gap-x-6'>
                <DisplayItem content='Shoes' />
            </View>
            <View className='flex flex-row justify-center gap-x-6'>
                <DisplayItem content='Back' />
                <DisplayItem content='Artifact' />
            </View>
        </View>
    )
}

export default Equipments