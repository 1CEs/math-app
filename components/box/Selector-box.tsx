import { colors } from '@/constant/color'
import React, { useEffect, useState } from 'react'
import { View, ViewProps, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { Audio } from 'expo-av'

type Props = ViewProps & {
  isSelected: boolean
  handleSelect: () => void
}

const SelectorBox = (props: Props) => {
  return (
    <View style={{
      ...(props.isSelected ? styles.active : styles.inactive),
      borderRadius: 15,
      borderWidth: 3,
      padding: 10,
      overflow: 'hidden',
    }}>
      <TouchableOpacity {...props}
        onPress={props.handleSelect}
        className={`${props.className}`}
      >
        <ImageBackground
          source={require('../../assets/game/humans/angel.png')}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="cover"
          imageStyle={{
            transform: [
              { scale: 2.5 },
              { translateY: 15 }
            ]
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  active: {
    borderColor: colors.primary,
  },
  inactive: {
    borderColor: colors.gray,
  }
})

export default SelectorBox