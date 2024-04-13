import {Text, Touchable} from '@/components'
import {Images, colors, fonts, getColorOpacity, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native'

interface Props {
  icon: ImageSourcePropType
  title: string
  onPress?: () => void
}

const Section: React.FC<Props> = ({icon, title, onPress}) => (
  <Touchable style={styles.container} onPress={onPress}>
    <View style={styles.left}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.text}>{title}</Text>
    </View>
    <Image source={Images.IC_ARROW_RIGHT} style={styles.arrowIcon} resizeMode="contain" />
  </Touchable>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveHeight(10),
    paddingVertical: responsiveHeight(12),
    borderWidth: 1,
    borderColor: getColorOpacity(colors.black, 0.25),
    borderRadius: responsiveHeight(6),
    marginTop: responsiveHeight(14),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: metrics.xxl,
    height: metrics.xxl,
    marginRight: responsiveHeight(8),
  },
  text: {
    fontSize: responsiveFont(16),
    fontFamily: fonts.regular,
    color: colors.black,
  },
  arrowIcon: {
    width: metrics.large,
    height: metrics.large,
  },
})

export default Section
