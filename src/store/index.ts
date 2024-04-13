import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import createDebugger from 'redux-flipper'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from 'redux-persist'
import {rootApi} from './Query'
import auth from './Auth'

const reducers = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  auth,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([rootApi.middleware])

    if (__DEV__) {
      const reduxFlipperDebugger = createDebugger()
      middlewares.push(reduxFlipperDebugger)
    }

    return middlewares
  },
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export {store, persistor}
