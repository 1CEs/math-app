import React from 'react'
import { View, Text, ViewProps } from 'react-native'
import { EntypoInfoWithCircle } from '../icons/Info'
import { colors } from '@/constant/color'
import SoundTouchable from '../SoundTouchable'
import Tooltip from '../Tooltip'

type Props = ViewProps & {
  title: string
  icon?: React.ReactNode
  className?: string
  hasInfo?: boolean
  infoContent?: string
}

const CardHeader = ({ title, icon, className, hasInfo, infoContent = 'Information about this section', ...props }: Props) => {
  return (
    <View {...props} className={`flex flex-row items-center gap-x-4 rounded-t-lg p-3 px-4 bg-background-dark ${className}`}>
      {icon && icon}
      <View className='flex flex-row items-center justify-between gap-x-2 flex-1'>
        <Text className='text-white font-bold'>{title}</Text>
        {hasInfo &&
          <Tooltip content={infoContent}>
            <EntypoInfoWithCircle color={colors['background-bright']} width={18} height={18} />
          </Tooltip>
        }
      </View>
    </View>
  )
}

export default CardHeader