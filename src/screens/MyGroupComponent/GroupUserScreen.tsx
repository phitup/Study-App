import {ScreenContainer, Text, Touchable} from '@/components'
import NavigationHeader from '@/components/NavigationHeader'
import RouteKey from '@/navigation/RouteKey'
import {GroupStackList} from '@/navigation/types'
import {Images, responsiveHeight} from '@/themes'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

type Props = NativeStackScreenProps<GroupStackList, RouteKey.GroupUserScreen>

const GroupUserScreen: React.FC<Props> = () => {
  const rightItem = (
    <Touchable style={styles.bgSetting}>
      <Image source={Images.IC_SETTING} style={styles.iconSetting} resizeMode="cover" />
    </Touchable>
  )

  return (
    <>
      <NavigationHeader rightItem={rightItem} />
      <ScreenContainer>
        <View style={styles.card}>
          <View style={styles.info}>
            <FastImage
              source={{uri: 'https://www.meme-arsenal.com/memes/b9e965b5ea1530e5e48b6c2a4c5bd26c.jpg'}}
              style={styles.avatar}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View>
              <Text>Nguyễn Như Hải</Text>
              <Text>nnhaigl</Text>
            </View>
          </View>
        </View>
      </ScreenContainer>
    </>
  )
}

const styles = StyleSheet.create({
  bgSetting: {
    backgroundColor: '#F8A435',
    padding: responsiveHeight(5),
    borderRadius: responsiveHeight(20),
  },
  iconSetting: {
    width: responsiveHeight(24),
    height: responsiveHeight(24),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingTop: responsiveHeight(20),
    paddingHorizontal: responsiveHeight(20),
  },
  avatar: {
    width: responsiveHeight(63),
    height: responsiveHeight(63),
    borderRadius: responsiveHeight(10),
  },
})

export default GroupUserScreen
