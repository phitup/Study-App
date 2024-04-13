import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren} from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'
import Text from '../../components/Text'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.CommunityScreen> & PropsWithChildren

const CommunityScreen: React.FC<Props> = () => (
  <ScreenContainer>
    <Text>Community screen</Text>
  </ScreenContainer>
)

export default CommunityScreen
