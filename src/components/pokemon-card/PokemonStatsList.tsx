import * as React from 'react'
import { StatSearch } from '../../typescript/types'
import '../../styles/pokemon-card/pokemonStatsList.css'

interface Props {
  statsList: StatSearch[]
}

const PokemonStatsList: React.FC<Props> = ({ statsList }: Props) => {
  return (
    <ul className='pokemon-stats' >
      {
        statsList.map((value: StatSearch, index:number) =>
          <li
            key={index}
            className="pokemon-stat"
          >
            <span className='pokemon-stat-name' >{value.stat.name}:</span>
            <span className='pokemon-stat-base' >{value.base_stat}</span>
          </li>
        )
      }
    </ul>
  )
}

export default PokemonStatsList
