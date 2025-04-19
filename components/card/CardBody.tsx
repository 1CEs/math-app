import React from 'react'
import { View, ViewProps } from 'react-native'

type Props = ViewProps & {
    children: React.ReactNode
    className?: string
}

const CardBody = ({ children, className, ...props }: Props) => {
  return (
    <View {...props} className={`p-2 px-4 bg-background-bright ${className}`}>
        {children}
    </View>
  )
}

export default CardBody