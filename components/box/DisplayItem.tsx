import React from 'react'
import { View, Text } from 'react-native'
import SoundTouchable from '../SoundTouchable'
import { Plus } from '../icons/Plus'
import { colors } from '@/constant/color'

type Props = {
    content: string
}

const DisplayItem = ({ content }: Props) => {
  return (
    <SoundTouchable className='bg-background-dark flex flex-col items-center justify-center border-4 border-background-bright rounded-lg w-16 h-16'>
        <Plus width={24} height={24} color={colors['background-bright']} />
        <Text className='text-xs text-background-bright font-bold'>{content}</Text>
    </SoundTouchable>
  )
}

export default DisplayItem