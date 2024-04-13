/* eslint-disable no-useless-escape */
import {Appearance, Dimensions, Platform, StatusBar} from 'react-native'
import {isIOS} from '../themes'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

export function getStatusBarHeight(skipAndroid = false): number {
  if (isIOS) {
    return isIphoneX() ? 65 : 30
  }
  if (skipAndroid) {
    return 0
  }

  return StatusBar.currentHeight || 0
}

export function isIphoneX(): boolean {
  const {width, height} = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 852 ||
      width === 852 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  )
}

export function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function isDarkMode(): boolean {
  return Appearance.getColorScheme() === 'dark'
}

export function isObject<T>(val: T): boolean {
  return typeof val === 'object' && val?.constructor !== FormData && val !== null
}

const guidelineBaseHeight = 812

export const scale = (size: number) => (screenHeight / guidelineBaseHeight) * size

export const BaseDimention = {
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 52 + 34 : 72) : 56,
  tabBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? scale(52) + 30 : scale(52)) : scale(52),
  navBarPaddingTop: Platform.OS === 'ios' ? (isIphoneX() ? 34 : 20) : 0,
  tabBarPaddingBottom: Platform.OS === 'ios' ? (isIphoneX() ? 34 : 0) : 0,
  marginKeyBoard: Platform.OS === 'ios' ? (isIphoneX() ? 96 : 84) : 0,
}
