import * as React from 'react'
import { Pokemon } from '../typescript/types'
import PokemonCardContainer from './PokemonCardContainer'
import { usePagination } from '../hooks/usePagination'
import { errorOopsImg } from '../assets/imageUrl'
import CardSkeletonList from '../components/skeleton/CardSkeletonList'
import '../styles/container/pokemonsMainContainer.css'

interface Props {
  isLoading: boolean,
  error: boolean
  pokemonsList: Pokemon[],
  cardAmountLoading: number
}

const PokemonMainContainer: React.FC<Props> = ({ isLoading, error, pokemonsList, cardAmountLoading }: Props) => {
  const {
    newList: pokemons,
    changePagination,
    paginationList
  } = usePagination<Pokemon>(pokemonsList, 20)

  if (isLoading) {
    return (
      <main className='pokemons-container' >
        <CardSkeletonList amount={cardAmountLoading} />
      </main>
    )
  }

  if (error) {
    return (
      <main className='pokemons-container error' >
        <figure>
          <figcaption className='error-title' >
            Oops! <br /> Something went wrong.
          </figcaption>

          <img
            className='error-img'
            src={errorOopsImg}
            alt="result image not found "
          />
        </figure>
      </main>
    )
  }

  return (
    <main className='pokemons-container' >
      <ul className='pokemons-cards-container' >
        {
          pokemons.map((value: Pokemon) =>
            <PokemonCardContainer key={value.id} pokemon={value} />
          )
        }
      </ul>

      <ol className='pagination' >
        {
          paginationList.map((value: boolean, index: number) =>
            <li
              key={index}
            >
              <button
                className='pagination-btn'
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
