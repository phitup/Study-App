import React from 'react'
import {View} from 'react-native'
import MemberItem from './MemberItem'
import {navigate} from '@/navigation/NavigationService'
import RouteKey from '@/navigation/RouteKey'

const Members = () => {
  const openGroupUser = () => {
    navigate(RouteKey.GroupUserScreen)
  }

  return (
    <View>
      <MemberItem onPress={openGroupUser} />
      <MemberItem />
      <MemberItem />
      <MemberItem />
    </View>
  )
}

export default Members
