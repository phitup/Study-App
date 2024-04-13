import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import Text from '@/components/Text'
import {Images, colors, fonts, metrics, responsiveFont, responsiveHeight} from '@/themes'
import {Touchable} from '@/components'
import {navigate} from '@/navigation/NavigationService'
import RouteKey from '@/navigation/RouteKey'

const UserInfo: React.FC = () => {
  const openNotification = () => {
    navigate(RouteKey.NotificationScreen)
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <FastImage
          source={{uri: 'https://www.meme-arsenal.com/memes/b9e965b5ea1530e5e48b6c2a4c5bd26c.jpg'}}
          style={styles.avatar}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.infoContent}>
          <Text style={styles.greeting}>Chào bạn</Text>
          <Text style={styles.name}>Như Hải</Text>
        </View>
      </View>
      <Touchable onPress={openNotification}>
        <Image source={Images.IC_NOTIFICATION} style={styles.notification} resizeMode="contain" />
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>10</Text>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContent: {
    marginLeft: metrics.xs,
  },
  avatar: {
    width: metrics.huge,
    height: metrics.huge,
    borderRadius: metrics.large,
  },
  greeting: {
    fontSize: responsiveFont(15),
    fontFamily: fonts.bold,
    color: colors.black,
  },
  name: {
    fontSize: responsiveFont(15),
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginTop: metrics.tiny,
    color: '#109B04',
  },
  notification: {
    width: metrics.medium,
    height: metrics.medium,
  },
  badge: {
    position: 'absolute',
    top: responsiveHeight(-12),
    right: responsiveHeight(-9),
    width: metrics.medium,
    height: metrics.medium,
    borderRadius: responsiveHeight(10),
    backgroundColor: colors.red,

    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeNumber: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(10),
    color: colors.white,
  },
})

export default UserInfo
