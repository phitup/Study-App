import {Images, responsiveHeight} from '@/themes'
import React from 'react'
import {Image, StyleSheet} from 'react-native'
import NavigationHeader from '@/components/NavigationHeader'
import {ScreenContainer, Touchable} from '@/components'
import GroupItem from './components/GroupItem'
import {navigate} from '@/navigation/NavigationService'
import RouteKey from '@/navigation/RouteKey'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {GroupStackList} from '@/navigation/types'

type Props = NativeStackScreenProps<GroupStackList, RouteKey.MyGroupScreen>

const MyGroupScreen: React.FC<Props> = () => {
  const openGroupDetail = () => {
    navigate(RouteKey.GroupDetailScreen)
  }

  const rightItem = (
    <Touchable style={styles.bgSetting}>
      <Image source={Images.IC_SETTING} style={styles.iconSetting} resizeMode="cover" />
    </Touchable>
  )

  return (
    <>
      <NavigationHeader title="Nhóm" rightItem={rightItem} />
      <ScreenContainer>
        <GroupItem onPress={openGroupDetail} />
        <GroupItem />
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
})

export default MyGroupScreen
