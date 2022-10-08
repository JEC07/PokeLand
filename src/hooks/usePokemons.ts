import { useEffect, useState } from 'react'
import { getPokemonByName } from '../services/pokemonService'
import { removeUndefined } from '../tools/array'
import { Pokemon, PokemonAbility, PokemonSearch, PokemonType, QueryResponse, Search } from '../typescript/types'

type PokemonByAbilityOrType = PokemonType | PokemonAbility
type FunctionType = 'getPokemonsByAbilityOrType' | 'getPokemon' | 'getPokemons'

export const usePokemons = (
  functionType: FunctionType,
  search?: string,
  searchList?: QueryResponse,
  callback?: (search: string) => Promise<PokemonByAbilityOrType | undefined>
) => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (search || searchList) {
      setIsLoading(true)
      setError(false)

      if (functionType === 'getPokemonsByAbilityOrType') getPokemonsByAbilityOrType()
      if (functionType === 'getPokemon') getPokemon()
      if (functionType === 'getPokemons') getPokemons()
    }
  }, [functionType, search, searchList])

  const getPokemonsByAbilityOrType = async () => {
    if (search && callback) {
      const data = await callback(search)

      if (data && (data.pokemon.length > 0)) {
        const response: (Pokemon | undefined)[] = await Promise.all(
          data.pokemon.map((value: PokemonSearch) => getPokemonByName(value.pokemon.name))
        )

        setPokemonsList(removeUndefined<Pokemon>(response))
        return resetByDefault()
      }
    }

    return resetByDefaultWithError()
  }

  const getPokemon = async () => {
    if (search) {
      const data = await getPokemonByName(search)

      if (data) {
        setPokemon(data)
        return resetByDefault()
      }
    }

    return resetByDefaultWithError()
  }

  const getPokemons = async () => {
    if (searchList && searchList.results.length > 0) {
      const newList = searchList.results.map((value: Search) => value.name)
      const promiseList = newList.map((value: string) => getPokemonByName(value))
      const data = await Promise.all(promiseList)
      const newData = removeUndefined<Pokemon>(data)

      if (newData.length > 0) {
        setPokemonsList(newData)
        return resetByDefault()
      }
    }

    return resetByDefaultWithError()
  }

  const resetByDefaultWithError = () => {
    setError(true)
    setIsLoading(false)
  }

  const resetByDefault = () => {
    setError(false)
    setIsLoading(false)
  }

  return {
    pokemonsList,
    pokemon,
    isLoading,
    error
  }
}
