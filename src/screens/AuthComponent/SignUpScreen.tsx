import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren, useCallback, useRef, useState} from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'
import NavigationHeader from '../../components/NavigationHeader'
import {StyleSheet, View} from 'react-native'
import InputField from '../../components/InputField'
import {FormValue} from './type'
import {FontSizes, colors, fonts, getColorOpacity, metrics, responsiveHeight} from '../../themes'
import Touchable from '../../components/Touchable'
import Text from '../../components/Text'
import {BaseDimention} from '../../utilities/utils'
import {goBack} from '../../navigation/NavigationService'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.SignUpScreen> & PropsWithChildren

enum SignUpForm {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

const SignUpScreen: React.FC<Props> = () => {
  const formValue = useRef<FormValue>()
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false)

  const checkFormFilled = useCallback(() => {
    const {email, password} = formValue.current || {}

    if (email && password) {
      return setIsFormFilled(true)
    }
    isFormFilled && setIsFormFilled(false)
  }, [isFormFilled])

  const onChangeText = useCallback((text: string, type: string) => {
    formValue.current = {
      ...formValue.current,
      [type]: text,
    }
    checkFormFilled()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NavigationHeader title="Đăng Ký" />
      <ScreenContainer style={styles.container}>
        <View style={styles.inputContainer}>
          <InputField
            inputKey={SignUpForm.email}
            style={styles.input}
            onChangeText={(text: string) => onChangeText(text, SignUpForm.email)}
            placeholder="Tài khoản hoặc email"
          />
          <InputField
            inputKey={SignUpForm.password}
            onChangeText={(text: string) => onChangeText(text, SignUpForm.password)}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            style={styles.input}
            containerStyle={styles.passwordContainer}
            maxLength={100}
          />
          <InputField
            inputKey={SignUpForm.confirmPassword}
            onChangeText={(text: string) => onChangeText(text, SignUpForm.confirmPassword)}
            placeholder="Xác nhận mật khẩu"
            secureTextEntry={true}
            style={styles.input}
            containerStyle={styles.passwordContainer}
            maxLength={100}
          />
        </View>
        <View style={styles.footer}>
          <Touchable onPress={() => goBack()}>
            <Text style={styles.btnSignIn}>Đăng Nhập</Text>
          </Touchable>
          <Touchable style={styles.btnSignUp}>
            <Text style={styles.signup}>Đăng Ký</Text>
          </Touchable>
        </View>
      </ScreenContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingBottom: BaseDimention.tabBarPaddingBottom,
  },
  inputContainer: {
    flex: 1,
    marginTop: metrics.huge,
  },
  input: {
    backgroundColor: getColorOpacity(colors.input, 0.3),
  },
  passwordContainer: {
    marginTop: metrics.small,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignUp: {
    height: responsiveHeight(52),
    backgroundColor: '#1546A0',
    borderRadius: metrics.borderRadiusLarge,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: metrics.large,
    marginBottom: 2,
  },
  btnSignIn: {
    fontSize: FontSizes.small,
    color: '#243656',
    fontFamily: fonts.regular,
  },
  signup: {
    fontSize: FontSizes.large,
    color: colors.white,
    fontFamily: fonts.regular,
  },
})

export default SignUpScreen
