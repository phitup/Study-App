import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {useSelector} from 'react-redux'
import {navigationRef} from './NavigationService'
import {AuthNavigator} from './StackNavigation'
import MainNavigatior from './MainNavigation'
import {selectAccessToken} from '../store/Auth'

function AppNavigation(): React.ReactElement {
  const accessToken = useSelector(selectAccessToken)

  return (
    <NavigationContainer ref={navigationRef}>
      {!accessToken && <AuthNavigator />}
      {accessToken && <MainNavigatior />}
    </NavigationContainer>
  )
}

export default AppNavigation
