import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Pokemon } from '../typescript/types'
import { getPokemonByName } from '../services/pokemonService'
import { notFoundImg } from '../assets/imageUrl'
import { usePromise } from '../hooks/usePromise'
import PokemonMainContainer from '../container/PokemonsMainContainer'
import '../styles/pages/pokemonSearchPage.css'

const PokemonSearchPage: React.FC = () => {
  const { pokemonName } = useParams()
  const { result } = usePromise<Pokemon>(getPokemonByName, undefined, pokemonName)

  if (result) {
    return (
      <PokemonMainContainer pokemonsList={[result]} />
    )
  }

  return (
    <main className='search-not-found' >
      <p className='search-not-found__text' >
        Sorry! We could not find

        <span className='search-not-found__span' >
          {pokemonName}
        </span>
      </p>

      <img
        className='search-not-found__img'
        src={notFoundImg}
        alt="not-found"
      />
    </main>
  )
}

export default PokemonSearchPage
