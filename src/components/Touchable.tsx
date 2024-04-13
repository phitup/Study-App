import React, {useMemo} from 'react'
import {StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native'

export interface TouchableProps extends TouchableOpacityProps {
  disabled?: boolean
  loading?: boolean
  eventName?: string

  /**
   * Children of component
   * @default undefined
   */
  children?: React.ReactNode
}

const Touchable = (props: TouchableProps) => {
  const {disabled, loading, children, style, onPress, ...rest} = props

  const viewStyle = useMemo(
    () => StyleSheet.flatten<ViewStyle>([style as ViewStyle]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, style],
  )

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      {...rest}
      onPress={() => {
        if (onPress && !loading) {
          // @ts-ignore
          onPress()
        }
      }}
      style={viewStyle}>
      {children}
    </TouchableOpacity>
  )
}
export default Touchable
