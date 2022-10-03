import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QueryResponse } from '../typescript/types'

const API = 'https://pokeapi.co/api/v2'

export const pokemonServiceRedux = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPokemons: builder.query<QueryResponse, void>({
      query: () => '/pokemon'
    }),
    getPokemonsTypes: builder.query<QueryResponse, void>({
      query: () => '/type'
    }),
    getPokemonsAbilities: builder.query<QueryResponse, void>({
      query: () => '/ability'
    })
  })
})

export const {
  useGetPokemonsQuery,
  useGetPokemonsTypesQuery,
  useGetPokemonsAbilitiesQuery
} = pokemonServiceRedux
