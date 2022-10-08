import * as React from 'react'
import { useParams } from 'react-router-dom'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'
import { getPokemonsByAbility } from '../services/pokemonService'

const PokemonsAbilityPage: React.FC = () => {
  const { abilityName } = useParams()
  const {
    error,
    isLoading,
    pokemonsList
  } = usePokemons('getPokemonsByAbilityOrType', abilityName, undefined, getPokemonsByAbility)

  return (
    <PokemonMainContainer
      isLoading={isLoading}
      error={error}
      pokemonsList={pokemonsList}
      cardAmountLoading={10}
    />
  )
}

export default PokemonsAbilityPage
