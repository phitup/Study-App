import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {Images, colors, getColorOpacity, metrics, responsiveHeight} from '@/themes'

import {InputField, ScreenContainer} from '@/components'
import {ListNewPost, Section, UserInfo} from './components'
import {AppStackParamList} from '@/navigation/types'
import RouteKey from '@/navigation/RouteKey'
import NavigationHeader from '@/components/NavigationHeader'
import {navigate} from '@/navigation/NavigationService'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.HomeScreen> & PropsWithChildren

const HomeScreen: React.FC<Props> = () => {
  const navigateToGroup = () => {
    navigate(RouteKey.MyGroupScreen)
  }

  return (
    <>
      <NavigationHeader leftItem={<UserInfo />} />
      <ScreenContainer style={styles.container}>
        <InputField
          style={styles.input}
          // onChangeText={(text: string) => onChangeText(text, SignUpForm.email)}
          placeholder="Tài khoản hoặc email"
          rightItem={<Image source={Images.IC_SEARCH} style={styles.iconSearch} resizeMode="contain" />}
        />
        <View style={styles.section}>
          <Section icon={Images.IC_BOOK} title="Bài học của tôi" />
          <Section icon={Images.IC_GROUP} title="Nhóm của tôi" onPress={navigateToGroup} />
          <Section icon={Images.IC_COMMUNITY} title="Cộng đồng" />
        </View>
        <ListNewPost />
      </ScreenContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.xxl,
  },
  input: {
    backgroundColor: getColorOpacity(colors.input, 0.3),
    paddingRight: metrics.sMedium,
  },
  iconSearch: {
    width: metrics.medium,
    height: metrics.medium,
  },
  section: {
    marginTop: responsiveHeight(10),
  },
})

export default HomeScreen
