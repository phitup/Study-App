// @ts-nocheck
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AppStackParamList, TabStackList} from './types'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import RouteKey from './RouteKey'
import {FontSizes, Images, colors, fonts, isIOS} from '../themes'
import Text from '../components/Text'
import {Image, StyleSheet} from 'react-native'
import {
  CommunityScreen,
  GroupDetailScreen,
  GroupUserScreen,
  HomeScreen,
  MyGroupScreen,
  NotificationScreen,
  ScheduleScreen,
  SettingScreen,
} from '@/screens'

const Stack = createNativeStackNavigator<AppStackParamList>()

const Tab = createBottomTabNavigator<TabStackList>()

type TabIconProps = {
  focused: boolean
  imageActive: boolean
  imageInactive: boolean
}

const TabIcon = ({focused, imageActive, imageInactive}: TabIconProps) => (
  <Image source={focused ? imageActive : imageInactive} resizeMode="contain" />
)

const MainNavigator = () => {
  const tabs = [
    {
      name: RouteKey.HomeScreen,
      label: 'Home',
      active: Images.IC_HOME_ACTIVE_TAB,
      inactive: Images.IC_HOME_TAB,
      component: HomeScreen,
    },
    {
      name: RouteKey.CommunityScreen,
      label: 'Cộng Đồng',
      active: Images.IC_COMMUNITY_ACTIVE_TAB,
      inactive: Images.IC_COMMUNITY_TAB,
      component: CommunityScreen,
    },
    {
      name: RouteKey.ScheduleScreen,
      label: 'Schedule',
      active: Images.IC_SCHEDULE_TAB,
      inactive: Images.IC_SCHEDULE_TAB,
      component: ScheduleScreen,
    },
    {
      name: RouteKey.SettingScreen,
      label: 'Profile',
      active: Images.IC_SETTING_TAB,
      inactive: Images.IC_SETTING_TAB,
      component: SettingScreen,
    },
  ]

  const renderTabIcon = ({focused, imageActive, imageInactive}) => (
    <TabIcon focused={focused} imageActive={imageActive} imageInactive={imageInactive} />
  )

  const renderTabLabel = ({focused, label}) => (
    <Text style={[styles.tabTitle, {color: !focused ? colors.black : colors.tabActive}]}>{label}</Text>
  )

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: isIOS ? 90 : 65,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          color: colors.white,
        },
      }}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            options={{
              tabBarLabel: ({focused}) => renderTabLabel({focused, label: tab.label}),
              tabBarIcon: ({focused}) =>
                renderTabIcon({
                  focused,
                  imageActive: tab.active,
                  imageInactive: tab.inactive,
                }),
            }}
            name={tab.name}
            component={tab.component}
          />
        ))}
      </Tab.Group>
    </Tab.Navigator>
  )
}

const MainNavigatior = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      headerShown: false,
    }}
    initialRouteName={RouteKey.MainStack}>
    <Stack.Screen options={{gestureEnabled: false}} name={RouteKey.MainStack} component={MainNavigator} />
    <Stack.Screen name={RouteKey.NotificationScreen} component={NotificationScreen} />
    <Stack.Screen name={RouteKey.MyGroupScreen} component={MyGroupScreen} />
    <Stack.Screen name={RouteKey.GroupDetailScreen} component={GroupDetailScreen} />
    <Stack.Screen name={RouteKey.GroupUserScreen} component={GroupUserScreen} />
  </Stack.Navigator>
)

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: FontSizes.small,
    fontFamily: fonts.bold,
  },
})

export default MainNavigatior
