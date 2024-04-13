// @ts-nocheck
import {AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk} from '@reduxjs/toolkit'
import idx from 'idx'
import {Dispatch} from 'redux'

type AsyncThunkConfig = {
  state?: unknown
  dispatch?: Dispatch
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
}

export function buildAsyncActions<
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = Record<string, unknown>,
>(
  actionName: string,
  service: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
  return createAsyncThunk(actionName, async (args, thunkAPI) => {
    try {
      return await service(args, thunkAPI)
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(
        error,
        idx(error, x => x.meta),
      )
    }
  })
}
