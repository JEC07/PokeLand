import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../redux/productsSlice'
import { pokemonServiceRedux } from '../services/pokemonServiceRedux'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [pokemonServiceRedux.reducerPath]: pokemonServiceRedux.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonServiceRedux.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
