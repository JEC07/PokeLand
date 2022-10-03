import * as React from 'react'
import { useGetPokemonsQuery } from '../services/pokemonServiceRedux'
import { Pokemon } from '../typescript/types'
import { getPokemonByName } from '../services/pokemonService'
import { usePromise } from '../hooks/usePromise'
import PokemonMainContainer from '../container/PokemonsMainContainer'

const PokemonsHomePage: React.FC = () => {
  const { data } = useGetPokemonsQuery()
  const [pokemonsNameList, setPokemonsNameList] = React.useState<string[]>()
  const { resultList } = usePromise<Pokemon>(getPokemonByName, pokemonsNameList)

  React.useEffect(() => {
    if (data) {
      setPokemonsNameList(
        data.results.map((value) => value.name)
      )
    }
  }, [data])

  return (
    <PokemonMainContainer pokemonsList={resultList} />
  )
}

export default PokemonsHomePage
