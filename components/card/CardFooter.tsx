import React from 'react'
import { View, ViewProps } from 'react-native'

type Props = ViewProps & {
    children: React.ReactNode
    className?: string
}

const CardFooter = ({ children, className, ...props }: Props) => {
  return (
    <View {...props} className={`rounded-b-lg p-3 px-4 bg-background-bright border-t-[0.25px] border-gray ${className}`}>
        {children}
    </View>
  )
}

export default CardFooter