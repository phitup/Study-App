import {ParamListBase} from '@react-navigation/native'
import RouteKey from './RouteKey'

/** Type */
type HomeScreenParams = {
  userId: ''
}
type LoginScreenParams = object
type SignUpScreenParams = object

export interface AppStackParamList extends ParamListBase {
  /** Params */
  [RouteKey.HomeScreen]: HomeScreenParams
  [RouteKey.LoginScreen]: LoginScreenParams
  [RouteKey.SignUpScreen]: SignUpScreenParams
}

export type IItemTabBar = {
  route: string
  title: string
}

export type TabStackList = {
  HomeScreen: undefined
  CommunityScreen: undefined
  ScheduleScreen: undefined
  SettingScreen: undefined
}

export type MainStackList = {
  NotificationScreen: undefined
}

export type GroupStackList = {
  MyGroupScreen: undefined
  GroupDetailScreen: undefined
  GroupUserScreen: undefined
}
