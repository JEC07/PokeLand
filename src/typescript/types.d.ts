export interface Search {
  name: string
  url: string
}

export interface PokemonSearch {
  pokemon: Search
}

export interface TypeSearch {
  type: Search
}

export interface StatSearch {
  base_stat: number
  stat: Search
}

export interface AbilitySearch {
  ability: Search
}

export interface QueryResponse {
  count: number,
  next: string,
  previous: string,
  results: Search[]
}

export interface Pokemon {
  abilities : AbilitySearch[]
  'base_experience': number
  id: number
  name: string
  sprites: {
    other: {
      'dream_world': {
        'front_default': string
      }
      'official-artwork': {
        'front_default': string
      }
    }
  }
  stats: StatSearch[]
  types: TypeSearch[]
  weight: number
}

export interface PokemonWithPrice {
  id: number
  pokemon: Pokemon
  price: number
  amount: number
}

export interface PokemonAbility {
  'effect_entries': [{
    effect: string
    language: Search
    short_effect: string
  }]
  id: number
  name: string
  pokemon: PokemonSearch[]
}

export interface PokemonType {
  id: number
  name: string
  pokemon: PokemonSearch[]
}

export interface IsActive<T> {
  id: T
  isActive: boolean
}

export type PokemonOrUndefined = Pokemon | undefined
