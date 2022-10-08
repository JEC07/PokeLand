import * as React from 'react'
import { useParams } from 'react-router-dom'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'
import { getPokemonsByType } from '../services/pokemonService'

const PokemonsTypePage: React.FC = () => {
  const { typeName } = useParams()
  const {
    error,
    isLoading,
    pokemonsList
  } = usePokemons('getPokemonsByAbilityOrType', typeName, undefined, getPokemonsByType)

  return (
    <PokemonMainContainer
      isLoading={isLoading}
      error={error}
      pokemonsList={pokemonsList}
      cardAmountLoading={10}
    />
  )
}

export default PokemonsTypePage
