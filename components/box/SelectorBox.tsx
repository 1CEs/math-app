import { colors } from '@/constant/color'
import React from 'react'
import { View, ViewProps, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native'
import SoundTouchable from '../SoundTouchable'

type Props = ViewProps & {
  isSelected: boolean
  imagePath: ImageSourcePropType
  handleSelect: () => void
}

const SelectorBox = (props: Props) => {
  return (
    <View style={{
      ...(props.isSelected ? styles.active : styles.inactive),
      borderRadius: 15,
      borderWidth: 2,
      padding: 10,
      overflow: 'hidden',
    }}>
      <SoundTouchable {...props}
        onPress={props.handleSelect}
        className={`${props.className}`}
      >
        <ImageBackground
          source={props.imagePath}
          style={{
            width: 25,
            height: 25,
          }}
          resizeMode="cover"
          imageStyle={{
            transform: [
              { scale: 3 },
              { translateY: 6 }
            ]
          }}
        />
      </SoundTouchable>
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