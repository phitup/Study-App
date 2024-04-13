import {Text, Touchable} from '@/components'
import {Images, fonts, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

interface Props {
  onPress?: () => void
}

const MemberItem: React.FC<Props> = ({onPress}) => (
  <Touchable style={styles.container} onPress={onPress}>
    <View style={styles.content}>
      <FastImage
        source={{uri: 'https://www.meme-arsenal.com/memes/b9e965b5ea1530e5e48b6c2a4c5bd26c.jpg'}}
        style={styles.avatar}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.info}>
        <Text style={styles.tier}>DIAMOND</Text>
        <Text style={styles.name}>Nguyễn Như Hải</Text>
        <Text style={styles.status}>Đang hoạt động</Text>
      </View>
    </View>
    <Touchable>
      <Image source={Images.IC_MENU} style={styles.menu} resizeMode="contain" />
    </Touchable>
  </Touchable>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.xxs,
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: metrics.medium,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    width: responsiveHeight(60),
    height: responsiveHeight(60),
    borderRadius: responsiveHeight(30),
  },
  info: {
    marginLeft: metrics.xxs,
    justifyContent: 'space-around',
  },
  tier: {
    fontFamily: fonts.regular,
    fontSize: responsiveFont(10),
    color: '#2A46A9',
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(14),
    color: '#060A18',
  },
  status: {
    fontFamily: fonts.regular,
    fontSize: responsiveFont(12),
    color: '#33C500',
  },
  menu: {
    width: metrics.xl,
    height: metrics.xl,
  },
})

export default MemberItem
