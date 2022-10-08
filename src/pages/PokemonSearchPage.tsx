import * as React from 'react'
import { useParams } from 'react-router-dom'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import { usePokemons } from '../hooks/usePokemons'
import '../styles/pages/pokemonSearchPage.css'

const PokemonSearchPage: React.FC = () => {
  const { pokemonName } = useParams()
  const {
    error,
    isLoading,
    pokemon
  } = usePokemons('getPokemon', pokemonName)

  return (
    <PokemonMainContainer
      error={error}
      isLoading={isLoading}
      pokemonsList={pokemon ? [pokemon] : [] }
      cardAmountLoading={1}
    />
  )
}

export default PokemonSearchPage

/**
 *
 * <main className='search-not-found' >
      <p className='search-not-found__text' >
        Sorry! We could not find

        <span className='search-not-found__span' >
          {pokemonName}
        </span>
      </p>

      <img
        className='search-not-found__img'
        src={errorNotFoundImg}
        alt="not-found"
      />
    </main>
 */
