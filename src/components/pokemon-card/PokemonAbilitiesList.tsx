import * as React from 'react'
import { getPokemonsByAbility } from '../../services/pokemonService'
import { AbilitySearch, PokemonAbility } from '../../typescript/types'
import '../../styles/pokemon-card/pokemonAbilitiesList.css'

interface Props {
  abilitiesList: AbilitySearch[]
}

const PokemonAbilitiesList: React.FC<Props> = ({ abilitiesList }: Props) => {
  const [abilitySummaryList, setAbilitySummaryList] = React.useState<string[]>(Array(abilitiesList.length).fill(''))

  const handleAbilityClick = async (ability: string, position: number) => {
    const result: PokemonAbility | undefined = await getPokemonsByAbility(ability)
    const data = result?.effect_entries.find((value) => value.language.name === 'en')

    if (data) {
      setAbilitySummaryList(
        abilitySummaryList.map((value: string, index: number) => {
          if (index === position) return data.effect

          return value
        })
      )
    }
  }

  return (
    <ul className='pokemon-abilities' >
      {
        abilitiesList.map((value: AbilitySearch, index: number) =>
          <li
            key={index}
            className="pokemon-ability"
          >
            <details className="pokemon-ability__details" >
              <summary
                className='pokemon-ability__details-name'
                onClick={() => handleAbilityClick(value.ability.name, index)}
              >
                {value.ability.name}
              </summary>

              <p className='pokemon-ability__details-text' >{abilitySummaryList[index]}</p>
            </details>
          </li>
        )
      }
    </ul>
  )
}

export default PokemonAbilitiesList
