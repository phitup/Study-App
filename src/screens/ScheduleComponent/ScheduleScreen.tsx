import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren} from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'
import Text from '../../components/Text'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.ScheduleScreen> & PropsWithChildren

const ScheduleScreen: React.FC<Props> = () => {
  console.log('cccccc')
  return (
    <ScreenContainer>
      <Text>Schedule screen</Text>
    </ScreenContainer>
  )
}

export default ScheduleScreen
