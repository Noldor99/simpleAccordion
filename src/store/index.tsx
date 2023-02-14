import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { placeholderApi } from './redusers/placeholderApi'
 
export const store = configureStore({
  reducer: {
    [placeholderApi.reducerPath]: placeholderApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(placeholderApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>