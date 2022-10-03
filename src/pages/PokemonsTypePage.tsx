import * as React from 'react'
import { useParams } from 'react-router-dom'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'
import { getPokemonsByType } from '../services/pokemonService'

const PokemonsTypePage: React.FC = () => {
  const { typeName } = useParams()
  const pokemonsList = usePokemons(typeName, getPokemonsByType)

  return (
    <PokemonMainContainer pokemonsList={pokemonsList} />
  )
}

export default PokemonsTypePage
