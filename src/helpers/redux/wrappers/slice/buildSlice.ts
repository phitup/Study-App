import {CreateSliceOptions, Slice, SliceCaseReducers, createSlice} from '@reduxjs/toolkit'

type Module = {
  initialState: any
  action: any
  reducers: any
}

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(
  name: Name,
  modules: Module[] = [],
  sliceInitialState: State = Object.create({}),
): Slice<State, CaseReducers, Name> {
  const initialState: State = modules.reduce(
    (acc: typeof sliceInitialState, module: Module) => ({
      ...acc,
      ...module.initialState,
    }),
    sliceInitialState,
  )

  const options: CreateSliceOptions<State, CaseReducers, Name> = {
    name,
    initialState: initialState,
    extraReducers: builder => {
      modules.forEach(module => {
        if (module.action.typePrefix) {
          Object.entries(module.action).forEach(([actionName, action]) => {
            if (typeof action === 'function') {
              builder.addCase(module.action[actionName], module.reducers[actionName])
            }
          })
        } else {
          builder.addCase(module.action, module.reducers)
        }
      })
    },
    reducers: Object.create({}),
  }

  return createSlice(options)
}
