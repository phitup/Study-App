/* eslint-disable @typescript-eslint/no-unused-vars */
import {BaseQueryApi, FetchArgs, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'
import Config from 'react-native-config'

import {RootState} from '..'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: Config.SERVICE_BASE_URL,
  prepareHeaders: async (headers, {getState}) => {
    const token = (getState() as RootState).auth.access_token

    if (!!token && !headers.has('refresh')) {
      headers.set('x-access-token', token)
    }

    return headers
  },
})

const onLogout = ({api}: {api: BaseQueryApi}) => {
  console.log('ccccc logout')
}

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {noAuthRequired?: unknown},
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  //const isOffline = await checkIfOffline()

  const {getState} = api

  const isLoggedIn = !!(getState() as RootState).auth.access_token

  // if (isOffline) {
  //   return { error: true }
  // }

  if (!isLoggedIn && !extraOptions?.noAuthRequired) {
    return {error: true}
  }

  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        onLogout({api})
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const baseQuerySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: () => ({}),
})
