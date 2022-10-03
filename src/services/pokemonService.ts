import { getData } from '../tools/fetch'
import { Pokemon, PokemonAbility, PokemonType } from '../typescript/types'

const API = 'https://pokeapi.co/api/v2/'

export const getPokemonByName = (pokemonName: string): Promise<Pokemon|undefined> => {
  return getData<Pokemon>(`${API}pokemon/${pokemonName}`)
}

export const getPokemonsByType = (type: string): Promise<PokemonType|undefined> => {
  return getData<PokemonType>(`${API}type/${type}`)
}

export const getPokemonsByAbility = (ability: string): Promise<PokemonAbility|undefined> => {
  return getData<PokemonAbility>(`${API}ability/${ability}`)
}
