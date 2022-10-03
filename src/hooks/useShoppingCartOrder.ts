import { ChangeEvent, useState } from 'react'
import { PokemonWithPrice } from '../typescript/types'
import { usePagination } from './usePagination'

export const useShoppingCartOrder = (pokemonsList: PokemonWithPrice[], card: number) => {
  const [cardsNumber, setCardsNumber] = useState<number>(card)

  const {
    newList: pokemons,
    paginationList,
    changePagination
  } = usePagination<PokemonWithPrice>(pokemonsList, cardsNumber)

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    if (value > 0) setCardsNumber(value)
  }

  return {
    cardsNumber,
    handleCardNumberChange,
    pokemons,
    paginationList,
    changePagination
  }
}
