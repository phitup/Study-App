import {RootState} from '..'
import {buildSlice} from '../../helpers/redux'
import {saveAccessToken} from './actions'

export type AuthenticationTokenState = {
  access_token?: string
  refresh_token?: string
}

const sliceInitialState: AuthenticationTokenState = {}

export default buildSlice('auth', [saveAccessToken], sliceInitialState).reducer

export const selectIsLoggedIn = (state: RootState) => !!state.auth.access_token
export const selectAccessToken = (state: RootState) => state.auth.access_token
