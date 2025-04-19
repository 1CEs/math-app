import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    content: string
    icon: React.ReactNode
}

const HelperBox = ({ content, icon }: Props) => {
    return (
        <View className='flex flex-1 relative items-center justify-center gap-x-2 h-16 bg-background-bright rounded-lg'>

            {/* Ads label */}
            <Text className='absolute right-0 top-0 text-white text-[8px] p-[2px] bg-primary rounded-sm font-bold'>
                Ads
            </Text>

            {/* Main content */}
            <View className='flex items-center gap-y-[2px]'>
                {icon}
                <Text className='text-gray-light text-xs font-bold'>
                    {content}
                </Text>
            </View>
        </View>
    )
}

export default HelperBox
