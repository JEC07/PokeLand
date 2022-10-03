import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addOneProduct, removeOneProductByID } from '../../redux/productsSlice'
import { PokemonWithPrice } from '../../typescript/types'
import '../../styles/pokemon-card/pokemonCardButtons.css'

interface Props {
  pokemonWithPrice: PokemonWithPrice
  isAdded: boolean
  handleModalClick: () => void
}

const PokemonCardButtons: React.FC<Props> = ({ pokemonWithPrice, isAdded, handleModalClick }) => {
  const dispatch = useAppDispatch()

  const handleBuyButtonClick = () => dispatch(addOneProduct(pokemonWithPrice))
  const handleCancelButtonClick = () => dispatch(removeOneProductByID(pokemonWithPrice.id))

  return (
    <>
      <button
        className='pokemon-card__buy-btn'
        type="button"
        onClick={handleBuyButtonClick}
        disabled={pokemonWithPrice.amount < 1}
        hidden={isAdded}
      >
        Buy Now
      </button>

      <button
        className='pokemon-card__cancel-btn'
        type="button"
        onClick={handleCancelButtonClick}
        hidden={!isAdded}
      >
        Cancel
      </button>

      <button
        className='pokemon-card__details-btn'
        type='button'
        onClick={handleModalClick}
      >
        » Details
      </button>
    </>
  )
}

export default PokemonCardButtons
