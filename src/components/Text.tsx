import React from 'react'
import {Text as ReactNativeText, TextProps as TextProperties} from 'react-native'

export interface TextProps extends TextProperties {
  /**
   * Children of text
   * @default undefined
   */
  children?: React.ReactNode
}

const Text = (props: TextProps) => {
  const {children, style, ...rest} = props

  return (
    <ReactNativeText allowFontScaling={false} {...rest} style={[style]}>
      {children}
    </ReactNativeText>
  )
}
export default Text
