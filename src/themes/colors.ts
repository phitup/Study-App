import {IColor} from './types'

const colors: IColor = {
  primary: '#65c8c6',
  black: '#1F1F1F',
  white: '#ffffff',
  tabActive: '#0070BA',
  gray: '#454545',
  input: '#DFDEDE',
  red: '#ff0009',
  placeHolder: '#999999',
  error: '#FF5247',
  success: '#23C16B',
  warning: '#FFB323',
  info: '#48A7F8',
}

const getColorOpacity = (color: string, opacity: number): string => {
  if (opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16)
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`
  }
  return color
}

export {colors, getColorOpacity}
