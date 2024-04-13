import React from 'react'
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Text from './Text'
import {FontSizes, colors, fonts, isIOS, responsiveHeight} from '../themes'

export interface InputFieldErrors {
  [field: string]: string
}

export interface Props extends TextInputProps {
  showError?: boolean
  title?: string
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  leftItem?: React.ReactNode
  rightItem?: React.ReactNode
  titleStyle?: StyleProp<TextStyle>
  rightItemStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  onLayout?: (event: LayoutChangeEvent) => void
  validateOnChange?: (inputKey?: string) => void
}

type InputKeyWithOptionalErrors = {errors?: InputFieldErrors} & (
  | {inputKey: string; errors: InputFieldErrors}
  | {inputKey?: string; errors?: never}
)

type InputFieldProps = Props & InputKeyWithOptionalErrors

const InputField: React.FC<InputFieldProps> = ({
  inputKey,
  // showError,
  // errors,
  title,
  containerStyle,
  textStyle,
  leftItem,
  rightItem,
  titleStyle,
  rightItemStyle,
  style,
  onChangeText,
  onLayout,
  validateOnChange,
  ...rest
}) => (
  <View style={containerStyle} onLayout={onLayout}>
    {!!title && <Text style={StyleSheet.flatten([styles.title, titleStyle])}>{title}</Text>}
    <View
      style={StyleSheet.flatten([
        styles.content,
        // showError && Common.borderRed,
        style,
      ])}>
      {leftItem && <View style={styles.rightSpacing}>{leftItem}</View>}
      <TextInput
        keyboardAppearance={'light'}
        placeholderTextColor={colors.placeHolder}
        selectionColor={'green'}
        onChangeText={(text: string) => {
          validateOnChange?.(inputKey)
          onChangeText?.(text?.trim())
        }}
        style={[styles.input, textStyle]}
        autoCapitalize={'none'}
        importantForAutofill="no"
        autoComplete="off"
        {...rest}
      />
      {!!rightItem && <View style={rightItemStyle}>{rightItem}</View>}
    </View>
    {/* {showError && errors && inputKey && (
      <Text style={[Fonts.redText, Fonts.captionC1sb, Gutters.littleTMargin]}>{`* ${errors[inputKey]}`}</Text>
    )} */}
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: responsiveHeight(6),
    fontFamily: fonts.regular,
    fontSize: FontSizes.span,
    color: colors.black,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    // backgroundColor: Colors.gray1001,
    minHeight: responsiveHeight(40),
    paddingHorizontal: 10,
    height: responsiveHeight(44),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.black,
    fontSize: FontSizes.span,
    lineHeight: isIOS ? 0 : responsiveHeight(21),
    // fontFamily: fonts.regular,
    paddingVertical: 0,
    paddingRight: responsiveHeight(15),
  },
  rightSpacing: {
    paddingRight: responsiveHeight(15),
  },
})

export default InputField
