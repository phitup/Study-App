import {createAction} from '@reduxjs/toolkit'

import {AuthenticationTokenState} from '.'

interface IAuthToken {
  accessToken: string
  refreshToken: string
  w3aAccessToken: string
}

interface PayloadInterface<T> {
  payload: T
}

export const saveAccessToken = {
  initialState: {},
  action: createAction<{
    accessToken: string | null
    refreshToken?: string | null
  }>('SAVE_TOKEN'),
  reducers(state: AuthenticationTokenState, {payload}: PayloadInterface<IAuthToken>) {
    if (typeof payload !== 'undefined') {
      state.access_token = payload.accessToken
      state.refresh_token = payload.refreshToken
    }
  },
}
