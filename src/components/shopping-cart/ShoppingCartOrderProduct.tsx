import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { removeOneProductByID, updateOneProduct } from '../../redux/productsSlice'
import { PokemonWithPrice } from '../../typescript/types'
import '../../styles/shopping-cart/shoppingCartOrderProduct.css'

interface Props {
  pokemonWithPrice: PokemonWithPrice
}

const ShoppingCartOrderProduct: React.FC<Props> = ({ pokemonWithPrice }: Props) => {
  const pokemonImg = pokemonWithPrice.pokemon.sprites.other.dream_world.front_default ?? pokemonWithPrice.pokemon.sprites.other['official-artwork'].front_default
  const dispatch = useAppDispatch()

  const handleRemoveClick = () => dispatch(removeOneProductByID(pokemonWithPrice.id))

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    if (value >= 0) {
      dispatch(updateOneProduct({
        id: pokemonWithPrice.id,
        changes: { amount: value }
      }))
    }
  }

  return (
    <li className='shopping-cart-order__product' >
      <img
        className='shopping-cart-order__product-img'
        src={pokemonImg}
        alt="pokemon-img"
      />

      <span className='shopping-cart-order__product-title' >{pokemonWithPrice.pokemon.name}</span>
      <span className='shopping-cart-order__product-price' >$ {pokemonWithPrice.price}</span>
      <span className='shopping-cart-order__product-price--total' >$ {pokemonWithPrice.price * pokemonWithPrice.amount}</span>

      <input
        className='shopping-cart-order__product-amount'
        type="number"
        value={pokemonWithPrice.amount}
        onChange={(e) => handleChangeInput(e)}
      />

      <button
        className='shopping-cart-order__product-remove'
        type='button'
        onClick={handleRemoveClick}
      >
        X
      </button>
    </li>
  )
}

export default ShoppingCartOrderProduct
