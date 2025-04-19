import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  content?: string
}

const Divider = ({ content }: Props) => {
  return (
    <View className='w-full'>
      {!content && (
        <View className='bg-gray p-[0.25px]' />
      )}

      {content && (
        <View className='flex flex-row w-full items-center gap-x-2'>
          <View className='bg-gray p-[0.25px] h-fit flex-1' />
          <Text className='text-gray-light text-sm font-bold'>{content}</Text>
          <View className='bg-gray p-[0.25px] h-fit flex-1' />
        </View>
      )}
    </View>
  )
}

export default Divider