import * as React from 'react'
import { useParams } from 'react-router-dom'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'
import { getPokemonsByAbility } from '../services/pokemonService'

const PokemonsAbilityPage: React.FC = () => {
  const { abilityName } = useParams()
  const pokemonsList = usePokemons(abilityName, getPokemonsByAbility)

  return (
    <PokemonMainContainer pokemonsList={pokemonsList} />
  )
}

export default PokemonsAbilityPage
