import { useEffect, useState } from 'react'
import { getPokemonByName } from '../services/pokemonService'
import { removeUndefined } from '../tools/array'
import { Pokemon, PokemonAbility, PokemonSearch, PokemonType } from '../typescript/types'

type PokemonByAbilityOrType = PokemonType | PokemonAbility

export const usePokemons = (
  searchPokemon: string | undefined,
  callback: (searchPokemon: string) => Promise<PokemonByAbilityOrType | undefined>
) => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([])

  useEffect(() => {
    if (searchPokemon) {
      const getPokemons = async () => {
        const data: PokemonByAbilityOrType | undefined = await callback(searchPokemon)

        if (data) {
          const response: (Pokemon | undefined)[] = await Promise.all(
            data.pokemon.map((value: PokemonSearch) => getPokemonByName(value.pokemon.name))
          )

          setPokemonsList(removeUndefined<Pokemon>(response))
        }
      }

      getPokemons()
    }
  }, [searchPokemon, callback])

  return pokemonsList
}
