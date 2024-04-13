import {colors, fonts, responsiveFont, responsiveHeight} from '@/themes'
import {BaseDimention} from '@/utilities/utils'
import React from 'react'
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import {Route, TabBar, TabBarProps, TabViewProps} from 'react-native-tab-view'

type Props<T extends Route> = Parameters<NonNullable<TabViewProps<T>['renderTabBar']>>[0] &
  TabBarProps<T> & {
    labelStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
    itemStyle?: StyleProp<ViewStyle>
    indicatorStyle?: StyleProp<ViewStyle>
  }

const TabBarComponent = <T extends Route>(props: Props<T>) => (
  <TabBar
    {...props}
    indicatorStyle={[styles.indicator, props.indicatorStyle]}
    activeColor={colors.white}
    android_ripple={{borderless: true, color: '#F5F7FA'}}
    inactiveColor={'#243656'}
    labelStyle={[styles.label, props.labelStyle]}
    tabStyle={[styles.item, props.itemStyle]}
    style={[styles.container, props.containerStyle]}
  />
)

export default React.memo(TabBarComponent)

const styles = StyleSheet.create({
  container: {
    borderRadius: responsiveHeight(10),
    marginHorizontal: responsiveHeight(40),
    backgroundColor: '#F5F7FA',
  },
  indicator: {
    height: '100%',
    borderRadius: responsiveHeight(10),
    backgroundColor: '#005EA6',
  },
  item: {
    paddingVertical: 3,
    borderRadius: 50,
  },
  label: {
    textTransform: 'none',
    fontFamily: fonts.bold,
    fontSize: BaseDimention.screenWidth < 480 ? responsiveFont(14) : responsiveFont(16),
    color: colors.black,
  },
})
