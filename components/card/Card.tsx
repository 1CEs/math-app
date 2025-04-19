import React from 'react'
import { View, ViewProps } from 'react-native'

type Props = ViewProps & {
    children: React.ReactNode
    className?: string
}

const Card = ({ children, className, ...props }: Props) => {
  return (
    <View {...props} className={`rounded-lg text-white ${className}`}>
        {children}
    </View>
  )
}

export default Card