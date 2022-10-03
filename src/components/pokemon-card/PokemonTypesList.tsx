import * as React from 'react'
import { TypeSearch } from '../../typescript/types'
import '../../styles/pokemon-card/pokemonsTypesList.css'

interface Props {
  typesList: TypeSearch[]
}

const PokemonTypesList: React.FC<Props> = ({ typesList }: Props) => {
  return (
    <ul className='pokemon-types' >
      {
        typesList.map((value: TypeSearch, index: number) =>
          <li
            key={index}
            className="pokemon-type-name"
          >
            {value.type.name}
          </li>
        )
      }
    </ul>
  )
}

export default PokemonTypesList
