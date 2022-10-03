import * as React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectProductById } from '../redux/productsSlice'
import { Pokemon, PokemonWithPrice } from '../typescript/types'
import PokemonModalCardContainer from './PokemonModalCardContainer'
import PokemonCardButtons from '../components/pokemon-card/PokemonCardButtons'
import { useActive } from '../hooks/useActive'
import '../styles/container/pokemonCardContainer.css'
import '../styles/loading.css'

interface Props {
  pokemon: Pokemon
}

const PokemonCardContainer: React.FC<Props> = ({ pokemon }: Props) => {
  const pokemonIsAdded = useAppSelector((state) => selectProductById(state, pokemon.id))
  const pokemonImg: string = pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default
  const modal = useActive(true)
  const [pokemonWithPrice, setPokemonWithPrice] = React.useState<PokemonWithPrice>()

  React.useEffect(() => {
    if (pokemon) {
      setPokemonWithPrice({
        id: pokemon.id,
        pokemon,
        price: (pokemon.base_experience * 10),
        amount: 1
      })
    }
  }, [pokemon])

  if (!pokemonWithPrice) {
    return (
      <div className='pokemon-card-container' >
         <div className='loading' >Loading...</div>
      </div>
    )
  }

  const handleCardAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    if (value >= 0) {
      setPokemonWithPrice({
        ...pokemonWithPrice,
        amount: value
      })
    }
  }

  return (
    <li className='pokemon-card-container' >
      <div className='pokemon-card-img-container' >
        <img
          className='pokemon-card-img'
          src={pokemonImg}
          alt={pokemonWithPrice.pokemon.name}
          onClick={modal.changeActive}
        />
      </div>

      <span className='pokemon-card-title' >{pokemonWithPrice.pokemon.name}</span>
      <span className='pokemon-card-price__unit' >${pokemonWithPrice.price}</span>

      <input
        className='pokemon-card-amount'
        type="number"
        aria-label='card amount'
        value={pokemonWithPrice.amount}
        disabled={Boolean(pokemonIsAdded)}
        onChange={(e) => handleCardAmountChange(e)}
      />

      <span className='pokemon-card-price__total' >
        ${pokemonWithPrice.amount * pokemonWithPrice.price}
      </span>

      <PokemonCardButtons
        pokemonWithPrice={pokemonWithPrice}
        isAdded={Boolean(pokemonIsAdded)}
        handleModalClick={modal.changeActive}
      />

      <PokemonModalCardContainer
        pokemon={pokemonWithPrice.pokemon}
        isHiddenModal={modal.isActive}
        handleModalCloseClick={modal.changeActive}
      />
    </li>
  )
}

export default PokemonCardContainer
