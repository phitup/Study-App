import RouteKey from '@/navigation/RouteKey'
import {AppStackParamList} from '@/navigation/types'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren, useCallback, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {FormValue} from './type'
import {saveAccessToken} from '@/store/Auth/actions'
import {StyleSheet, View} from 'react-native'
import InputField from '@/components/InputField'
import {Touchable, Text} from '@/components'
import {navigate} from '@/navigation/NavigationService'
import {FontSizes, colors, fonts, metrics, responsiveHeight} from '@/themes'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.LoginScreen> & PropsWithChildren

enum LoginForm {
  email = 'email',
  password = 'password',
}

const LoginScreen: React.FC<Props> = () => {
  const dispatch = useDispatch()
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

  const handleLogin = useCallback(() => {
    dispatch(saveAccessToken.action({accessToken: 'dsadjkahsdjkashjkdhgasjk'}))
  }, [])

  return (
    <View style={styles.container}>
      <InputField
        inputKey={LoginForm.email}
        style={styles.input}
        onChangeText={(text: string) => onChangeText(text, LoginForm.email)}
        textStyle={styles.inputText}
        placeholder="Tài khoản hoặc email"
      />
      <InputField
        inputKey={LoginForm.password}
        onChangeText={(text: string) => onChangeText(text, LoginForm.password)}
        placeholder="Mật Khẩu"
        secureTextEntry={true}
        style={styles.input}
        textStyle={styles.inputText}
        containerStyle={styles.passwordContainer}
        maxLength={100}
      />
      <Touchable style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Đăng Nhập</Text>
      </Touchable>
      <View style={styles.footer}>
        <Touchable>
          <Text style={styles.btnSecond}>Quên mật khẩu?</Text>
        </Touchable>
        <View style={styles.line} />
        <Touchable onPress={() => navigate(RouteKey.SignUpScreen)}>
          <Text style={styles.btnSecond}>Đăng Ký</Text>
        </Touchable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: metrics.xxl,
  },
  input: {
    height: responsiveHeight(62),
    borderRadius: metrics.borderRadiusHuge,
    borderWidth: 1,
    borderColor: colors.black,
  },
  inputText: {
    fontSize: FontSizes.body,
  },
  passwordContainer: {
    marginTop: metrics.small,
  },
  button: {
    height: responsiveHeight(72),
    backgroundColor: '#1546A0',
    borderRadius: metrics.borderRadiusHuge,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: metrics.large,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: FontSizes.large,
  },
  footer: {
    marginTop: metrics.massive,
    alignItems: 'center',
  },
  line: {
    width: responsiveHeight(72),
    height: responsiveHeight(2),
    backgroundColor: '#F5F7FA',
    marginVertical: metrics.sMedium,
  },
  btnSecond: {
    color: '#243656',
    fontFamily: fonts.regular,
    fontSize: FontSizes.small,
  },
})

export default LoginScreen
