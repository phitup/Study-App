import {baseQuerySplitApi as api} from './baseQueryApi'
import {specificUserServiceBase} from './constant'

const rootApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: queryArg => ({
        url: `${specificUserServiceBase}/auth/login`,
        method: 'POST',
        body: queryArg,
      }),
      invalidatesTags: ['User'],
      extraOptions: {noAuthRequired: true},
    }),
    register: build.mutation({
      query: queryArg => ({
        url: `${specificUserServiceBase}/auth/register`,
        method: 'POST',
        body: queryArg,
      }),
      invalidatesTags: ['User'],
      extraOptions: {noAuthRequired: true},
    }),
  }),
  overrideExisting: true,
})

export {rootApi}
export const {useRegisterMutation, useLoginMutation} = rootApi
