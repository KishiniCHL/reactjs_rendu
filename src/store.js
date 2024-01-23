import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { produitsAPI } from './Services/API'

export const store = configureStore({
  reducer: {
    [produitsAPI.reducerPath]: produitsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produitsAPI.middleware),
})

setupListeners(store.dispatch)