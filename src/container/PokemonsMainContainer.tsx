import * as React from 'react'
import { Pokemon } from '../typescript/types'
import PokemonCardContainer from './PokemonCardContainer'
import { usePagination } from '../hooks/usePagination'
import '../styles/container/pokemonsMainContainer.css'

interface Props {
  pokemonsList: Pokemon[]
}

const PokemonMainContainer: React.FC<Props> = ({ pokemonsList }: Props) => {
  const {
    newList: pokemons,
    changePagination,
    paginationList
  } = usePagination<Pokemon>(pokemonsList, 20)

  return (
    <main className='pokemons-main-container'>
      <ul className='pokemons-cards-container' >
        {
          pokemons.map((value: Pokemon) =>
            <PokemonCardContainer key={value.id} pokemon={value} />
          )
        }
      </ul>

      <ol className='pokemons-cards-pagination' >
        {
          paginationList.map((value: boolean, index: number) =>
            <li
              key={index}
              className="pokemon-card-pagination"
            >
              <button
                className='pagination'
                type='button'
                onClick={() => changePagination(index)}
                disabled={value}
              >
                {index}
              </button>
            </li>
          )
        }
      </ol>
    </ main>
  )
}

export default PokemonMainContainer
