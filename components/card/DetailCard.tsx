import { colors } from '@/constant/color';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    title: string;
    value: string;
    isTransform: boolean;
}

const DetailCard = (props: Props) => {
    return (
        <View 
            style={{
                transform: [{ translateX: props.isTransform ? -20 : 0 }]
            }}
            className='flex flex-row gap-x-2 bg-background border border-gray rounded-lg overflow-hidden w-[150px]'>
            <View className=' w-3/6 rounded-lg p-2'>
                <Text className='text-xs text-white'>{props.title}</Text>
            </View>
            <View className='w-3/6 rounded-lg'>
                <LinearGradient
                    colors={[colors.primary, colors.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ padding: 8, borderRadius: 8 }}
                >
                    <Text className='text-xs text-white'>{props.value}</Text>
                </LinearGradient>
            </View>
        </View>
    )
}

export default DetailCard