import React from 'react'
import {Image, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'

import {BaseDimention, scale} from '../utilities/utils'
import {Images, colors, fonts, metrics} from '../themes'
import Touchable from './Touchable'
import {goBack} from '../navigation/NavigationService'

export type Props = {
  style?: StyleProp<ViewStyle>
  contentStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  leftItemStyle?: StyleProp<ImageStyle>
  noShadow?: boolean
  title?: string
  leftItem?: React.ReactNode
  rightItem?: React.ReactNode
  tintColor?: any
  customBackAction?: () => void | undefined
}

const LeftItems: React.FC<Props> = ({customBackAction, leftItemStyle}) => {
  const onBack = () => {
    if (customBackAction) {
      customBackAction()
    } else {
      goBack()
    }
  }
  return (
    <Touchable style={[styles.leftContainer]} onPress={onBack}>
      <Image source={Images.IC_LEFT_ARROW} resizeMode={'contain'} style={[styles.leftIcon, leftItemStyle]} />
    </Touchable>
  )
}

const RightItems = () => <View style={styles.rightSpacing} />

const NavigationHeader: React.FC<Props> = ({
  style,
  contentStyle,
  leftItemStyle,
  title,
  leftItem,
  rightItem,
  customBackAction,
  textStyle,
}) => (
  <View style={[styles.container, style]}>
    <View style={[styles.content, contentStyle]}>
      {leftItem ? leftItem : <LeftItems customBackAction={customBackAction} leftItemStyle={leftItemStyle} />}
      <Text style={[styles.h3, textStyle]} allowFontScaling={false} numberOfLines={1}>
        {title}
      </Text>
      {rightItem ? rightItem : <RightItems />}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: BaseDimention.navBarPaddingTop,
    height: BaseDimention.navBarHeight,
    width: BaseDimention.screenWidth,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.medium,
    alignItems: 'center',
  },
  h3: {
    fontFamily: fonts.regular,
    fontSize: scale(18),
  },
  rightSpacing: {
    marginRight: scale(30),
  },
  leftContainer: {
    paddingRight: scale(12),
    paddingVertical: scale(12),
    justifyContent: 'center',
  },
  leftIcon: {
    width: scale(25),
    height: scale(25),
  },
})

export default NavigationHeader
