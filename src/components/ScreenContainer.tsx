import React, {PropsWithChildren} from 'react'
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native'
import {colors, metrics} from '../themes'

interface IRowProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

const ScreenContainer = ({children, style, ...rest}: IRowProps) => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.medium,
  },
})

export default ScreenContainer
