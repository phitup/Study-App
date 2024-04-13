import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import RouteKey from './RouteKey'
import {AppStackParamList} from './types'
import {LoginScreen, SignUpScreen} from '@/screens'
import {optionsMatch} from './ScreenService'

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={RouteKey.LoginScreen}
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      headerShown: false,
    }}>
    <Stack.Screen
      name={RouteKey.LoginScreen}
      component={LoginScreen}
      options={optionsMatch(RouteKey.LoginScreen)}
    />
    <Stack.Screen
      name={RouteKey.SignUpScreen}
      component={SignUpScreen}
      options={optionsMatch(RouteKey.SignUpScreen)}
    />
  </Stack.Navigator>
)
