import * as React from 'react'
import { Pokemon } from '../typescript/types'
import PokemonTypesList from '../components/pokemon-card/PokemonTypesList'
import PokemonStatsList from '../components/pokemon-card/PokemonStatsList'
import PokemonAbilitiesList from '../components/pokemon-card/PokemonAbilitiesList'
import '../styles/container/pokemonModalCardContainer.css'

interface Props {
  pokemon: Pokemon
  isHiddenModal: boolean
  handleModalCloseClick: () => void
}

const PokemonModalCardContainer: React.FC<Props> = ({ pokemon, isHiddenModal, handleModalCloseClick }: Props) => {
  const imgPokemon: string = pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default

  return (
    <div
      className='pokemon-modal-card-container'
      hidden={isHiddenModal}
    >
      <div className='modal' >
        <div className='modal__card' >
          <img
            className='modal__card-img'
            src={imgPokemon}
            alt={pokemon.name}
          />

          <PokemonTypesList typesList={pokemon.types} />
        </div>

        <div className="modal__card" >
          <span className="modal__card-title" >Stats</span>
          <PokemonStatsList statsList={pokemon.stats} />
        </div>

        <div className='modal__card' >
          <span className='modal__card-title' >Abilities</span>
          <PokemonAbilitiesList abilitiesList={pokemon.abilities} />
        </div>

        <button
          className='modal-close'
          type='button'
          onClick={handleModalCloseClick}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PokemonModalCardContainer
