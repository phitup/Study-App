import {Touchable} from '@/components'
import {Images, colors, responsiveHeight} from '@/themes'
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import NotificationTabView from './components/NotificationTabView'
import NavigationHeader from '@/components/NavigationHeader'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MainStackList} from '@/navigation/types'
import RouteKey from '@/navigation/RouteKey'

type Props = NativeStackScreenProps<MainStackList, RouteKey.NotificationScreen>

const NotificationScreen: React.FC<Props> = () => {
  const rightItem = (
    <Touchable style={styles.bgSetting}>
      <Image source={Images.IC_SETTING} style={styles.iconSetting} resizeMode="cover" />
    </Touchable>
  )

  return (
    <>
      <NavigationHeader title="Thông Báo" rightItem={rightItem} />
      <View style={styles.container}>
        <NotificationTabView />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(10),
    backgroundColor: colors.white,
  },
  bgSetting: {
    backgroundColor: '#F8A435',
    padding: responsiveHeight(5),
    borderRadius: responsiveHeight(20),
  },
  iconSetting: {
    width: responsiveHeight(24),
    height: responsiveHeight(24),
  },
})

export default NotificationScreen
