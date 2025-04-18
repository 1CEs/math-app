import React from 'react'
import { View, StyleSheet, useWindowDimensions, ViewProps } from 'react-native'
import Svg, { Defs, RadialGradient, Stop, Pattern, Path, Rect } from 'react-native-svg'

type Props = ViewProps & {
    children: React.ReactNode
}

const Background = ({ children, ...props }: Props) => {
    const { width, height } = useWindowDimensions() // This helps for dynamic screens

    return (
        <View style={styles.container} {...props}>
            <Svg style={StyleSheet.absoluteFillObject} viewBox={`0 0 ${width} ${height}`}>
                <Defs>
                    <Pattern id="minorGrid" width="160" height="160" patternUnits="userSpaceOnUse">
                        <Path d="M 160 0 L 0 0 0 160" fill="none" stroke="#1a1f26" strokeWidth="1" />
                    </Pattern>
                </Defs>

                {/* Solid background */}
                <Rect width={width} height={height} fill="#060a0d" />

                {/* Grid overlay */}
                <Rect width={width} height={height} fill="url(#minorGrid)" />
            </Svg>


            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
})

export default Background
