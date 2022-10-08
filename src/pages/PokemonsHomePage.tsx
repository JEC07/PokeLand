import * as React from 'react'
import { useGetPokemonsQuery } from '../services/pokemonServiceRedux'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'

const PokemonsHomePage: React.FC = () => {
  const { data } = useGetPokemonsQuery()
  const {
    error,
    isLoading,
    pokemonsList
  } = usePokemons('getPokemons', undefined, data)

  return (
    <PokemonMainContainer
      error={error}
      isLoading={isLoading}
      pokemonsList={pokemonsList}
      cardAmountLoading={10}
    />
  )
}

export default PokemonsHomePage
